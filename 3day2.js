const http=require('http')
const serv=http.createServer((req,res)=>{
    res.write("such feeling come in")
    res.end()
})
serv.listen(5050,()=>{
    console.log("server started")
})
