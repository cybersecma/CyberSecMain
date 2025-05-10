This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## GitHub Pages with A Records Setup for cybersec.ma

This project is configured to deploy to GitHub Pages using A records for the cybersec.ma domain instead of a CNAME.

### DNS Configuration

To point your domain (cybersec.ma) to GitHub Pages using A records:

1. Log in to your DNS provider for the cybersec.ma domain
2. Add the following A records pointing to GitHub Pages IP addresses:
   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   ```

3. If you want to use IPv6, also add these AAAA records:
   ```
   AAAA    @    2606:50c0:8000::153
   AAAA    @    2606:50c0:8001::153
   AAAA    @    2606:50c0:8002::153
   AAAA    @    2606:50c0:8003::153
   ```

4. Remove any previous CNAME records for the domain if they exist

### GitHub Repository Configuration

1. Go to your repository's Settings → Pages
2. Under "Custom domain", enter `cybersec.ma`
3. Do not check "Enforce HTTPS" until the DNS changes have propagated

Note: It may take up to 24 hours for DNS changes to fully propagate.
