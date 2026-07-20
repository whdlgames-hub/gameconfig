export async function onRequestGet(context) {

    const now = new Date();

    return new Response(
        JSON.stringify({
            success: true,

            // 毫秒时间戳
            serverTimeMs: now.getTime(),

            // 秒时间戳
            serverTime: Math.floor(now.getTime() / 1000),

            // ISO时间
            serverTimeISO: now.toISOString(),

            // 时区
            timezone: "UTC",

            // Cloudflare数据中心(调试用)
            colo: context.request.cf?.colo ?? "UNKNOWN"
        }, null, 2),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json; charset=utf-8",

                // 不缓存
                "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
                "Pragma": "no-cache",
                "Expires": "0",

                // CORS
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, OPTIONS",
                "Access-Control-Allow-Headers": "*"
            }
        }
    );
}

// 处理OPTIONS预检
export async function onRequestOptions() {

    return new Response(null, {
        status: 204,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Max-Age": "86400"
        }
    });

}
