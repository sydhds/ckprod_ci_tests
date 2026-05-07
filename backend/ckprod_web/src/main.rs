use axum::{Router, response::Html, routing::get};

#[tokio::main]
async fn main() {
    // build our application with a route
    let app = Router::new().route("/", get(handler));

    // run it
    let listener = tokio::net::TcpListener::bind("127.0.0.1:3000")
        .await
        .unwrap();
    println!("listening on {}", listener.local_addr().unwrap());
    axum::serve(listener, app).await;
}

async fn handler() -> Html<&'static str> {
    Html("<h1>Hello, World!</h1>")
}

#[cfg(test)]
mod tests {
    use super::*;
    use sqlx::postgres::PgPoolOptions;

    #[tokio::test]
    async fn test_db_select() -> anyhow::Result<()> {
        let db_url_default = "postgres://user:password@localhost:5432".to_string();
        let db_url = format!(
            "{}/{}",
            std::env::var("DATABASE_URL").unwrap_or(db_url_default),
            "postgres"
        );
        println!("Using db_url: {}", db_url);

        let pool = PgPoolOptions::new()
            .max_connections(5)
            .connect(db_url.as_str())
            .await?;

        // Make a simple query to return the given parameter (use a question mark `?` instead of `$1` for MySQL/MariaDB)
        let row: (i64,) = sqlx::query_as("SELECT $1")
            .bind(150_i64)
            .fetch_one(&pool)
            .await?;

        assert_eq!(row.0, 150);

        Ok(())
    }
}
