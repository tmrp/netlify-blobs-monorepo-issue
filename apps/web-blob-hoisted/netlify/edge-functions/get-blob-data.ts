import { getStore } from '@netlify/blobs';
import type { Config } from '@netlify/edge-functions';

export default async function handler() {
  const store = getStore('data');

  await store.setJSON('hello', { message: 'world' });

  const response = await store.get('hello');

  return new Response(response, {
    headers: {
      'content-type': 'application/json',
    },
  });
}

export const config: Config = {
  path: '/api/get-blob-data',
};
