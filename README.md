# trial-redis

Trial or micro-service unit of [Redis](https://redis.io/docs/) with [official Node.js client library](https://redis.io/docs/clients/nodejs/), based on the official image from docker hub(https://hub.docker.com/_/redis).

The [Official RedisInsight](https://redis.com/redis-enterprise/redis-insight/) or [Another Redis Desktop Manager](https://github.com/qishibo/AnotherRedisDesktopManager) is recommended as the desktop client.

# Startup

Launch Redis with docker on port 6379.

```shell
docker run --name redis -d -p 6379:6379 --restart=always redis
```

Start Node.js application on port 3000.

[http://localhost:3000](http://localhost:3000)

```shell
pnpm i
pnpm start:dev # or just pnpm start, with PM2 or Docker watching its back
```
