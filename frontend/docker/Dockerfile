FROM ubuntu:26.04

# Prevent interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Install Node.js 24.x and build essentials
RUN apt-get update && apt-get upgrade -y && apt-get install --no-install-recommends -y \
    curl \
    ca-certificates \
    gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_24.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN mkdir -p node_modules .react-router && chown -R ubuntu:ubuntu /app
USER ubuntu

COPY --chown=ubuntu:ubuntu package*.json ./
RUN npm install

# Copy the rest of the source code
COPY --chown=ubuntu:ubuntu . .

EXPOSE 5173

# Vite needs --host to be accessible from outside the container
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]