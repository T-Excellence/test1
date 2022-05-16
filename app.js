var http=require("http");

function callback(){
    console.log("someone connects");
}

var server= http.createServer(function(request, response){
callback();
response.writeHead(200,{"Content-Type":"html"});
response.end("<h1>Hello buddy</h1><br> welcome to my website.");

}

);
server.listen(8080, "127.0.0.1");
console.log(`server is listening on ${server.address()}`);
