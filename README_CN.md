<!-- README_SYNC: source=889133f43b448e987c73ae75b9f83702c5ba1147; updated=2026-11-24 -->
<p align="center"><a href="./README.md" lang="en">English</a> · 简体中文</p>

# Zhenhao Liu 的学术主页

[**likc1606.github.io**](https://likc1606.github.io/) 个人学术主页源码（西湖大学 · [WestlakeNLP 实验室](https://westlakenlp.com/)）。采用原生 HTML、CSS 与 JavaScript 构建，通过 GitHub Pages 直接静态部署。

<a href="https://github.com/LikC1606/LikC1606.github.io/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/LikC1606/LikC1606.github.io"></a>
<a href="https://github.com/LikC1606/LikC1606.github.io/actions/workflows/pages/pages-build-deployment"><img alt="GitHub Pages" src="https://github.com/LikC1606/LikC1606.github.io/actions/workflows/pages/pages-build-deployment/badge.svg"></a>
<a href="https://likc1606.github.io/"><img alt="Live website" src="https://img.shields.io/badge/site-likc1606.github.io-1e3a5f"></a>

[访问线上主页](https://likc1606.github.io/) · [查看单页简历 PDF](./assets/Zhenhao_Liu_CV.pdf)

## 研究资料与代表工作

- **科研简历：** [Zhenhao_Liu_CV.pdf](./assets/Zhenhao_Liu_CV.pdf)
- **NLPCC 2026 Shared Tasks（独立一作 · 认知赛道第一名）：** [RepDuet 论文](./assets/RepDuet_NLPCC_2026.pdf) · [模型与推理代码](https://huggingface.co/LikC1606/chinese-babylm-cog-a197-strict-best)
- **EMNLP 2026 Main：** *How Far Are AI Scientists from Changing the World? A Survey of Autonomous Scientific Discovery* — [PDF](https://aclanthology.org/2026.emnlp-main.1285.pdf) · [ACL Anthology](https://aclanthology.org/2026.emnlp-main.1285/)
- **EMNLP 2026 Main：** *From AI Reviewers to Evidence Assistants: Quantifying the Human-AI Responsibility Boundary in Peer Review* — [PDF](https://aclanthology.org/2026.emnlp-main.1296.pdf) · [ACL Anthology](https://aclanthology.org/2026.emnlp-main.1296/)
- **代表开源项目：** [TheoremOS](https://github.com/HuggingMath/TheoremOS)（[theoremos.top](https://theoremos.top/)）——由 [WestlakeNLP 实验室](https://westlakenlp.com/)研发的 Lean 4 协同定理证明工作台

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
