# Gong XiaoQian - Personal Site

Static, bilingual (EN/中文) personal website for resume + portfolio.

## Local preview

```bash
python3 -m http.server 5173
```

Then open http://127.0.0.1:5173

## Deploy (GitHub Pages)

- This repo includes a GitHub Actions workflow at `.github/workflows/pages.yml`.
- Push to `main` and GitHub will build/deploy to GitHub Pages.

## Custom domain

- `CNAME` is set to `gongxqian.com`.
- Point DNS to GitHub Pages, then enable the custom domain in GitHub Pages settings.
