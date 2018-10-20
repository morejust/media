#!/bin/sh

npm run build
git add .
git commit -m "build"
git subtree push --prefix dist origin gh-pages
git push
