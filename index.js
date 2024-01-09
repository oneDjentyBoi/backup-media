const express = require('express');
const app = express();

app.get('/health-check', (req, res) => {
    res.send("I am fine!!");
});

const port = 3017;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})