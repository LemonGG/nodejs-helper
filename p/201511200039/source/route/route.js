exports.init = function(app){
	
	app.get('/' , function( req , res ){
		res.render('home')
	})

	app.get('/register' , function( req , res ){
		res.render('register')
	})
}