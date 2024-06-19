# The Office Quiz

A fun and interactive quiz to find out which character from the TV show "The Office" you are most like! This project is built using React and Tailwind CSS.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo

A live demo of the project can be found [here](#). (Replace with the actual link if available)

## Features

- Interactive quiz with multiple questions
- Dynamically calculates the character based on user responses
- Modern UI design with Tailwind CSS
- Responsive design for mobile and desktop users

## Installation

To get a local copy up and running follow these simple steps:

### Prerequisites

- Node.js and npm installed on your local machine. You can download them from [here](https://nodejs.org/).

### Setup

1. Clone the repository:

   \```sh
   git clone https://github.com/yourusername/office-quiz.git
   cd office-quiz
   \```

2. Install NPM packages:

   \```sh
   npm install
   \```

3. Set up Tailwind CSS:

   Tailwind CSS is already configured in this project. You can find the configuration in `tailwind.config.js` and `src/index.css`.

## Usage

To start the development server, run:

\```sh
npm start
\```

This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

## Project Structure

\```
office-quiz/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Quiz.js
│   │   └── Welcome.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── questions.json
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
\```

- `public/index.html`: The main HTML file.
- `src/components/Quiz.js`: The quiz component where the quiz logic is implemented.
- `src/components/Welcome.js`: The welcome page component.
- `src/App.js`: The main app component.
- `src/index.js`: The entry point of the application.
- `src/index.css`: The global CSS file with Tailwind CSS imports.
- `src/questions.json`: The JSON file containing the quiz questions and answers.
- `tailwind.config.js`: The Tailwind CSS configuration file.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
