const express = require('express');
const app = express();
const PORT = 3000;

app.get('/home', (req, res) => {
    res.send('<h1>Welcome to the Dashboard!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});