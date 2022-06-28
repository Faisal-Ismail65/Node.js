const http = require('http');
const path = require('path');
const fs = require('fs');
user = [
    {name : 'faisal',age:23 },
    {name : 'waqas',age:23},
    {name : 'umar',age:23},
    {name : 'younis',age:23}
];
const server = http.createServer((req,res)=>{

    // 1:  using if else statement
    
    
   if(req.url == '/'){
    fs.readFile(path.join(__dirname,'index.html'),(error,data)=>{
        res.end(data);
    });
    
   }
   else if(req.url == '/about'){
    fs.readFile(path.join(__dirname,'about.html'),(error,data)=>{
        res.end(data);
    });
   }
   else if(req.url == '/contact'){
    fs.readFile(path.join(__dirname,'contact.html'),(error,data)=>{
        res.end(data);
    });
   }
   else if(req.url =='/user'){
   res.end(JSON.stringify(user)); 
   }

//2: using ternary operator 

// req.url == '/' ? fs.readFile(path.join(__dirname,'index.html'),(error,data)=>{
//     res.end(data);
// }) : req.url == '/about' ? fs.readFile(path.join(__dirname,'about.html'),(error,data)=>{
//     res.end(data);
// }) : req.url == '/contact' ? fs.readFile(path.join(__dirname,'contact.html'),(error,data)=>{
// res.end(data);     
// }) : req.url == '/user' ? res.end(JSON.stringify(user)) : "not found"; 




});  

const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>{
console.log(`server is running on ${PORT}`);
});