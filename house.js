// mariange gagnon
// nicholas brown
// web and effects
// rainy
//https://openprocessing.org/sketch/1882219

// instruction
// use the spacebar to make the sun bigger
// use the mouse to make the sun paler
// click the mouse for rain falling down

//artist statement
//when you take a first look at it, you think that it is beautiful and colorful but when you start interacting with it,
//it starts getting a bit sadder



let sunColor = [255, 255, 0]; // yellow color of the sun
let sunSize = 30;
let raining = false;
let drops = [];
let circlePos = [];

function setup() {
  createCanvas(400, 400);
  circlePos = [mouseX, mouseY];
}

function draw() {
  background(200, 220, 255); // sky blue

  // update sun color based on mouse drag
  let distance = dist(mouseX, mouseY, 60, 60);
  let maxDistance = width / 2;
  let paleness = map(distance, 0, maxDistance, 0, 100);
  let sunPalerColor = lerpColor(color(sunColor), color(255, 255, 255), paleness);

  // draw the sun
  fill(sunPalerColor);
  ellipse(60, 60, sunSize, sunSize);

  // check if spacebar is pressed to increase sun size
  if (keyIsPressed && keyCode === 32) {
    sunSize += 5;
  }

  // draw the house
      // draw roof
    stroke(0);
    fill(100, 100, 0);
    triangle(75, 150, 327, 152, 200, 40);

    // draw house
    fill(0, 255, 0);
    rect(75, 150, 250, 250);

    // draw door
    fill(0, 180, 0);
    rect(150, 250, 75, 150); 

    // draw door knob
    fill(255, 255, 0);
    noStroke();
    ellipse(160, 330, 10, 10);

  // check if mouse is clicked to start/stop the rain
  if (mouseIsPressed && !raining) {
    raining = true;
    drops.push([random(width), -10]);
  } else if (!mouseIsPressed) {
    raining = false;
  }

  // draw the raindrops
  if (raining) {
    fill(0, 100, 255); // blue
    for (let i = 0; i < drops.length; i++) {
      ellipse(drops[i][0], drops[i][1], 5, 10);
      drops[i][1] += 5;
      if (drops[i][1] > height) {
        drops.splice(i, 1);
      }
    }
    drops.push([random(width), -10]);
  }
  circlePos = [mouseX, mouseY];
}
