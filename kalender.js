/* Program Kalender Sederhana Versi JavaScript 
Keunggulan
[*] Ringan
[*] Hemat Memori
[*] Open Source

Program ini dibuat oleh Handrawan di laboratorium @WoaLabs
*/
document.write("
<style>
.kiri, .kanan {
background:green;
color:white;
padding:2px 10px;
text-decoration:none;
border-radius:10px;
}
.tanda {
background:green;
color:white;
padding:2px 4px;
text-decoration:none;
}
</style>");
document.write("
<table style='text-align:center' width='100%'>
<tr>
<td><div class='kiri' onclick='kembali()'><-</div></td>
<td id='sekarang'></td>
<td><div class='kanan' onclick='lanjut()'>-></div></td>
</tr>
</table>
<table style='text-align:center' width='100%'>
<tr>
<td>Sen</td>
<td>Sel</td>
<td>Rab</td>
<td>Kam</td>
<td>Jum</td>
<td>Sab</td>
<td>Min</td>
</tr>
</table>
<table width='100%' style='text-align:center'>
<tr id='min1'>

</tr>
</table>
<table width='100%' style='text-align:center'>
<tr id='min2'>

</tr>
</table>
<table width='100%' style='text-align:center'>
<tr id='min3'>

</tr>
</table>
<table width='100%' style='text-align:center'>
<tr id='min4'>

</tr>
</table>
<table width='100%' style='text-align:center'>
<tr id='min5'>

</tr>
</table>
<table width='100%' style='text-align:center'>
<tr id='min6'>

</tr>
</table>
<table width='100%' style='text-align:center'>
<tr id='min7'>

</tr>
</table>
<table width='100%'>
<tr>
<th id='jam'>Tahun</th>
</tr>
</table>
");
function setTD(y,xy,yx){
"use strict";
var ex=yx;
for(var i=0;i<=xy.length-1;i++){
var x=document.getElementById(y+ex);
x.innerHTML=xy[i];
ex+=1;
}
}
function TDbuat(y,dx,xd){
"use strict";
var x=document.getElementById(y);
for(var i=dx;i<=xd;i++){
x.innerHTML+="<td width='9%' id='h"+i+"'></td>";
}
}
TDbuat("min1",1,7);
TDbuat("min2",8,14);
TDbuat("min3",15,21);
TDbuat("min4",22,28);
TDbuat("min5",29,35);
TDbuat("min6",36,42);
function kalender(a,b,c){
"use strict";
var y=new Date(a,b,c);
return y;
}


function Kalender(imp,inp){
"use strict";
var date=new Date();
var minggu1=[],minggu2=[],minggu3=[],minggu4=[],minggu5=[],minggu6=[],minggu7=[],tandaX=[];
var awal=kalender(imp,inp,1);
var akhir=kalender(imp,inp,31);
var x=awal.getDay();
var ptgl=akhir.getDate();
if(ptgl==31){
var ket=1;
if(x==0){
for(var i=1;i<=31;i++){
if(i==date.getDate()){
tandaX.push(ket);
}
sminggu(ket,i);
if(x==0){
x=0;
ket+=1;
}else if(x==7){
x=0;
ket+=1;
}
x+=1;
}

}else{
//Bukan hari minggu
for(var i=1;i<=31;i++){
if(i==date.getDate()){
tandaX.push(ket);
}
sminggu(ket,i);
if(x==7){
x=0;
ket+=1;
}
x+=1;
}


}
//Batas tanda
tambahM1(minggu1.length);
tambahM5(minggu5.length);
tambahM6(minggu6.length);

/*Batas akhir tanggal 31 */
}else{
var nux=31-akhir.getDate();
var ket=1;
if(x==0){
for(var i=1;i<=nux;i++){
if(i==date.getDate()){
tandaX.push(ket);
}
sminggu(ket,i);
if(x==0){
//sminggu(ket,i);
x=0;
ket+=1;
}else if(x==7){
x=0;
ket+=1;
}
x+=1;
}
}else{
//Bukan hari minggu
for(var i=1;i<=nux;i++){
if(i==date.getDate()){
tandaX.push(ket);
}
sminggu(ket,i);
if(x==7){
x=0;
ket+=1;
}
x+=1;
}

}
tambahM1(minggu1.length);
tambahM5(minggu5.length);
tambahM6(minggu6.length);
}
function sminggu(x,y){
if(x==1){
minggu1.push(y);
}else if(x==2){
minggu2.push(y);
}else if(x==3){
minggu3.push(y);
}else if(x==4){
minggu4.push(y);
}else if(x==5){
minggu5.push(y);
}else if(x==6){
minggu6.push(y);
}else if(x==7){
minggu7.push(y);
}
}

function tambahM1(a){
if(minggu1.length!=7){
for(var i=1;i<=7-a;i++){
minggu1.unshift("..");
}
}
}

function tambahM5(a){
if(minggu5.length!=7){
for(var i=1;i<=7-a;i++){
minggu5.push("..");
}
}
}
function tambahM6(a){
if(minggu6.length!=7){
for(var i=1;i<=7-a;i++){
minggu6.push("..");
}
}
}

function JAM(){
var date=new Date();
document.getElementById("jam").innerHTML=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}
setInterval(JAM,0);
cariTanda();
setTD("h",minggu1,1);
setTD("h",minggu2,8);
setTD("h",minggu3,15);
setTD("h",minggu4,22);
setTD("h",minggu5,29);
setTD("h",minggu6,36);
setTD("h",minggu7,42);

function objCT(a){
var hu=date.getDate();
if(typeof a =="object"){
var deret=a.indexOf(hu);
var hasil=a.splice(deret,1,"<b class='tanda'>"+hu+"</b>");
}
return a;
}

function cariTanda(){
var a=tandaX;
if(a==1){
objCT(minggu1);
}else if(a==2){
objCT(minggu2);
}else if(a==3){
objCT(minggu3);
}else if(a==4){
objCT(minggu4);
}else if(a==5){
objCT(minggu5);
}else if(a==6){
objCT(minggu6);
}else if(a==7){
objCT(minggu7);
}
}

/*alert(document.getElementById("min1").innerHTML);*/
}
function setKet(a,b){
document.getElementById(a).innerHTML=b;
}

var date=new Date();
var xk=date.getMonth();
var lk=date.getFullYear();
Kalender(lk,xk);
var bulan=["Januari","Febuari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
setKet("sekarang",bulan[xk]+" "+lk);

function kembali(){
if(xk==0){
xk=11;
if(xk==11){
lk-=1;
}
}else{
xk -= 1;
}
setKet("sekarang",bulan[xk]+" "+lk);
Kalender(lk,xk);
}

function lanjut(){
if(xk==11){
xk=0;
if(xk==0){
lk+=1;
}
}else{
xk += 1;
}
setKet("sekarang",bulan[xk]+" "+lk);
Kalender(lk,xk);
}
