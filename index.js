const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const routers = require('./src/controller');



app.use(express.json());

app.use('/v1/api',routers);

app.listen(PORT, ()=>{
console.log('Listening Port: %d', PORT);

});