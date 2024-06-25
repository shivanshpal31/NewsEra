# News React App

A dynamic React application for fetching and displaying news articles from various categories using the NewsAPI.org API. This app features a page loader, progress bar, and infinite scrolling for a smooth user experience.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Categories](#categories)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Configuration](#configuration)
7. [Contributing](#contributing)
8. [Contact](#contact)
9. [Acknowledgments](#acknowledgments)

---

## Overview

The News React App is designed to provide users with up-to-date news articles across a variety of categories. The app fetches data from the NewsAPI.org API, stores it in a JSON format, and dynamically displays it in the app. This project showcases key React functionalities, such as page loaders, progress bars, and infinite scrolling, to enhance user experience.

---

## Features

- **Real-time News:** Fetches the latest news articles from NewsAPI.org.
- **Multiple Categories:** Browse news across seven categories: Science, General, Technology, Entertainment, Business, Sports, and Health.
- **Infinite Scrolling:** Load more articles as you scroll down.
- **Page Loader & Progress Bar:** Provides visual feedback during data fetching.
- **JSON Data Handling:** Efficiently fetches and manages news data in JSON format.

---

## Categories

The application supports the following news categories:

1. **General**
2. **Science**
3. **Technology**
4. **Entertainment**
5. **Business**
6. **Sports**
7. **Health**

---

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/shivanshpal31/newsera.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd newsera
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```

*Note: This project requires Node.js and npm.*

---

## Usage

1. **Start the application:**
    ```bash
    npm start
    ```
2. **Open your browser and navigate to:**
    ```plaintext
    http://localhost:3000
    ```
    (Or another port if specified in your setup)
3. **Select a news category from the navigation menu to view articles.**

---

## Configuration

1. **API Key:** Obtain your API key from [NewsAPI.org](https://newsapi.org/).
2. **Environment Variables:** Create a `.env` file in the project root and add your API key:
    ```plaintext
    REACT_APP_NEWS_API_KEY=your_api_key_here
    ```

3. **JSON Data File:** The app fetches news data from a JSON file. Ensure your API responses are saved to `data.json` in the project directory.

---

## Contributing

Contributions are welcome! Here’s how you can contribute:

1. **Fork the repository.**
2. **Create a new branch for your feature or bug fix:**
    ```bash
    git checkout -b feature/awesome-feature
    ```
3. **Commit your changes:**
    ```bash
    git commit -m 'Add awesome feature'
    ```
4. **Push to the branch:**
    ```bash
    git push origin feature/awesome-feature
    ```
5. **Open a pull request.**

Make sure to follow the project’s coding standards and guidelines.

---

## Contact

**Shivansh Pal**  
Email: [shivanshpal31@gmail.com](mailto:shivanshpal31@gmail.com)  
GitHub: [https://github.com/shivanshpal31](https://github.com/shivanshpal31)

---

## Acknowledgments

- Thanks to [NewsAPI.org](https://newsapi.org/) for providing the news API.
- Inspired by various news applications and React best practices.

---

Feel free to modify the content to better fit your project specifics and personal details. This README provides a clear and organized introduction to your News React App project, making it easy for others to understand and contribute.
