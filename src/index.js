import { createClient } from 'redis';

const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();
await client.set('sample-key:lastRequestedAt', Date.now()/1000);
const value = await client.get('sample-key:lastRequestedAt');
console.log('result: ', value)
