<!-- README_SYNC: source=889133f43b448e987c73ae75b9f83702c5ba1147; updated=2026-11-18 -->

[English](./README.md) · 简体中文

# Zhenhao Liu 的学术主页

[线上主页](https://likc1606.github.io/)汇集 Zhenhao Liu 的研究、项目、论文和部分获奖记录。本仓库是 GitHub Pages 的静态站点源码，使用原生 HTML、CSS 和 JavaScript，无需安装依赖或编译。

[访问主页](https://likc1606.github.io/) · [Star 收藏源码](https://github.com/LikC1606/LikC1606.github.io/stargazers)

## 研究资料

- [科研简历](./assets/Zhenhao_Liu_CV.pdf)
- [RepDuet 论文](./assets/RepDuet_NLPCC_2026.pdf)：一作研究，围绕 Chinese BabyLM 认知赛道的任务专用混合表征，获 NLPCC 2026 Shared Tasks 海报接收。
- [RepDuet 模型与推理代码](https://huggingface.co/LikC1606/chinese-babylm-cog-a197-strict-best)

其他项目和论文入口见线上主页。

## 本地预览与维护

可以直接打开 [`index.html`](./index.html)。如需通过 HTTP 预览，使用 Python 3 运行以下命令，然后打开 [http://127.0.0.1:8000](http://127.0.0.1:8000)：

```bash
git clone https://github.com/LikC1606/LikC1606.github.io.git
cd LikC1606.github.io
python3 -m http.server 8000 --bind 127.0.0.1
```

| 文件 | 用途 |
| --- | --- |
| [index.html](./index.html) | 页面内容、导航、论文链接和元数据 |
| [styles.css](./styles.css) | 响应式布局和文字样式 |
| [script.js](./script.js) | 手机菜单、阅读进度、当前章节和可选的入场效果 |
| [assets/](./assets/) | PDF、照片、校标和校园照片 |
| [robots.txt](./robots.txt) 与 [sitemap.xml](./sitemap.xml) | 搜索引擎指引和公开网址 |

修改脚本后可用 Node.js 检查语法，再在浏览器里检查导航和资源链接：

```bash
node --check script.js
```

GitHub Pages 直接提供仓库中的静态文件；[`.nojekyll`](./.nojekyll) 禁用 Jekyll 处理。

## 图片来源

[西湖大学标志](https://www.westlake.edu.cn/images/header_icon_color.png)和[校园照片](https://en.westlake.edu.cn/about/images/P020231207514705804801.jpg)均来自校方官方网站。
