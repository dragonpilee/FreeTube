# FreeTubeMusic 🎵

> A premium, ad-free Music built for performance and privacy.

![MusicTube Banner](public/favicon.svg)

**MusicTube** is a blazing fast, server-side rendered music application built with **Astro**, **React**, and **Tailwind CSS**. It replicates the YouTube Music experience with a "Pure Black" aesthetic, functional playback, and reliable search without requiring personal API keys.

## 🚀 Key Features

*   **Premium Aesthetic**: Pixel-perfect "Pure Black" theme (#000000) matching the official app.
*   **Ad-Free Streaming**: Listen to music without interruptions.
*   **Robust Search**: Multi-instance fallback system (Invidious) ensures search always works.
*   **Region-Specific Trends**: Automatically loads top hits for India (configurable).
*   **Mobile PWA**: Installable as a native app with a bottom navigation bar and responsive player.
*   **Dockerized**: Fully containerized development environment.

## 🛠️ Tech Stack

*   **Framework**: [Astro](https://astro.build) (Server-First Performance)
*   **UI Library**: React 18
*   **Styling**: Tailwind CSS
*   **State Management**: Nano Stores (Global Player State)
*   **Data Fetching**: Invidious API (No Auth Required)
*   **Deployment**: Docker / Netlify

## 🏁 Getting Started

### Prerequisite
- Docker Desktop installed.

### Run with Docker (Recommended)

```bash
# Start the application
docker-compose up -d --build

# Open in browser
http://localhost:3000
```

### Manual Setup (Requires Node 18+)

```bash
npm install
npm run dev
```

## 📱 PWA Installation

1.  Open **MusicTube** on your mobile browser.
2.  Tap **Share** (iOS) or **Menu** (Android).
3.  Select **"Add to Home Screen"**.
4.  Enjoy the native app experience!

## 🚢 Deployment

This project is configured for **Netlify**.

1.  Fork/Clone this repository.
2.  Import to Netlify.
3.  The `netlify.toml` file will automatically set the build command (`npm run build`) and publish directory (`dist`).

## ❤️ Credits

Developed with love by **CineGeek**.

