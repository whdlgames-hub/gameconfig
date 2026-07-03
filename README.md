# gameconfig Cloudflare Pages

这是 Cloudflare Pages 静态配置托管版本。

## 访问方式

部署成功后可以访问：

```text
https://你的项目名.pages.dev/arrowflowpuzzlemaze.json
https://你的项目名.pages.dev/fizztilesblast.json
https://你的项目名.pages.dev/urlconfig.json
```

## 使用方式

保留你原来的 JSON 文件：

```text
arrowflowpuzzlemaze.json
fizztilesblast.json
urlconfig.json
```

然后把本项目里的 `_headers` 上传到仓库根目录。

## Cloudflare Pages 配置

Framework preset：None

Build command：留空

Build output directory：/

Root directory：/

## 缓存说明

当前缓存 5 分钟：

```text
Cache-Control: public, max-age=300
```

如果以后配置稳定，可以改成：

```text
Cache-Control: public, max-age=3600
```
