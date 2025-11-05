# 2024_simple_quiz

A very small React quiz app. It shows a series of multiple-choice questions, records the number of correct answers, and displays a Results page when you finish.

What this repo contains
- A simple quiz UI at `src/components/Quiz.js`
- A small results page at `src/components/Results.js`
- A score controller at `src/controllers/scoreController.js` that centralizes score persistence
- Tests (unit + integration) under `src/` using React Testing Library and Jest

Quick start

1. Install dependencies (if you haven't already):

```bash
npm install
```

2. Run the app in development mode:

```bash
npm start
```

Open http://localhost:3000 in your browser.

Run tests

- Interactive (watch) mode:

```bash
npm test
```

- Run tests once (CI style):

```bash
CI=true npm test -- --watchAll=false
```

What the tests cover (simple):
- Unit test for `scoreController` (save/get/reset).
- Integration test that exercises the quiz flow: select answers, click Done, and assert the Results page shows the saved score.

Notes
- Alerts are used for simple feedback in the UI; the integration test mocks alerts to avoid popups.
- This project was originally bootstrapped with Create React App.

