# Deployment Guide for Resume Generator

This guide provides detailed instructions for deploying your Resume Generator application using various platforms. After encountering issues with AWS Amplify, these alternative deployment methods offer more reliable options for your Next.js application.

## Option 1: Vercel Deployment (Recommended)

Vercel is the platform created by the team behind Next.js and offers the most seamless deployment experience.

### Steps:

1. **Create a Vercel Account**
   - Sign up at [vercel.com](https://vercel.com)

2. **Connect Your Repository**
   - Click "Add New..." → "Project"
   - Connect to GitHub/GitLab/Bitbucket
   - Select your resume-generator repository

3. **Configure Project**
   - Vercel will automatically detect Next.js settings
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: Will be auto-detected

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application

5. **Access Your Site**
   - Once deployed, Vercel will provide a URL to access your site
   - You can configure a custom domain in the project settings

## Option 2: Netlify Deployment

Netlify offers excellent hosting for static sites with a generous free tier.

### Steps:

1. **Create a Netlify Account**
   - Sign up at [netlify.com](https://netlify.com)

2. **Deploy via Git**
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub/GitLab/Bitbucket
   - Select your resume-generator repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `out`

4. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy your application

5. **Access Your Site**
   - Once deployed, Netlify will provide a URL to access your site
   - You can configure a custom domain in the site settings

## Option 3: GitHub Pages Deployment

GitHub Pages is free for public repositories and easy to set up.

### Steps:

1. **Create a GitHub Actions Workflow**
   - Create a file at `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]  # or your default branch

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
          branch: gh-pages
```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages"
   - Set source to "Deploy from a branch"
   - Select the "gh-pages" branch and "/ (root)" folder
   - Click "Save"

3. **Access Your Site**
   - Your site will be available at `https://[username].github.io/[repository-name]/`

## Option 4: Manual Deployment to Any Web Host

You can deploy to any web hosting service that supports static websites.

### Steps:

1. **Build Your Application Locally**
   - Run the provided build script: `bash build-static.sh`
   - This will create an `out` directory with all static files

2. **Upload to Web Host**
   - Upload all contents of the `out` directory to your web host
   - This can be done via FTP, SFTP, or your host's file manager

3. **Configure Web Server (if needed)**
   - Ensure your web server is configured to serve index.html for directory requests
   - For Apache, this is typically the default behavior
   - For Nginx, you may need to add a location block:

```
location / {
    try_files $uri $uri/ /index.html;
}
```

## Troubleshooting Common Issues

### Images Not Loading
- Ensure you're using relative paths for images
- Check that the `next.config.js` has `images: { unoptimized: true }`

### API Routes Not Working
- Static exports don't support API routes
- Consider using serverless functions (Vercel/Netlify) or external APIs

### Routing Issues
- Static exports use client-side routing
- Ensure your server is configured to serve the root index.html for all routes

## Conclusion

These deployment options provide more reliable alternatives to AWS Amplify for your Resume Generator application. The static export configuration we've provided ensures compatibility with a wide range of hosting platforms, giving you flexibility in where and how you deploy your application.
