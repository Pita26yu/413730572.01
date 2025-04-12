function setup() {
  createCanvas(windowWidth, windowHeight);
background(202,240,248);
}

function draw() {//
  background(202,240,248);
  //在視窗的中間畫一個元，圓寬高200
  ellipse(windowWidth/2, windowHeight/2, 200, 200);
  //圓充滿顏色#00509d
  fill(0,80,157);
  //圓邊框顏色#003366
  stroke(0,51,102);
  //圓邊框寬10
  strokeWeight(10);
  //依照上面的圓顏色與框限顏色，從視窗的最左邊連續畫相同的圓到視窗最右邊
  for (let i = 0; i < windowWidth; i+=200) {
    ellipse(i, windowHeight/2, 200, 200);
  }
}
//當視窗大小改變時，重新設定視窗大小
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}