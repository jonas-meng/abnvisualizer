const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
var createError = require('http-errors');

var dataRouter = require('./routers/data')

app.use(cors());
app.use('/', dataRouter);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))