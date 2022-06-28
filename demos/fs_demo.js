// require fs and path modules from node_modules.
const fs = require('fs');
const path =  require('path');

// 1: make directory with mkdir method

// fs.mkdir(path.join(__dirname,'test'),err => {
// if(err) throw err;
// console.log("folder created");
// });

// 2: creating and writing into files.

// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'hello world',err =>{
// if(err) throw err;
// console.log("file is created");
// });

// 3: Append file will write into existing file.

// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'hello world',err =>{
//     if(err) throw err;
//     console.log("file is created");
//     fs.appendFile(path.join(__dirname,'/test','hello.txt'),' I love Node.js',err =>{
//         if(err) throw err;
//         console.log("file is created");
//         });    
// });


// 4:  read file method will read file
// note: use utf8  or utf-8 as a parameter to get actual data and not buffer

// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data) => {
// if(err) throw err;
// console.log (data);
// });

// 5:  rename file with rename method

// fs.rename(path.join(__dirname,'/test','helloworld.txt'),path.join(__dirname,'/test','hello.txt'),(err) => {
// if(err) throw err;
// console.log ("file renamed...");
// });


