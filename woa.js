var isi=function(x){
if(arguments.length<2){
Object.defineProperty(this,"dataIsi",{value:[],enumerable:false});
(function(init){
"use strict";
try{
if(typeof init==="object"){
var data=["bolean","num","str","obj"];
var tdata=["boolean","number","string","object"];
var tipe=Object.keys(init);
for(var x in tipe){
var td=tdata.indexOf(typeof init[tipe[x]]);
var dt=tipe[x].substr(0,data[td].length);
if(dt===data[td]){
if(tipe[x].length!==data[td].length){
dataIsi.push(tipe[x]);
}else{
throw new Error("Katakunci '"+tipe[x]+"'  belum diberikan nama ");
}
}else{
if(data.indexOf(dt)===-1){
throw new Error("Definisi '"+tipe[x]+"' tidak ada katakunci ");
}else{
throw new Error("Definisi Data Salah -> '"+tipe[x]+"' bertipe '"+typeof init[tipe[x]]+"', Seharusnya definisi '"+tipe[x]+"' bertipe '"+tdata[data.indexOf(dt)]+"'");
}
}

}
/*Batas akhir*/
}else{
throw("ArgumenSalah : Definisi Argumen untuk Tipenya salah\n Argumen Tipe data harus objek ");
}
}catch(e){
console.error(e);
}
})(x);
for(var ix=0;ix<dataIsi.length;ix++){
Object.defineProperty(this,dataIsi[ix],{value:x[dataIsi[ix]],writable:true,enumerable:false,configurable:true});
}
}else{
throw("ObjekArgumenSalah : Objek Argumen tidak boleh lebih dari 1 Argumen ");
}

};
isi({
"str_a":"Hallo",
"bolean_z":false,
"bolean":true,
});














