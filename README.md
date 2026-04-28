## Octathorn Portfolio

Modern portfolio site built with **React + Vite + TypeScript + Tailwind**.

### Quick start

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Content updates

- **Projects/content**: `src/app/components/projectsData.ts`
- **Source copy (reference)**: `docs/Portfolio Content.txt`
- **Project images**: `src/assets/` (per-project folders)

### Deploy (GitHub Actions → GitHub Pages) + Custom Domain

This repo includes a Pages deploy workflow at `.github/workflows/deploy.yml`.

#### 1) GitHub repo settings

- **Settings → Pages**
  - **Build and deployment**: select **GitHub Actions**

#### 2) DNS (for `portfolio.octathorn.com`)

In your DNS provider, create:

- **CNAME**: `portfolio` → `<your-github-username>.github.io`

Wait for DNS to propagate.

#### 3) Custom domain in GitHub

- **Settings → Pages → Custom domain**: set to `portfolio.octathorn.com`
- Enable **Enforce HTTPS** (after the certificate is issued)

#### 4) Deploy

- Push to `main` and GitHub Actions will:
  - run `npm ci`
  - run `npm run build`
  - deploy `dist/` to GitHub Pages

The custom domain is committed in `public/CNAME` and will be included in the build output automatically.
  