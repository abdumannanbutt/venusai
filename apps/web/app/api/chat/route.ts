export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch(
    "https://venus-core-worker.YOUR_SUBDOMAIN.workers.dev",
    {
      method: "POST",
      body: JSON.stringify(body)
    }
  );

  return new Response(res.body, res);
}
