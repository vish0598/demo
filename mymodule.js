fs=require("fs");
exports.addition=function(a,b){
     return parseInt(a)+parseInt(b);
}

exports.writedatafile=function(nm,skills){
	data=nm+",";
	for(i=0;i<skills.length;i++){
		data=dataskills[i]+","+",";
		
	}
	fs.appendFile("userdata.txt",data);
}
