const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.post('/calculate', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const operation = req.body.operation;
    let result;
    if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
        result = 'Please enter valid numbers.';
    } else {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        switch (operation) {
            case 'add': result = a + b; break;
            case 'subtract': result = a - b; break;
            case 'multiply': result = a * b; break;
            case 'divide': result = b !== 0 ? a / b : 'Cannot divide by zero'; break;
            default: result = 'Invalid operation';
        }
    }
    res.send(`<h2>Result: ${result}</h2><a href='/'>Try again</a>`);
});
app.listen(3000, () => {
    console.log('Calculator app listening on port 3000');
});