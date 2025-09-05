function setup() {
  createCanvas(innerWidth, innerHeight);
  noLoop();
  rectMode(CENTER);
}

function draw() {
  background("#fdf6f0"); // soft pastel background

  let cols = 10;
  let rows = 10;
  let spacing = width / cols;

  // pastel palette with soft tones
  let palette = [
    color(255, 193, 204, 180), // pink with transparency
    color(181, 234, 215, 180), // mint
    color(199, 206, 234, 180), // lavender
    color(255, 218, 193, 180), // peach
    color(226, 240, 203, 180), // light green
    color(255, 245, 186, 180), // lemon yellow
  ];

  // number of overlapping layers
  let layers = 9;

  for (let layer = 0; layer < layers; layer++) {
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        push();
        translate(x * spacing + spacing / 2, y * spacing + spacing / 2);

        // each layer has its own small randomness
        rotate(radians(random(-6, 6) + layer * 2));
        translate(random(-4, 4), random(-4, 4));

        // dreamy shadow
        drawingContext.shadowOffsetX = random(-2, 2);
        drawingContext.shadowOffsetY = random(-2, 2);
        drawingContext.shadowBlur = 15;
        drawingContext.shadowColor = "rgba(200, 150, 255, 0.25)";

        // pick a pastel color
        let c = random(palette);
        fill(c);
        stroke(80, 40); // very soft outline
        strokeWeight(1);

        // smaller squares for upper layers
        let size = spacing * (0.7 - layer * 0.1);
        rect(0, 0, size, size, 6);
        pop();
      }
    }
  }
}
