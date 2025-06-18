# React Quiz App

A simple and interactive quiz application built with React. It displays multiple-choice questions, tracks user answers, shows a result page at the end, and includes a restart option to retake the quiz.

## Features

- Multiple-choice questions  
- Tracks user-selected answers  
- “Previous” and “Next” navigation  
- “Finish Quiz” button to view results  
- Restart option to reset the quiz  
- Responsive UI with basic styling

## Tech Stack

- **React.js** – Built using functional components and React Hooks (useState)
- **CSS** – Custom styles with responsive design
- **Frontend-only** – Self-contained application with no backend dependencies
- **Question Data** – Stored as JavaScript objects within the component for easy prototyping and state handling

All questions are hardcoded using JavaScript objects inside the component.

## How It Works

- Questions are stored in a local JavaScript array.
- React `useState` is used to manage:
  - The current question
  - User-selected answers
  - Quiz completion state
- When the quiz is finished, the results are shown with a score summary.
- Users can restart the quiz anytime.

## File Structure

```
quiz-app/
├── App.jsx
├── Quiz.jsx
├── Results.jsx
├── index.js
└── index.css
```

## Getting Started

To run this project locally:

```bash
npm install
npm start
