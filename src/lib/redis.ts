import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

export async function setCache(key: string, value: string) {
  await client.set(key, value);
}

export async function getCache(key: string) {
  return await client.get(key);
}