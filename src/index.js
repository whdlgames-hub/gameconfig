// Cloudflare Worker 多游戏配置中心
// 支持：/arrowflowpuzzlemaze.json
// 支持：/fizztilesblast.json
// 支持：/urlconfig.json
// 支持：/config/arrowflowpuzzlemaze

import arrowflowpuzzlemaze from "../arrowflowpuzzlemaze.json" assert { type: "json" };
import fizztilesblast from "../fizztilesblast.json" assert { type: "json" };
import urlconfig from "../urlconfig.json" assert { type: "json" };

const configs = {
  arrowflowpuzzlemaze,
  fizztilesblast,
  urlconfig
};

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders() });
    }

    const url = new URL(request.url);
    let key = normalizePath(url.pathname);

    if (url.pathname === "/" || url.pathname === "/health") {
      return jsonResponse({
        message: "ok",
        service: "gameconfig",
        available: Object.keys(configs)
      });
    }

    const config = configs[key];

    if (!config) {
      return jsonResponse({
        message: "not_found",
        path: url.pathname,
        available: Object.keys(configs)
      }, 404);
    }

    return jsonResponse(config, 200, {
      // 5分钟边缘缓存。以后稳定后可以改 3600
      "Cache-Control": "public, max-age=300, s-maxage=300"
    });
  }
};

function normalizePath(pathname) {
  let p = pathname.replace(/^\/+/, "").replace(/\/+$/, "");

  // /config/arrowflowpuzzlemaze -> arrowflowpuzzlemaze
  if (p.startsWith("config/")) {
    p = p.replace("config/", "");
  }

  // /arrowflowpuzzlemaze.json -> arrowflowpuzzlemaze
  if (p.endsWith(".json")) {
    p = p.slice(0, -5);
  }

  return p.toLowerCase();
}

function jsonResponse(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...corsHeaders(),
      ...extraHeaders
    }
  });
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}
