var http = require('http')

var port = process.env.PORT || 3000

var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.write('this is a simple server')
	res.end()
})

server.listen(port)

console.log('server running at port: ' + port);