function setup() {
  createCanvas(innerWidth, innerHeight);
  //noLoop();
  rectMode(CENTER);
}

function draw() {
  background("#808080");

  let cols = 8;
  let rows = 8;
  let spacing = width / cols;

  let layers = 3; // fewer layers for clarity

  for (let layer = 0; layer < layers; layer++) {
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        push();
        translate(x * spacing + spacing / 2, y * spacing + spacing / 2);

        // soft shadow same links from the first example
        drawingContext.shadowOffsetX = random(-1, 1);
        drawingContext.shadowOffsetY = random(-1, 1);
        drawingContext.shadowBlur = 6;
        drawingContext.shadowColor = "rgba(0, 0, 0, 0.1)";

        let size = spacing * (0.8 - layer * 0.1);
        drawBeautifulEye(0, 0, size);
        pop();
      }
    }
  }
}

function drawBeautifulEye(x, y, size) {
  push();
  translate(x, y);

  // random eye rotation (looking different directions)
  rotate(radians(random(-10, 10)));

  // Eye shape
  let eyeW = size * random(0.8, 1.2);
  let eyeH = size * random(0.3, 0.5);

  // sclera (white of eye)
  noStroke();
  fill(255);
  ellipse(0, 0, eyeW, eyeH);

  // iris
  let irisColors = [
    color(70, 130, 180), // blue
    color(34, 139, 34), // green
    color(139, 69, 19), // brown
    color(210, 180, 140), // hazel
    color(105, 105, 105), // gray
    color(65, 105, 225), // deep blue
  ];
  let irisColor = random(irisColors);
  fill(irisColor);
  let irisSize = eyeH * random(0.6, 0.85);
  ellipse(0, 0, irisSize, irisSize);

  // subtle iris ring
  noFill();
  stroke(0, 50);
  strokeWeight(0.5);
  ellipse(0, 0, irisSize, irisSize);

  // pupil
  noStroke();
  fill(0);
  let pupilSize = irisSize * random(0.3, 0.5);
  ellipse(0, 0, pupilSize, pupilSize);

  // highlight
  fill(255, 200);
  ellipse(irisSize * 0.15, -irisSize * 0.15, pupilSize * 0.3, pupilSize * 0.3);

  // top eyelid
  noFill();
  stroke(0);
  strokeWeight(1.5);
  arc(0, 0, eyeW * 1.05, eyeH * 1.2, PI, 0); // top lid

  // eyelashes (top)
  let lashCount = int(random(4, 8));
  for (let i = 0; i < lashCount; i++) {
    let angle = map(i, 0, lashCount - 1, -PI, 0);
    let lx = cos(angle) * eyeW * 0.55;
    let ly = sin(angle) * eyeH * 0.6;
    let lx2 = lx + random(-2, 2);
    let ly2 = ly - random(6, 10);
    strokeWeight(1);
    line(lx, ly, lx2, ly2);
  }

  // eyebrows
  strokeWeight(2);
  stroke(0);
  noFill();
  let browW = eyeW * random(1.1, 1.4);
  let browH = eyeH * random(0.3, 0.5);
  beginShape();
  for (let t = -PI / 2; t <= PI / 2; t += 0.3) {
    // used chatgpt for this part
    let bx = cos(t) * browW * 0.5;
    let by = -eyeH * 1.2 - sin(t) * browH;
    vertex(bx, by);
  }
  endShape();

  pop();
}
