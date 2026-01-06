import OpenAI from "openai";

export default {
  async fetch(req: Request, env: Env) {
    if (req.method !== "POST") {
      return new Response("Not allowed", { status: 405 });
    }

    const { messages } = await req.json();

    const client = new OpenAI({
      apiKey: env.OPENAI_API_KEY,
      baseURL: env.AI_GATEWAY_URL
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      temperature: 0.7
    });

    return Response.json({
      message: completion.choices[0].message
    });
  }
};

interface Env {
  OPENAI_API_KEY: string;
  AI_GATEWAY_URL: string;
}
