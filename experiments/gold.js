function setup() {
  createCanvas(innerWidth, innerHeight);
  //noLoop(); //draw it once
  rectMode(CENTER);
}

function draw() {
  background("#fff8dc");

  let cols = 10;
  let rows = 10;
  let spacing = width / cols;

  // gold palette
  let palette = [
    color(255, 215, 0, 180), // classic gold
    color(255, 223, 70, 180), // warm gold
    color(255, 239, 145, 180), // pale gold
    color(212, 175, 55, 180), // antique gold
    color(255, 220, 100, 180), // soft gold
  ];

  let layers = 10; // overlapping layers

  //3 loops loop controls how many times you draw the same grid on top of itself
  //from https://www.youtube.com/watch?v=UKxB2j4h7Ag
  for (let layer = 0; layer < layers; layer++) {
    for (let y = 0; y < rows; y++) {
      //
      for (let x = 0; x < cols; x++) {
        push();
        translate(x * spacing + spacing / 2, y * spacing + spacing / 2);

        // each layer has its own subtle rotation and offset
        // rotate(radians(random(-6, 6) + layer * 1.5));
        //translate(random(-3, 3), random(-3, 3));

        // soft shadow for depth from https://p5js.org/reference/p5/drawingContext/
        drawingContext.shadowOffsetX = random(-2, 2);
        drawingContext.shadowOffsetY = random(-2, 2);
        drawingContext.shadowBlur = 12;
        drawingContext.shadowColor = "rgba(0, 0, 0, 0.15)";

        // pick a gold color
        let c = random(palette);
        fill(c);
        stroke(50, 30); // very subtle outline
        strokeWeight(1);

        // square size decreases with upper layers
        let size = spacing * (0.7 - layer * 0.06);
        rect(0, 0, size, size, 4); // small rounded corners
        pop();
      }
    }
  }
}
