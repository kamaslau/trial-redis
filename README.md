# trial-redis

Trial or micro-service unit of [Redis](https://redis.io/docs/) with [official Node.js client driver](https://redis.io/docs/clients/nodejs/).

The [Official RedisInsight](https://redis.com/redis-enterprise/redis-insight/) or [Another Redis Desktop Manager](https://github.com/qishibo/AnotherRedisDesktopManager) is recommended as the desktop client.

## Service URL

- Database (Redis) [redis://localhost:6379](redis://localhost:6379)

## Default user

None, as default.

## Usage

### Start with [Docker Compose](https://docs.docker.com/compose/)

```bash
# Initiate .env file
cp .env.sample .env
# Start services
docker compose up -d
```

Update existing composed containers with latest images:

```bash
docker compose pull && \
docker compose down && \
docker compose up -d
```

### Start services individually

#### Redis

Launch Redis with docker on port _6379_.

```shell
docker run --name redis -d -p 6379:6379 --restart=always redis/redis-stack-server:latest
```

## Testing

Start Node.js application on port _3000_.

[http://localhost:3000](http://localhost:3000)

```shell
pnpm i
pnpm start:dev # or just pnpm start, with PM2 or Docker watching its back
```

## Further operations

```shell
# Enter container and initiate shell
docker exec -it redis sh
```

## Relevent Docker images

- [Redis](https://hub.docker.com/_/redis)

## References

- https://developer.redis.com/create/docker/redis-on-docker/
