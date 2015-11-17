function main(argv){
	if(argv=='-v'){
		console.log('version 1.0.0');	
	}else{
		console.log('...');
	}	
}
main(process.argv.slice(2))