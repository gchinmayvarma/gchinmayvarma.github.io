function setup() {
  let cnv = createCanvas(cnv_width, cnv_height);
//   cnv.position(windowWidth  - cnv_width *1.5 , windowHeight / 2 - cnv_height / 2);
  cnv.position(0, 100);
  cnv.style("z-index", "-1");

  cnv.style("position", "asbsolute");
}

let cnv_width = 600;
let cnv_height = 500;

function windowResized() {
  resizeCanvas(cnv_width, cnv_height);
}

function draw() {
//   background(0);
  clear();
  stroke(200, 120);
  fill(200, 80);
  if(mouseY > cnv_height*0.4 && mouseY < cnv_height*0.6){
    fill(255,0,0,80);
    stroke(255,0,0,120);
  }

//   push();
//   translate(width / 2, height * 0.3);
//   let r = 20;
//   let t = frameCount / 200.0;
//   for (let i = 0; i < TWO_PI - 0.001; i += PI / 3) {
//     let x = cos(i + t) * r;
//     let y = sin(i + t) * r;
//     dna(x, y, i + t, 140, frameCount / 10.0);
//   }
//   pop();

  let dnal = cnv_width/2;
  push();
  translate(width / 2, height * 0.5);
  rotate(PI);
  r = cos(frameCount * 0.004) * dnal;
  t = 0;//frameCount / 200.0;
  let i_delta = PI*2;
  // if(mouseClicked){
  //   i_delta = PI / 3;
  // }
  for (let i = 0; i < TWO_PI - 0.001; i += i_delta) {
    let x = cos(i + t) * r;
    let y = sin(i + t) * r;
    dna(x, y, i + t, dnal - r, frameCount / 20.0);
  }
  pop();
}

function dna(x, y, rotat, d, t) {
  push();
  translate(x, y);
  rotate(rotat);
  let ddelta = 10;
  let ppoint_x = null;
  let ppoint_y = null;
  let ppoint_y2 = null;

  let theta = t;
  let dtheta = PI / 12;
  for (let i = 0; i < d; i += ddelta) {
    let r = 10;// + i * 0.05;
    let point_x = i;
    let point_y = sin(theta) * r;
    let point_y2 = sin(theta + PI) * r;

    ellipse(point_x, point_y, 5, 5);
    ellipse(point_x, point_y2, 5, 5);
    if (ppoint_x !== null) {
      line(ppoint_x, ppoint_y, point_x, point_y);
      line(ppoint_x, ppoint_y2, point_x, point_y2);
      line(point_x, point_y, ppoint_x, ppoint_y2);
    }
    ppoint_x = point_x;
    ppoint_y = point_y;
    ppoint_y2 = point_y2;
    theta += dtheta;
  }
  pop();
}
