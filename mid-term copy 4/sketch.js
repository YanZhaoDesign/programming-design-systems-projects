
var r = new Rune({
  container: "#canvas",
  width:800,
  height:800,
//  debug:true
//  debug: false
});

// Create a rectangle to fill the entire screen
// and a smaller rectangle on top
var background = r.rect(0,0,r.width,r.height).fill(250).stroke(false);

// Create a new Rune.Font object
var f = new Rune.Font("Orbitron Bold.ttf");

//color options
var color1 = new Rune.Color(0,0,0);
var color2 = new Rune.Color(100,0,0);
var color3= new Rune.Color(0,100,0);

f.load(function() {
	
//grid
var grid2= r.grid({
   x:0,
   y:0,
   width: r.width,
   height: r.height,
   gutter: 0,
   columns: 20,
   rows: 20
});

//add a ITP path
 var path= f.toPath("ITP", 0,0,300)
	.fill(0)
    .strokeWidth(0.4)
    .stroke(0)
   //  grid2.add(path, 5,30);
 
var len =40; //length of the square
	
//letter "I"

for(i=1; i<11;i+=1){	
//squares
//	var len =8;
var color = new Rune.Color(0,0,0);
var square = r.polygon(0,0)
    .fill(color1)
    .stroke(false)
    .lineTo(0,0)
	.lineTo(0, len)
	.lineTo(len,len)
//	.lineTo(len, len/2)
//	.lineTo(len/2,len/2)
	.lineTo(len,0);
	 grid2.add(square,a,b);
//	var dots = r.circle (0,0,1).fill(0);
//	grid2.add(dots,a,c);
		
// get integer between random range
   var a= Math.floor(Rune.random(2,4));
   var b= Math.floor(Rune.random(3,6));
}
  

//letter"T"
	 //stright stroke
for(i=1; i<9;i+=1){	
//squares
var color = new Rune.Color(0,0,0);
var square = r.polygon(0,0)
    .fill(color)
    .stroke(false)
    .lineTo(0,0)
	.lineTo(0, len)
	.lineTo(len,len)
//	.lineTo(len, len/2)
//	.lineTo(len/2,len/2)
	.lineTo(len,0);
	 grid2.add(square,a,b);
//	var dots = r.circle (0,0,1).fill(0);
//	grid2.add(dots,a,b);
//		
// get integer between random range
  var a= Math.floor(Rune.random(6,8));	
  var b= Math.floor(Rune.random(4,6));
  }
//head stroke
for(i=1;i<8;i+=1){
//squares
var color = new Rune.Color(0,0,0);
var square = r.polygon(0,0)
    .fill(color)
    .stroke(false)
    .lineTo(0,0)
	.lineTo(0, len)
	.lineTo(len,len)
	.lineTo(len,0);
	 grid2.add(square,a,b);
//	var dots = r.circle (0,0,1).fill(0);
//	grid2.add(dots,a,b);
// get integer between random range
  var a = Math.floor(Rune.random(5,9));
  var b = Math.floor(Rune.random(3,4));
}
  

//letter "p"
	//vertical stroke
for(i=1;i<10;i+=1){	
//squares
var color = new Rune.Color(0,0,0);
var square = r.polygon(0,0)
    .fill(color)
    .stroke(false)
    .lineTo(0,0)
	.lineTo(0, len)
	.lineTo(len,len)
//	.lineTo(len, len/2)
//	.lineTo(len/2,len/2)
	.lineTo(len,0);
	 grid2.add(square,a,b);
		
// get integer between random range
  var a= Math.floor(Rune.random(10,11));
  var b= Math.floor(Rune.random(3,6));
  }
////herizontal stroke
//for(i=1;i<40;i+=1){
////squares
//var color = new Rune.Color(0,0,0);
//var square = r.polygon(0,0)
//    .fill(color)
//    .stroke(false)
//    .lineTo(0,0)
//	.lineTo(0, len)
//	.lineTo(len,len)
////	.lineTo(len, len/2)
////	.lineTo(len/2,len/2)
//	.lineTo(len,0);
////	 grid2.add(square,a,b);
//		
//// get integer between random range
// var a= Math.floor(Rune.random(6,13));
// var b= Math.floor(Rune.random(3,7));
//  }
//
////lower herizontal stroke
//for(i=1;i<25;i+=1){
////squares
//var color = new Rune.Color(0,0,0);
//var square = r.polygon(0,0)
//    .fill(color)
//    .stroke(false)
//    .lineTo(0,0)
//	.lineTo(0, len)
//	.lineTo(len,len)
////	.lineTo(len, len/2)
////	.lineTo(len/2,len/2)
//	.lineTo(len,0);
////	 grid2.add(square,a,b);
//		
//// get integer between random range
//  var a= Math.floor(Rune.random(9,13));
//  var b= Math.floor(Rune.random(5,8));
//  }
//	
//right vertical stroke
for(i=1;i<6;i+=1){	
//squares
var color = new Rune.Color(0,0,0);
var square = r.polygon(0,0)
    .fill(color)
    .stroke(false)
    .lineTo(0,0)
	.lineTo(0, len)
	.lineTo(len,len)
//	.lineTo(len, len/2)
//	.lineTo(len/2,len/2)
	.lineTo(len,0);
	 grid2.add(square,a,b);
		
// get integer between random range
  var a= Math.floor(Rune.random(11,13));
  var b= Math.floor(Rune.random(3,5));
}


	
  r.draw()
});


