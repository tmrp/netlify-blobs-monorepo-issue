export const dynamic = 'force-dynamic';

const baseUrl =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888'
    : process.env.NEXT_PUBLIC_BASE_URL ?? '';

async function getBlobData() {
  if (!baseUrl) {
    throw new Error('Missing NEXT_PUBLIC_BASE_URL');
  }

  const response = await fetch(`${baseUrl}/api/get-blob-data`);

  if (!response.ok) {
    throw new Error('Failed to fetch blob data');
  }

  const data = await response.json();

  return data;
}

export default async function Page() {
  const data = await getBlobData();

  const message = !data?.message ? 'no message' : `hello ${data.message}`;

  return <main>{message}</main>;
}
