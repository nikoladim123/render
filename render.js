const express = require('express');
const app = express()
const port = process.env.PORT || 3001;

app.get('/',(req,res)=>{
    res.send('asdasd')
})

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
// app.listen(3000)

console.log(1231231)