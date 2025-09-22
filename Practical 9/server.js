const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to our site');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});