const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url=== '/about'){
    res.write("this is about")
    res.end()
}
if(req.url === '/contact'){
    res.write("this is contact")
    res.end()
}
res.end('oops click any one')
})

server.listen(5000);