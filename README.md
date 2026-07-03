# gameconfig Worker

Cloudflare Worker 游戏远程配置接口。

## 访问地址

部署成功后访问：

```text
https://你的-worker地址/config.json
```

或：

```text
https://你的-worker地址/config
```

## 修改配置

主要修改：

```text
src/index.js
```

里面的 `defaultConfig`。

修改后提交到 GitHub，Cloudflare 会自动部署。

## Cloudflare 部署命令

```text
npx wrangler deploy
```
