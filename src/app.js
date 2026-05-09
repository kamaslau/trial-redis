import Koa from "koa";
import { createClient } from "redis"; // https://www.npmjs.com/package/redis

const defaultUrl = "redis://localhost:6379";

const initDB = async (url = process.env.REDIS_URL ?? defaultUrl) => {
  const client = createClient({ url });

  try {
    // Connect the client to the server
    await client.connect();

    return client;
  } catch (error) {
    console.log("error: ", error);
  }
};

const app = new Koa();

app.context.db = await initDB();

app.use(async (ctx) => {
  const keyName = "sample-key:lastRequestedAt";
  const keyValue = Date.now();

  await ctx.db.set(keyName, keyValue);

  const value = await ctx.db.get(keyName);

  ctx.body = { key: keyName, value };
});

app.listen(3000);
