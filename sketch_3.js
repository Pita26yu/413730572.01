function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB); // Set color mode to HSB
    background(202, 240, 248);
}

function draw() {
    // No background() call to leave a trail

    // Calculate hue based on mouse position
    let hue = map(mouseX, 0, windowWidth, 0, 360);

    // Draw a single circle with a diameter of 100 that changes color based on mouse position
    fill(hue, 100, 100); // HSB color for the circle
    noStroke();
    ellipse(mouseX, mouseY, 100, 100);
}

//當視窗大小改變時，重新設定視窗大小
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}