//Referenced by Jason Robert

let angle = 0;
var canvas;

function windowResized(){

  resizeCanvas(windowWidth, windowHeight/2);

}
function setup() {
  canvas= createCanvas(windowWidth, windowHeight/2, WEBGL);

  canvas.position(0,0);
  canvas.style('z-index','-1');

}

function draw() {
	let dx = mouseX-width/2
  let dy = mouseY -height/2
  let v = createVector(dx, dy, 0);
  v.div(100);

	//let camX = map(mouseX, 0, width, -0, 1200);
	//camera(width/2,0,(height/2)/tan(PI/6),width/2,0,0,0,1,0);

  background(255);

	/////////////////
	push();
	ambientLight(0, 100, 255);
	directionalLight(255, 0, 0, v);

//push();
  noStroke()
	ambientMaterial(255);
		rotateZ(angle*0.5 );
	translate(dx,dy)

  rotateY(angle * 0.3);
  rotateZ(angle *1.2);

  torus(150, 100);

	angle += 0.03;
	pop();

	///////////////



}
