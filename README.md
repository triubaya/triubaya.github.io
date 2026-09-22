# Tri Ubaya — Personal Portfolio

A quiet editorial portfolio adapted for clear navigation and comfortable reading.

## Update the content

Almost all visible profile content lives in one file:

`app/profile-data.ts`

Edit the name, role, email, introduction, About paragraphs, focus areas, updates,
and social links there. The page updates automatically while the local preview is running.

The visual design lives in `app/globals.css`, while page structure and section titles
live in `app/page.tsx`.

## Local preview

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Publish to GitHub Pages

The included workflow publishes automatically whenever the `main` branch is pushed.

1. Push this project to the `triubaya/triubaya.github.io` repository.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Open the **Actions** tab and wait for “Deploy portfolio to GitHub Pages” to finish.

Future updates only require editing the content, committing it, and pushing to `main`.
