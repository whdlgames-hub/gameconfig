# gameconfig Worker 多配置中心

## 支持的访问方式

部署后可以访问：

```text
https://你的worker地址/arrowflowpuzzlemaze.json
https://你的worker地址/fizztilesblast.json
https://你的worker地址/urlconfig.json
```

也支持：

```text
https://你的worker地址/config/arrowflowpuzzlemaze
https://你的worker地址/config/fizztilesblast
https://你的worker地址/config/urlconfig
```

## 注意

你的仓库根目录需要保留这些 JSON 文件：

```text
arrowflowpuzzlemaze.json
fizztilesblast.json
urlconfig.json
```

## 新增配置文件

如果以后新增 `zuma.json`，需要在 `src/index.js` 顶部增加：

```js
import zuma from "../zuma.json" assert { type: "json" };
```

然后在 `configs` 里增加：

```js
zuma
```
