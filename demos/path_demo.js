// require path module from node modules.
const path =  require('path');

//1 :  base file name using basename method.
console.log(path.basename(__filename));

// 2:  base directory name using dirname method 

 //note : this function is same as only using _dirname

console.log(path.dirname(__filename));

//3:   find file extention with extname method

//console.log(path.extname(__filename));

//4:  create path object with parse method

// console.log(path.parse(__filename));

// console.log(path.parse(__filename).base);

// console.log(path.parse(__filename).dir);

// console.log(path.parse(__filename).ext);

// console.log(path.parse(__filename).name);

// console.log(path.parse(__filename).root);


// 5:  Concatenate paths

// console.log(path.join(__dirname,'test','hello.html'));


