const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/logs', (req, res) => {
    const logFilePath = path.join(__dirname, 'errorlog.txt'); // Change filename as needed
    fs.readFile(logFilePath, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return res.status(404).send('<h2>Log file not found.</h2>');
            } else {
                return res.status(500).send('<h2>Error accessing log file.</h2>');
            }
        }
        res.send(`<pre>${data}</pre>`);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});