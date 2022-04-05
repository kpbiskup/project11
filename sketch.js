function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
}

function draw() { 

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 6; j++) {
        let x = 0 + i * 2; 
        let y = 0 + j * 2; 
      
  let locX = mouseX - height / 1;
  let locY = mouseY - width / 1;

  ambientLight(6);
  directionalLight(250, 0.15, 0.15, 0.15, 0.15, 0.15);
  pointLight(0, 4, 250, locX, locY, 250);

  push();
  translate(-width / 29, 0, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  specularMaterial(255);
  box(180, 180, 180);
  pop();

    }
  }
}

