import Koa from "koa";
import { createClient } from "redis";

const initDB = async () => {
  const client = createClient() ?? null;

  client.on("error", (error) => console.error(error));

  await client.connect();

  return client;
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
