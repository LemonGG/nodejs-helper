# 命令行程序
---
#### 如何在像使用 `node -v`直接在命令行中执行自己的项目/工程呢？现在我们就来看看， 原来它是这么的简单
##
##### window
> 源文件列表：[l.js](source/l.js) [l.cmd](source/l.cmd)

1. 新建l.js文件，文件内容如下：
	
		function main(argv){
			if(argv=='-v'){
				console.log('version 1.0.0');	
			}else{
				console.log('...');
			}	
		}
		main(process.argv.slice(2))

2. 新建l.cmd文件，文件内容如下：

		@node l.js %*

3. 想要在任何地方使用 l,将l.cmd添加至环境变量即可
4. 打开命令行输入： `l -v`，是不是看到版本号了  0 .0 