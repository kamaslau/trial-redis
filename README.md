# trial-redis

Trial or micro-service unit of [Redis](https://redis.io/docs/), based on the official image from docker hub(https://hub.docker.com/_/redis).

The [Another Redis Desktop Manager](https://github.com/qishibo/AnotherRedisDesktopManager) is recommended as the desktop client.

# Startup

```
# Launch with docker
docker run --name redis -d -p 6379:6379 --restart=always redis
```
