var do_cookies = require('./do_cookies');
var util = require("./util")

var v = ["name","price","user","school"]
var goods_msg = {0:{"name":"大学化学实验","price":"5.00","user":"aaa","school":"陕西科技大学"},1:{"name":"加工工艺基础","price":"5.00","user":"bbb","school":"陕西科技大学"},2:{"name":"管理学-原理与方法","price":"5.00","user":"ccc","school":"陕西科技大学"},3:{"name":"数字图像处理","price":"5.00","user":"ziyan","school":"陕西科技大学"}}
for(var x = 4;x<18;x++){
    goods_msg[x]= {"name":"数字图像处理","price":"5.00","user":"qqt","school":"陕西科技大学"}
}
                        
