# MoviesHub

Welcome to MoviesHub! This app helps users discover the perfect film for any mood, occasion, or taste through personalized movie suggestions.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [API Setup](#api-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Personalized Recommendations:** Get movie suggestions tailored to your unique tastes.
- **Extensive Database:** Explore a vast collection of movies, from classics to the latest releases.

## Installation
To get started with MoviesHub, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/s21sd/MoviesHub.git
    ```
2. Navigate to the project directory:
    ```bash
    cd MoviesHub
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## API Setup
This app uses the Movies API from RapidAPI to fetch movie data. Follow these steps to set up the API:

1. **Obtain an API key:**
   - Visit [RapidAPI](https://rapidapi.com/) and sign up for an API key for the Movies API at `movies-api14.p.rapidapi.com`.

2. **Configure the API key:**
   - Create a `.env` file in the root directory of your project.
   - Add your API key to the `.env` file:
     ```plaintext
     REACT_APP_RAPIDAPI_KEY=your_api_key_here
     ```

3. **Environment Variables:**
   - Ensure that your project is configured to read environment variables from the `.env` file. This is typically handled by the `dotenv` package, which is already included in Create React App.

## Usage
To start the app, run:
```bash
npm start
