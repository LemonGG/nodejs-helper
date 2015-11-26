var xlsx = require('node-xlsx')
var fs = require('fs')

//var obj = [{"worksheets":[na{"data":[['姓名',"性别",'年龄'],['Serio',"女",'18']]}]}]

var list = xlsx.parse('test1.xlsx')
// console.log(JSON.stringify(obj))
list[0]['data']['push'](['aaa','bbb','ccc'])

// var obj = [{"name":"Sheet","data":[['aaa','bbb','ccc'],['ddd','eee','fff']]}]


var file = xlsx.build(list)
fs.writeFileSync('test1.xlsx',file,'binary')

