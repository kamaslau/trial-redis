# trial-redis

Trial or micro-service unit of [Redis](https://redis.io/docs/) with [official Node.js client library](https://redis.io/docs/clients/nodejs/), based on the official image from docker hub(https://hub.docker.com/_/redis).

The [Official RedisInsight](https://redis.com/redis-enterprise/redis-insight/) or [Another Redis Desktop Manager](https://github.com/qishibo/AnotherRedisDesktopManager) is recommended as the desktop client.

## Service URL

- Database (Redis) [redis://localhost:6379](redis://localhost:6379)

## Default user

None, as default.

## Startup

### Start a service group

Manage service stack with [Docker Compose](https://docs.docker.com/compose/).

```bash
# Start services
docker compose up -d

# Stop services and prune Docker volumes
docker compose down -v
```

To update containers with latest images:

```bash
docker compose pull
docker compose up -d
```

### Start services individually

#### Redis

Launch Redis with docker on port 6379.

```shell
docker run --name redis -d -p 6379:6379 --restart=always redis/redis-stack-server:latest
```

## Testing

Start Node.js application on port 3000.

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

## References

- https://developer.redis.com/create/docker/redis-on-docker/
