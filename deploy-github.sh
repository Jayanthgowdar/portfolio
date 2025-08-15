#!/bin/bash

# Script to deploy to GitHub Pages
echo "Deploying to GitHub Pages..."

# Backup current package.json
cp package.json package.vercel.json

# Use GitHub Pages specific package.json
cp package.github.json package.json

# Build and deploy
npm run deploy

# Restore Vercel package.json
cp package.vercel.json package.json
rm package.vercel.json

echo "GitHub Pages deployment complete!"
echo "Your site is available at: https://Jayanthgowdar.github.io/portfolio/"