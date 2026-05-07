dev:
	docker compose -f docker/docker-compose-dev.yml --profile frontend_dev up --build

bdev:
	docker compose -f docker/docker-compose-dev.yml --profile backend_dev up --build

down:
	docker compose -f docker/docker-compose-dev.yml down
