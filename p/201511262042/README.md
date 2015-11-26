# node excel文件操作
---
> [源代码](/source)

#

> 依赖包：`node-xlsx`

    var xlsx = require('node-xlsx')
    var fs = require('fs')
###### 加载node-xlsx模块 fs模块

#

    var list = xlsx.parse('test.xlsx')
    console.log(JSON.string(list))

###### 读取excel文件的内容并打印出来
###### 读取的基本结构：`[{"name":"Sheet","data":[]}]`

#

    var b = [{"name":"Sheet","data":[['数据1','数据2']]}]
    var file = xlsx.build(b)
    fs.writeFileSync('test.xlsx',file,'binary')
###### 写入文件(注意：直接这样写会覆盖原来的数据)

#
    list[0]['data'].push([['数据1','数据2']])
    var file = xlxs.build(list)
    fs.writeFileSync('test.xlsx',file,'binary')
###### 追加数据

!!! 对表进行操作的时候需要关闭表





