const express = require('express');
const app = express();

const path = require('path');

const PORT = process.env.PORT || 3500;

app.get('^/$ | /index(.html)?', (req, res) => {
  /** sending files to the server */
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/page.html', (req, res) => {
  /** sending files to the server */
  res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get(
  '/hello(.html)',
  (req, res, next) => {
    console.log('hello.html');
    next();
  },
  (req, res) => {
    res.send('hi');
  }
);

app.get('/*', (req, res) => {
  /** sending files to the server */
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
