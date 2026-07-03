// 预留动态配置接口。
// 当前阶段你可以不用它。
// 以后需要按国家、版本、渠道返回不同配置时，可以在这里扩展。

export async function onRequest(context) {
  return Response.json({
    message: "dynamic_config_not_enabled",
    tip: "目前请直接访问根目录下的 json 文件，例如 /arrowflowpuzzlemaze.json"
  }, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=300"
    }
  });
}
