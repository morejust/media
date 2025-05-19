# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MoreJust Media is a web application built with Vue.js that helps users read articles with awareness of bias, sentiment, and manipulative language. The application:

- Analyzes articles for emotional sentiment, generalizations, clichés, and key phrases
- Provides an enhanced reading experience that highlights potentially biased or emotional content
- Allows users to enter article URLs or topics to analyze
- Has a "Random Article" feature that picks a topic and finds an article to analyze

## Architecture

- **Frontend:** Vue.js with Vuetify for UI components
- **Backend API:** External service at morejustmedia.herokuapp.com
- **Chrome Extension:** Available in the chrome-ext/ directory

### Key Components

- **Views:**
  - `Home.vue`: Landing page
  - `Analyze.vue`: URL/topic input interface
  - `ReadMode.vue`: Enhanced article reading experience

- **Services:**
  - `api/`: Handles API requests to the backend
  - `hairsplitter/`: Processes and annotates article text
  - `highlights/`: Manages text highlighting and tooltips

- **Components:**
  - `Article.vue`: Displays article with interactive highlights
  - `InteractiveText.vue`: Manages text interaction
  - `Tip.vue`: Shows tooltips for highlighted text

## Development Commands

```bash
# Project setup - Install dependencies
npm install

# Compiles and hot-reloads for development
npm run serve
# Alternative
npm run dev

# Compiles and minifies for production
npm run build

# Run tests
npm run test

# Lints and fixes files
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

## Workflow

1. User enters a URL or topic in the Analyze view
2. Application fetches and parses the article content via API
3. Content is analyzed for sentiment, entities, key phrases, etc.
4. ReadMode view displays the article with interactive highlighting
5. Users can hover/click highlighted text to see explanations

## API Endpoints

The application uses the following endpoints:

- `/search?q={topic}`: Find an article related to a topic
- `/parse?url={url}`: Parse an article from a URL
- `/v2/analyse`: Analyze parsed article content

## Notes

- The application is designed to work with a Heroku-based backend
- The project uses Vue Router for navigation
- Data flows from API → Article component → Interactive text highlighting