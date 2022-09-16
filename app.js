const path = require('path');
const express = require('express');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/register.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/login.html'));
});
app.get('/productCreate', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/productCreate.html'));
});


const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`Server running in port ${port}`));
