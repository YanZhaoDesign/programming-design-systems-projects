var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});


//backgrounds
var myrect = r.rect(0,0,r.width/2, r.height).fill(0,0,0).stroke(0)
var myCopyrect = myrect.copy().scale(1).move(r.width/2,0,true).fill(250,250,250).stroke(250)

// ice cream
	
	
var myellipse = r.ellipse(280, 334, 213, 213).rotate(-21,270,380)    //ellipse once
  .fill(0,0,0)
  .stroke(250,250,250)
  .strokeWidth(10)
//copy ice cream
var myCopyellipse = myellipse.copy().scale(1).move(230,0,true).fill(250,250,250).rotate(20,520,380).stroke(0,0,0);
 

//cone

var mytriangle = r.triangle(189, 400, 279, 650, 374,395) .rotate(-21,270,380)    //triangle once
  .fill(250, 250, 250)
  .stroke(250,250,250)
  .strokeWidth(3)

// copy cone
var myCopytriangle = mytriangle.copy().scale(1.02).move(228,-5,true).fill(0,0,0).rotate(20,520,380).stroke(0,0,0);
r.draw();