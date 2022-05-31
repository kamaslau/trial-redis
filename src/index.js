import Koa from 'koa'
import { createClient } from 'redis'
const client = createClient()
client.on('error', (err) => console.log('Redis Client Error', err))

const app = new Koa()

app.use(async ctx => {
  await client.connect()

  const keyName = 'sample-key:lastRequestedAt'
  const keyValue = Date.now()

  await client.set(keyName, keyValue)
  const value = await client.get(keyName)

  client.disconnect()

  ctx.body = { key: keyName, value }
})

app.listen(3000)
