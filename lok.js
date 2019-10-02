var lok=__dirname;
var b=lok.split("/");
for(var i in b){
b[i]="../";
}
b.pop();
module.exports=b.join("").toString()+"lib/node_modules/";