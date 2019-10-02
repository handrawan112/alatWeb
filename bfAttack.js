var init={
	kunci:"94cb13afd6f14b8cb9379787aa3333c1",
	x:[],
	y:[0],
	xy:[],
	yx:0,
	hasil:[],
	waktu:[],
katakunci:function(){
	"use strict";
	init.waktu.push(init.dates());
	try{
for(var i=32;i<127;i++){
	var a=String.fromCharCode(i);
	if(String.fromCharCode(i)!==" "){
		init.x.push(a);
	}
}

}catch(e){
	console.error("Func katakunci => "+e);
}
},
kt:function(){
	"use strict";
	try{
	for(var i=0;i<init.y.length;i++){
		init.y[i]=0;
	}
	}catch(e){
		console.error("Func kt => "+e);
	}
},
cek:function(){
	"use strict";
	try{
	for(var i in init.x){
		if(init.y.length<=1){
		 if(init.x[i]===init.kunci){
			console.log("Ketemu");
			
		 }
		}
		
		if(Number(i)===init.x.length-1){
			if(init.y.length<=1){
				init.y.push(0);
				init.y[0]<0;
				
			}
			
			if(init.y.length>1){
			  init.cekN();
			}
			
		}
	}
	
	/*process.stdout.write(init.y+" "+(init.y.join("")===init.xy.join("")));*/
	}catch(e){
		console.error("Func cek "+e);
	}
},

cekN:function(){
	if(init.y.length<=2){
		if(init.y[0]>=init.x.length){
			init.y.push(0);
			init.y[0]=0;
			
		}
		if(init.y[1]>=init.x.length-1){
			init.y[0]++;
			init.y[1]=0;
		}else{
			init.y[1]++;
		}
	}
	
	if(init.y.length>2){
		if(init.y[init.y.length-1]>=init.x.length){
			init.y[init.y.length-1]=0;
			init.y[init.y.length-2]++;
			
		}else{
			init.y[init.y.length-1]++;
		}
		
		init.inc();
	}
},
inc:function(){
	for(var i=0;i<init.y.length;i++){
		if(i<1){
			if(init.y[0]>=init.x.length){
				init.y.push(0);
				init.y[0]=0;
			}
		}
			if(i>=1){
			   if(init.y[i]>=init.x.length-1){
				   init.y[i-1]++;
				   init.y[i]=0;
			   }
			}
		}
},
ubahData:function(){
	for(var i=0;i<init.kunci.length;i++){
		init.xy.push(init.x.indexOf(init.kunci[i]));
	}
},
dataUbah:function(){
	for(var i=0;i<init.xy.length;i++){
		init.hasil.push(init.x[init.xy[i]]);
	}
},
dates:function(){
	return new Date().toLocaleTimeString();
},

};
init.katakunci();
init.kt();
init.ubahData();
init.dataUbah();

var wx=0;
while(true){
	if(init.y.length>35){
	  break;
	}
	if(init.y.join("")===init.xy.join("")){
		init.waktu.push(init.dates());
		console.log("Data Cocok");
		console.log(init.y);
		console.log(init.hasil);
		console.log(init.yx+" Request ");
		console.log("Waktu "+init.waktu);
		break;
	}
	init.cek();
	wx++;
	init.yx++;
}
