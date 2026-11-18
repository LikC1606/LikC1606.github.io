<!-- README_SYNC: source=889133f43b448e987c73ae75b9f83702c5ba1147; updated=2026-11-18 -->

English · [简体中文](./README_CN.md)

# Zhenhao Liu's academic website

The [live site](https://likc1606.github.io/) collects Zhenhao Liu's research, projects, publications, and selected honors. This repository holds the static GitHub Pages source: plain HTML, CSS, and JavaScript, with no package installation or build.

[Visit the website](https://likc1606.github.io/) · [Star the source](https://github.com/LikC1606/LikC1606.github.io/stargazers) to revisit it.

## Research materials

- [Research CV](./assets/Zhenhao_Liu_CV.pdf)
- [RepDuet paper](./assets/RepDuet_NLPCC_2026.pdf): first-author work on task-specific hybrid representations for the Chinese BabyLM Cognitive Track, accepted as a poster at NLPCC 2026 Shared Tasks.
- [RepDuet model and inference code](https://huggingface.co/LikC1606/chinese-babylm-cog-a197-strict-best)

Other project and publication links are listed on the live site.

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
