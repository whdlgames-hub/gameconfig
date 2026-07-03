const defaultConfig = {
  message: "ok",
  ver: "1.0.6",

  clickAdValue: "3",
  arrowsAdValue: "10",
  Adinterval: "15",
  forcedAdlevel: "18",
  adCount: "20",

  InterstitialAd: 45,
  userOpsEnabled: true,

  minOpportunitiesForClassification: 3,

  userDifficultyMultipliers: {
    HIGH: 1.2,
    MEDIUM: 1.0,
    LOW: 0.7,
    UNKNOWN: 1.0
  },

  adStrategyByWillingness: {
    HIGH: {
      clickAdValue: 2,
      arrowsAdValue: 8,
      Adinterval: 8,
      forcedAdlevel: 15,
      InterstitialAd: 35
    },
    MEDIUM: {
      clickAdValue: 3,
      arrowsAdValue: 10,
      Adinterval: 15,
      forcedAdlevel: 18,
      InterstitialAd: 45
    },
    LOW: {
      clickAdValue: 4,
      arrowsAdValue: 15,
      Adinterval: 25,
      forcedAdlevel: 25,
      InterstitialAd: 60
    },
    UNKNOWN: {
      clickAdValue: 3,
      arrowsAdValue: 10,
      Adinterval: 15,
      forcedAdlevel: 18,
      InterstitialAd: 45
    }
  }
};

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // 健康检查
    if (url.pathname === "/health") {
      return Response.json({ status: "ok" });
    }

    // 配置接口：/ 或 /config 或 /config.json 都返回同一个配置
    if (url.pathname === "/" || url.pathname === "/config" || url.pathname === "/config.json") {
      return jsonResponse(defaultConfig);
    }

    return jsonResponse({
      message: "not_found",
      path: url.pathname
    }, 404);
  }
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",

      // 允许 APP、网页、后台都能请求
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",

      // 缓存 5 分钟。后面稳定后可改成 3600 秒
      "Cache-Control": "public, max-age=300"
    }
  });
}
