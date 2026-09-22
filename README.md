# Tri Ubaya — Personal Portfolio

A simple academic and professional profile for publications, projects,
scholarships, and research funding.

## Update the content

Most visible profile content lives in `app/profile-data.ts`. Edit the profile,
publications, projects, scholarships, funding, news, and social links there.

The layout is in `app/page.tsx`, and the visual styling is in
`app/globals.css`.

## Local preview

```bash
npm install
npm run dev
```

Open the local address printed by the command.

## Publish to GitHub Pages

The included GitHub Actions workflow publishes the site whenever `main` is
pushed. In the repository settings, choose **GitHub Actions** as the GitHub
Pages publishing source.
