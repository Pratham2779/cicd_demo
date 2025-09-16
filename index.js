import http from 'http';

const port=3000;

const server=http.createServer((req,res)=>{
res.statusCode=200;
res.setHeader('Content-Type','text/plain');
res.end('Welcome to Devops world...');
});

server.listen(port,()=>{
    console.log("server is running on https://portfolio.prathamesh.site");
})