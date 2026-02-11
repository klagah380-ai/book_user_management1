const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/users');

const rootDir = require('./util/path');


app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(rootDir, 'public')));


app.use('/books', bookRoutes);
app.use('/users', userRoutes);


app.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

app.use((req, res,  next) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(PORT, () => {
    console.log('server is running on port http://localhost:${PORT}');
});