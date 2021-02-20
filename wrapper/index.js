var express = require('express');
var path = require('path');

const app = express();
app.use('/', express.static(path.join(__dirname, 'static')));

app.listen(9999, () => {
    console.log(' server up at 9999')
});