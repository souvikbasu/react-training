const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();


app.get('/index_bundle.js', function (request, response){
    response.sendFile(path.resolve(__dirname, '../dist', 'index_bundle.js'))
});

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
});

app.listen(port);
console.log("server started on port " + port);

