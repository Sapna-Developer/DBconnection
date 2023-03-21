let http = require("http"); //return object http
let server = http.createServer((req, res) => {
  res.write("Login successfully");
  res.end();
}); //return object server
// ()=>{} call back function
server.listen(8080);
console.log("server is working on prt num 8080");