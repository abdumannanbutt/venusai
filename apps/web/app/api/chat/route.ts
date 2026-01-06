/**
 * Next.js API Route
 * Proxies chat requests to Cloudflare Worker
 */

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch(
    "https://venus-core-worker.mannanraza15.workers.dev",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
  );

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { "Content-Type": "application/json" }
  });
}
