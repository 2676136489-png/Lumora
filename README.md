# Lumora 区块插件库

197 个可复用设计区块，按 22 个分类整理。每个区块提供实时预览、完整源码与中文提示词，支持一键复制。原生 HTML、CSS 与 JavaScript 实现，无构建步骤，字体、图片与视频全部本地存放。

## 内容规模

| 维度 | 数量 |
| --- | --- |
| 可复用区块 | 197 |
| 分类 | 22 |
| 主题 | 4 |
| Wiki 演示 | 1 套，19 个页面 |

## 分类

`about` `blog` `buttons` `cards` `choices` `comparison` `contact` `data` `feedback` `forms` `header` `integrations` `logos` `media` `motion` `nav` `notifications` `pagination` `sections` `social` `steps` `styles`

## 本地预览

```bash
python -m http.server 8000 --bind 127.0.0.1
```

- 品牌首页与区块库：`http://127.0.0.1:8000/`
- Wiki 演示：`http://127.0.0.1:8000/wiki/`

## 目录结构

```
index.html      品牌首页与区块库，含筛选与详情面板
lumora.css      首屏与液态玻璃视觉样式
lumora.js       视频切换、移动菜单与滚动交互
library.css     区块库列表与详情面板样式
library.js      筛选、搜索、复制与预览交互
data/           按分类拆分的区块数据
assets/media/   4 段本地视频
assets/img/     首页叠加层与区块演示图片
assets/fonts/   本地字体
wiki/           独立演示站点，19 个页面
```

## 区块数据结构

`data/` 下每个文件向 `window.PLUGINS` 追加数组，单项结构如下：

```js
{
  id: "file-drop",        // 唯一标识
  name: "文件拖放",        // 区块名称
  cat: "forms",           // 所属分类
  desc: "拖拽上传区域与文件列表，支持点击选择。",
  tags: ["表单", "上传", "拖放", "文件"],
  prompt: "…",            // 中文提示词
  html: "…",              // 结构
  css: "…",               // 样式
  js: "…"                 // 交互，可为空
}
```

复制源码后可直接作为独立页面运行，基础设计令牌已内联在样式中。

## 技术说明

- 页面不请求任何外部脚本、样式、字体、图片或视频。
- 区块详情以面板形式呈现，支持分类筛选与关键词搜索。
- 支持最新版 Chrome、Edge、Firefox 与 Safari。

## 素材许可

- 字体：Inter、Instrument Serif、Noto Sans SC，均采用 SIL Open Font License。
- 首页视频与叠加素材为演示用途，正式发布前请替换为有授权的素材。
- 区块源码、提示词与演示图片为本项目原创。
