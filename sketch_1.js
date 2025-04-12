function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB); // Set color mode to HSB
    background(202, 240, 248);
}

function draw() {
    background(202, 240, 248);
    strokeWeight(10);

    // Calculate number of shapes and size based on mouse position
    let numShapes = map(mouseX, 0, windowWidth, 50, 5);
    let size = map(mouseX, 0, windowWidth, 100, 500);

    let spacing = windowWidth / numShapes;

    for (let i = 0; i < numShapes; i++) {
        for (let j = 0; j < numShapes; j++) {
            let x = spacing * i + spacing / 2;
            let y = spacing * j + spacing / 2;

            // Draw rectangle
            rectMode(CENTER);
            fill(45, 100, 100); // HSB color for rectangle
            stroke(210, 100, 40); // HSB color for stroke
            strokeWeight(10);
            rect(x, y, size, size);

            // Draw ellipse
            fill(210, 100, 60); // HSB color for ellipse
            stroke(210, 100, 40); // HSB color for stroke
            strokeWeight(10);
            ellipse(x, y, size, size);
        }
    }
}

//當視窗大小改變時，重新設定視窗大小
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}