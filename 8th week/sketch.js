
var r = new Rune({
  container: "#canvas",
  width:600,
  height:700,
//  debug:true
//  debug: false
});

//draw background
r.rect(0,0, r.width, r.height).fill(224,228,227);


// x,y for center circle
var noise = new Rune.Noise().noiseDetail(0.2);
var linePointsP = [];
var linePoints1 = [];
var linePoints2 = [];
 var x = 0;
 var y = 0;
 var numPoints = 30;
 var radius = 0;
 var pointDegree = 280 / numPoints;
 var noiseStep = 0;

// Create colors
// -------------------------------------

var colors = [
  [ new Rune.Color('hsv', 0, 0, 15), new Rune.Color('hsv', 0, 0, 10, 0.8) ],  // reds
  [ new Rune.Color('hsv', 170, 100, 76), new Rune.Color('hsv', 85, 79, 38, 0.8) ], // greens
  [ new Rune.Color('hsv', 356, 100, 100), new Rune.Color('hsv', 205, 18, 59, 0.8) ], // blues
  [ new Rune.Color('hsv', 0, 0, 99), new Rune.Color('hsv', 43, 91, 89, 0.8) ], // yellows
];
 // //no changing center points

 var noiseCircle = r.polygon(r.width/2, r.height/2)
     .stroke(255)
     .fill(0)
     .strokeWidth(2);

 for(var i = 0; i < numPoints; i++) {

   var noiseRadius = (noise.get(noiseStep) * 30) + radius;
   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;
   
    // caculate the center points
   linePointsP.push(new Rune.Vector(x+200,y+350));
   //caculate the two other points
   linePoints1.push(new Rune.Vector(x*30+300,y*30+450));
   linePoints2.push(new Rune.Vector(x*30+340,y*30+450));
 
     // noiseCircle.lineTo(linePointsP.x,linePointsP.y);
   noiseStep += 0.08;

 }
  // noiseCircle.lineTo(linePoints2.x,linePoints2.y);
 // draw vector points for outside circle


 //draw center circle points
 for(var j = 0; j <linePointsP.length - 1 ; j++) {
 
  var ranHeight2 = Rune.random(30,60);

  // then find all the points we need for this rectangle
    var point= linePointsP[j];
    var pointRight = linePointsP[j + 1];
   //rotate index for toppoints
    var noiseRadius = (noise.get(noiseStep) * 30) + radius;
   var RotatePointX = Math.cos(Rune.radians(pointDegree * j)) * noiseRadius;
   var RotatePointY= Math.sin(Rune.radians(pointDegree * j)) * noiseRadius;

    // // // and calculcate the outside points from this
     var topLeft = linePoints2[j];
     var topRight = linePoints1[j];
    // var topRight = topLeft.sub(new Rune.Vector(RotatePointX *20+200, RotatePointY*20+350));
    // outside points
    // var topLeft = linePoints1[j];
    // var topLeft = pointRight.sub(new Rune.Vector(0, ranHeight2));
    // var topRight = point.sub(new Rune.Vector(0, ranHeight2));

   //draw the triangles to make the real rectangles
   // r.triangle(topRight2.x, topRight2.y, topLeft2.x, topLeft2.y, point.x, point.y)

     // get a random set of colors. We could do this with weighted random
  // based on the number of times the colors appear in the original.
  var colorset = colors[Math.floor(Rune.random(colors.length))];

   r.triangle(topLeft.x+ranHeight2, topLeft.y+ranHeight2, topRight.x+ranHeight2, topRight.y+ranHeight2, point.x, point.y)
  // r.triangle(topLeft.x, topLeft.y, topRight.x, topRight.y, point.x, point.y)
    .fill(colorset[0])  
    .stroke(false);
  

   
r.text("UNPLUGGED", r.width/1.5, r.height/2)
  .fill(30)
  .stroke(false)
  .fontSize(30)
  .textAlign("center")
  .fontFamily("Font - Traditional Chinese")
  // .fontWeight("bold")

r.text("NCD LIVE PRESENTS", r.width/1.5, r.height/2.5)
  .fill(30)
  .stroke(false)
  .fontSize(15)
  .textAlign("center")
  .fontFamily("Font - Traditional Chinese")
 }

 
	
  r.draw();


