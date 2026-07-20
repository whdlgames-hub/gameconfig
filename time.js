const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400"
};

export function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders
  });
}

export function onRequestGet(context) {
  const serverTimeMs = Date.now();

  return new Response(
    JSON.stringify({
      success: true,
      serverTimeMs,
      serverTimeIso: new Date(serverTimeMs).toISOString()
    }),
    {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json; charset=utf-8",

        // 时间接口绝对不要被缓存
        "Cache-Control": "no-store, no-cache, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0"
      }
    }
  );
}
