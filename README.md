# 🎬 Trailerly

Trailerly is a modern movie discovery web application designed to provide a **focused and distraction-free experience for exploring movie trailers**. Instead of overwhelming users with full-length content or complex features, Trailerly keeps things simple — helping users quickly find, preview, and save movies through their trailers.

## 🚀 About the App

Trailerly is built with the idea that trailers are the quickest way to decide what to watch. The app allows users to browse currently trending, popular, and upcoming movies, and instantly watch their trailers without leaving the platform.

Unlike streaming platforms, Trailerly does **not host or stream full movies**. It strictly provides access to **official trailers only**, ensuring a lightweight, fast, and legally safe experience.

## 🎯 Core Experience

* Users can **search for any movie** and instantly view relevant results
* Each movie displays **poster, rating, and essential details**
* With a single click, users can **watch the trailer directly**
* Users can **add movies to a favorites list**, stored locally for quick access later
* The interface is designed to be **clean, minimal, and responsive across devices**

## ⚙️ How It Works

Trailerly integrates with the TMDB (The Movie Database) API to fetch:

* Movie metadata (title, rating, posters, etc.)
* Trailer video links

When a user selects a movie:

1. The app fetches its details using the API
2. Extracts the available trailer (usually from YouTube)
3. Plays it inside the app using an embedded player

Favorites are managed using **localStorage**, allowing persistence without requiring authentication.

## 🧠 Design Philosophy

Trailerly focuses on:

* **Simplicity over complexity**
* **Speed and performance**
* **Essential features only**
* **Clear and intuitive UI**

It avoids unnecessary features like full movie streaming, subscriptions, or heavy backend systems, making it ideal as a lightweight frontend-focused project.

## 🛠️ Technical Highlights

* Built with **React + Vite** for fast development and performance
* Styled using **Tailwind CSS** for a modern UI
* Uses **Axios** for efficient API requests
* Implements **async data fetching with Promise.all** for optimized performance
* State handled using React hooks

## 📌 Use Case

Trailerly is perfect for:

* Quickly checking trailers before deciding what to watch
* Practicing frontend development with real-world APIs
* Demonstrating skills in React, API handling, and UI design

## ❗ Important Note

> Trailerly is **not a streaming platform**.
> It does **not provide or host full movies**.
> It is strictly a **trailer-only application**.

## 🛠️ Tech Stack
Frontend: React (Vite)
Styling: Tailwind CSS
API: TMDB (The Movie Database)
HTTP Client: Axios

## 🌐 API Used
TMDB API (for movie data & trailers)
