# GitHub Pages Deployment Guide for cybersec.ma with A Records

This document explains how to deploy your Next.js site to GitHub Pages using A records for a custom domain (cybersec.ma).

## Prerequisites

- A domain name (cybersec.ma)
- Access to your domain's DNS settings
- A GitHub account and repository (this repository)

## Setup Steps

### 1. Configure your repository

1. Push your code to GitHub if you haven't already
2. Go to your repository's Settings tab
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "GitHub Actions"
5. Under "Custom domain", enter `cybersec.ma`
6. Temporarily uncheck "Enforce HTTPS" (you'll enable this later after DNS propagation)
7. Click "Save"

### 2. Set up DNS with A Records

1. Log in to your domain registrar or DNS provider for cybersec.ma
2. Navigate to the DNS settings
3. Add the following A records pointing to GitHub Pages IP addresses:

```
Type    Host    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
```

4. If you want to support IPv6, also add these AAAA records:

```
Type    Host    Value
AAAA    @       2606:50c0:8000::153
AAAA    @       2606:50c0:8001::153
AAAA    @       2606:50c0:8002::153
AAAA    @       2606:50c0:8003::153
```

5. Remove any existing CNAME records for the domain if they exist

### 3. Verify DNS Propagation

1. Wait for DNS changes to propagate (can take up to 24-48 hours)
2. Check DNS propagation using a tool like [whatsmydns.net](https://www.whatsmydns.net/)
3. Verify the A records are properly pointing to GitHub Pages IP addresses
4. Once verified, go back to repository settings and enable "Enforce HTTPS"

### 4. Trigger a Deployment

1. Make a small change to your repository or manually trigger the GitHub Actions workflow
2. Check the Actions tab to monitor the deployment progress
3. Once completed, visit https://cybersec.ma to verify the site is live

## Troubleshooting

- **404 errors**: Ensure your custom domain is correctly set in GitHub Pages settings
- **SSL certificate errors**: Wait 24 hours after setting up the domain for GitHub to provision an SSL certificate
- **Site not loading**: Check GitHub Actions logs for any build errors

## Manual Deployment (Optional)

You can also manually deploy the site using the following commands:

```bash
# Build the static site
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Important Notes

- GitHub Pages automatically creates an SSL certificate for your domain once DNS propagation is complete
- The configuration in `next.config.mjs` is specifically optimized for GitHub Pages deployment
- Changes to the `main` branch will automatically trigger a new deployment via GitHub Actions
