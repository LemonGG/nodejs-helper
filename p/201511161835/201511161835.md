# 搭建一个简单服务器
---

> [源代码](souce/simple_server.js)

---
> ### 代码分解：



##
	var http = require('http')
    
###### 加载http模块




##
	var port = process.env.PORT || 3000


###### 定义端口号




##

	var server = http.createServer(function(req,res){
		
	})
###### 创建服务器




##
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.writeHead('this is a simple server')
	res.end()
###### 定义信息类型，写入信息，结束并发送




##
	server.listen(port)
###### 监听port端口并启动服务器



##
> 小结：
###### >>>>>> 源代码在最上面
###### >>>>>> 新建源index.js,把源码粘进去,命令行执行`node index.js`,启动成功后在浏览器中输入localhost:3000（如果你使用的是通过命令行传入的port，那么请自行更改），如果你看到'this is a simple server',恭喜你，你成功了！！！
	