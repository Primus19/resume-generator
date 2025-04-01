#!/bin/bash

# Enhanced Static Export Build Script for Resume Generator
# This script builds the application for static deployment with proper styling

echo "🚀 Starting enhanced static export build process..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf out
rm -rf .next

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create necessary directories for proper static export
echo "📁 Creating necessary directory structure..."
mkdir -p src/pages
if [ ! -d "src/pages" ]; then
  echo "❌ Failed to create pages directory structure. Please check permissions."
  exit 1
fi

# Build and export the application
echo "🏗️ Building and exporting the application..."
npm run build

# Check if build was successful
if [ -d "out" ]; then
  echo "✅ Build successful! Static files are in the 'out' directory."
  
  # Verify CSS files are present
  CSS_COUNT=$(find out -name "*.css" | wc -l)
  echo "🎨 Found $CSS_COUNT CSS files in the build"
  
  if [ "$CSS_COUNT" -eq 0 ]; then
    echo "⚠️ Warning: No CSS files found in the build. Styling may be missing."
  fi
  
  echo "📊 Build statistics:"
  find out -type f | wc -l | xargs echo "   Total files:"
  du -sh out | awk '{print "   Total size: " $1}'
  echo ""
  echo "🚀 Deployment instructions:"
  echo "   1. Upload the contents of the 'out' directory to your web host"
  echo "   2. For Vercel/Netlify: Connect your repository and they will build automatically"
  echo "   3. For GitHub Pages: Copy the contents to your gh-pages branch"
else
  echo "❌ Build failed. Please check the error messages above."
fi
