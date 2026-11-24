<!-- README_SYNC: source=889133f43b448e987c73ae75b9f83702c5ba1147; updated=2026-11-24 -->
<p align="center">English · <a href="./README_CN.md" lang="zh-CN">简体中文</a></p>

# Zhenhao Liu's Academic Homepage

Source for Zhenhao Liu's academic homepage at [**likc1606.github.io**](https://likc1606.github.io/) (Westlake University · [WestlakeNLP Lab](https://westlakenlp.com/)). Plain HTML, CSS, and JavaScript served directly via GitHub Pages with no build step.

<a href="https://github.com/LikC1606/LikC1606.github.io/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/LikC1606/LikC1606.github.io"></a>
<a href="https://github.com/LikC1606/LikC1606.github.io/actions/workflows/pages/pages-build-deployment"><img alt="GitHub Pages" src="https://github.com/LikC1606/LikC1606.github.io/actions/workflows/pages/pages-build-deployment/badge.svg"></a>
<a href="https://likc1606.github.io/"><img alt="Live website" src="https://img.shields.io/badge/site-likc1606.github.io-1e3a5f"></a>

[Visit the live site](https://likc1606.github.io/) · [Read the 1-page CV](./assets/Zhenhao_Liu_CV.pdf)

## Research materials & featured work

- **Research CV:** [Zhenhao_Liu_CV.pdf](./assets/Zhenhao_Liu_CV.pdf)
- **NLPCC 2026 Shared Tasks (Sole first author, 1st in Cognitive Track):** [RepDuet paper](./assets/RepDuet_NLPCC_2026.pdf) · [Model & inference code](https://huggingface.co/LikC1606/chinese-babylm-cog-a197-strict-best)
- **EMNLP 2026 Main:** *How Far Are AI Scientists from Changing the World? A Survey of Autonomous Scientific Discovery* — [PDF](https://aclanthology.org/2026.emnlp-main.1285.pdf) · [ACL Anthology](https://aclanthology.org/2026.emnlp-main.1285/)
- **EMNLP 2026 Main:** *From AI Reviewers to Evidence Assistants: Quantifying the Human-AI Responsibility Boundary in Peer Review* — [PDF](https://aclanthology.org/2026.emnlp-main.1296.pdf) · [ACL Anthology](https://aclanthology.org/2026.emnlp-main.1296/)
- **Featured open-source project:** [TheoremOS](https://github.com/HuggingMath/TheoremOS) ([theoremos.top](https://theoremos.top/en/)) — collaborative Lean 4 theorem-proving workbench developed at [WestlakeNLP](https://westlakenlp.com/)

## Preview and maintain the page

Open [`index.html`](./index.html) directly. To serve the same files locally over HTTP with Python 3, run these commands and open [http://127.0.0.1:8000](http://127.0.0.1:8000):

```bash
git clone https://github.com/LikC1606/LikC1606.github.io.git
cd LikC1606.github.io
python3 -m http.server 8000 --bind 127.0.0.1
```

| File | Purpose |
| --- | --- |
| [index.html](./index.html) | Content, navigation, publication links, and page metadata |
| [styles.css](./styles.css) | Responsive layout and typography |
| [script.js](./script.js) | Mobile menu, reading progress, current section, and optional reveal motion |
| [assets/](./assets/) | PDFs, portrait, university logo, and campus photograph |
| [robots.txt](./robots.txt) and [sitemap.xml](./sitemap.xml) | Crawler guidance and the public URL |

Use Node.js for a syntax check after changing the script, then inspect navigation and asset links in the browser:

```bash
node --check script.js
```

GitHub Pages serves the checked-in files directly. [`.nojekyll`](./.nojekyll) keeps this a static site without Jekyll processing.

## Visual credits

The [Westlake University logo](https://www.westlake.edu.cn/images/header_icon_color.png) and the [campus photograph](https://en.westlake.edu.cn/about/images/P020231207514705804801.jpg) come from the university's official websites.
