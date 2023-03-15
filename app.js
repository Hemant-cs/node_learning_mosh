// console.log('hello world')

const http = require('http');

http.createServer((req,res)=>{
        res.write("hello world");
        res.end();
}).listen(8080);

console.log('running on 8080')