const url = require('url');

const myUrl =  new URL('http://Mywebsite.com/hello.html?id=100&status=active');

// 1: Serialized URl 

// console.log(myUrl.href);

// console.log(myUrl.toString());

// 2: Host (root domain) it does get port 

// console.log(myUrl.host);

//3: HostName it does not get port 

// console.log(myUrl.hostname);

// 4: pathname 

// console.log(myUrl.pathname);


//5: Serialized query 

// console.log(myUrl.search);


//6: Params objects

// console.log(myUrl.searchParams);