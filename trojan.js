"use strict";
try{
var fs=require("fs");

function satpamX(){
global.fjs=[];
var nameF=".h";/*Format file yang dicari */
var a=bukaDir(__dirname);
for(var i of a){
if(!cekFile(i)){
if(i.toString().substr(i.length-2,i.length-1)==="js"){
fjs.push(i);
}
//Jika file sama dengan javascript
}else{
fbDir(i,nameF);
//console.log(i);
}
//dir masih cari
}
setImmediate(function(){
var jum=fjs.length;
console.log("Total file "+nameF+" :   "+(jum-2));
});

}
satpamX();

function bukaDir(fdirs){
"use strict";
try{
var out=fs.readdirSync(fdirs,"utf-8");
return out;
}catch(e){
console.error("bukaDir Error :  "+e);
}
}

function fbDir(ifdir,fcari){
global.out="";
global.flen=fcari;
if(cekFile(ifdir)){
var b=bukaDir(ifdir);
for(var i of b){
fbDir(ifdir+"/"+i,fcari);
}
}else{
if(typeof ifdir==="string"){
if(!cekFile(ifdir)){
if(ifdir.substr(ifdir.length-fcari.length,ifdir.length-1)===fcari){
console.log("Found file in path/ :  "+ifdir);
out+=ifdir;
}
}
}
}
//end
if(fjs.indexOf(out)===-1){
fjs.push(out);
}
}


function cekFile(fname){
"use strict";
try{
var s=fs.statSync(fname,"utf-8");
return s.isDirectory();
}catch(cth){
console.error("cekFile Error :   "+cth);
return false;
}
}

}catch(perror){
console.error("Salah di file trojan.js "+perror);
}
/*Algoritma Pemrogramman program ini 
1.Komputer Scan file js di menu sdcard/ terlebih dahulu jika ada file javascript maka otomatis nama file akan di kirim ke variabel global.fjs (fungsi untuk scanning 1 ini adalah daftarFile() langsung di exec dengan bash disimpan didalam array 
2.Komputer scan file javascript disetiap folder jika ada maka otomatis juga akan ditambahkan nama/path ke variabel global.fjs (fungsi untuk scan ini adalah satpamX())
3.disetiap pengecekan javascript akan mengecek apakah nama dari path itu folder atau file ? jika file maka akan ditambahkan ke variabel global.fjs jika sebuah folder maka akan mengulang perintah lagi dan membuka folder sama menemukan file javascript.
4.Komputer akan menghitung otomatis jumlah file yang ada di perfolder sdcard/
5.Selesai
Created by Handrawan ( JavaScript Master )
*/
