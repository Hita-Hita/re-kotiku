var canvas;
let mainTexture;
let img;

function preload() {
    img = loadImage("../images/key-visual.png");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent("P5Canvas");

    mainTexture = createGraphics(width, height);
    mainTexture.background(255);
}

function draw() {
    if (frameCount % 300 == 0) {
        const scl = random(0.05, 0.2)
        mainTexture.imageMode(CENTER);
        mainTexture.image(img, random(width), random(height), img.width * scl, img.height * scl);
    }

    background(245);

    ambientLight(200);
    pointLight(100, 100, 100, 0, 0, 2000);

    specularMaterial(100);
    texture(mainTexture);
    push();
    noStroke();
    rotateY(frameCount / 500);
    sphere(min(width, height) * 0.35);
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, WEBGL);
}

