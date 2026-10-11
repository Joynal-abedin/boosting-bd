/**
 * Cloudflare Pages Function: /api/contact
 * 
 * Runs automatically on Cloudflare's Edge network when deployed on Cloudflare Pages.
 * Handles lead submissions without requiring any Node.js/Express server.
 */

interface Env {
  NOTIFICATION_EMAIL?: string;
  WEBHOOK_URL?: string;
}

interface EventContext<TEnv = unknown> {
  request: Request;
  env: TEnv;
  params: Record<string, string | string[]>;
  data: Record<string, unknown>;
  next: () => Promise<Response>;
}

export const onRequestPost = async (context: EventContext<Env>): Promise<Response> => {
  try {
    const contentType = context.request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid content-type. Expected application/json",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const body = (await context.request.json()) as Record<string, unknown>;
    const fullName = String(body.fullName || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();
    const businessType = String(body.businessType || "general");
    const monthlyAdSpend = String(body.monthlyAdSpend || "undisclosed");
    const serviceNeeded = String(body.serviceNeeded || "Meta Ads Campaign Management");

    // Validation
    if (!fullName) {
      return new Response(
        JSON.stringify({ success: false, error: "Full Name is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!email && !phone) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Either email or phone is required",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!message || message.length < 10) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Message must be at least 10 characters",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Optional webhook forwarding if configured in Cloudflare Pages environment variables
    if (context.env.WEBHOOK_URL) {
      try {
        await fetch(context.env.WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `New Lead for BOOSTING BD:
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Business: ${businessType}
Monthly Ad Spend: ${monthlyAdSpend}
Service: ${serviceNeeded}
Message: ${message}`,
          }),
        });
      } catch (err) {
        console.error("Webhook forwarding failed:", err);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Inquiry successfully received by BOOSTING BD.",
        receivedData: {
          fullName,
          email,
          phone,
          businessType,
          serviceNeeded,
        },
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Internal error processing request",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

// Handle OPTIONS preflight
export const onRequestOptions = async (): Promise<Response> => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
