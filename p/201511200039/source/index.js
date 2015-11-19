var express = require('express')
var path = require('path')

var router = require('./route/route.js')
var app = express()

app.set('port' , process.env.PORT || 3000)
app.set('views' , path.join(__dirname , 'views'))
app.set('view engine' , 'jade')

app.use(express.static(__dirname + '/public'))

router.init(app)

app.listen(app.get('port') , function(){
	console.log("server starting...")
})