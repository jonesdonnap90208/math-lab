const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const mathProblems = [
    { problem: '2 + 2', solution: 4 },
    { problem: '3 x 5', solution: 15 },
    { problem: '6 - 3', solution: 3 },
    { problem: '9 / 3', solution: 3 },
    { problem: '7 + 1', solution: 8 }
  ];

  const randomIndex = Math.floor(Math.random() * mathProblems.length);
  const randomProblem = mathProblems[randomIndex];

  res.json({ problem: randomProblem.problem, solution: randomProblem.solution });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
