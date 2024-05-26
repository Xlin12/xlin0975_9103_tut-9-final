let circles = [];


function setup() {
    createCanvas(530, 780);
    colorMode(HSB, 360, 100, 100, 100);


    noFill();
    stroke(255);
    strokeWeight(3);


    imageMode(CENTER);
    pixelDensity(2);


    // Initialize circles with specified positions, sizes, angles, and proportions
    //Circles on left sides
    circles.push({ x: 60, y: 0, diameter: 50, angle: PI / 1.7, proportion: 0.4 });
    circles.push({ x: 50, y: 55, diameter: 60, angle: -PI / 2.2, proportion: 0.45 });
    circles.push({ x: 55, y: 103, diameter: 33, angle: PI / 2, proportion: 0.5 });
    circles.push({ x: 87, y: 120, diameter: 40, angle: PI, proportion: 0.5 });
    circles.push({ x: 116, y: 137, diameter: 30, angle: PI / 2, proportion: 0.5 });
    circles.push({ x: 109, y: 181, diameter: 55, angle: -PI / 2.5, proportion: 0.4 });
    circles.push({ x: 122, y: 245, diameter: 70, angle: PI / 1.83, proportion: 0.45 });
    //Circles in the middle horizontally
    circles.push({ x: 160, y: 280, diameter: 40, angle: PI, proportion: 0.5 });
    circles.push({ x: 200, y: 287, diameter: 40, angle: -PI / 10, proportion: 0.6 });
    circles.push({ x: 237, y: 278, diameter: 30, angle: PI / 1.05, proportion: 0.55 });
    circles.push({ x: 278, y: 287, diameter: 50, angle: -PI / 10, proportion: 0.6 });

    circles.push({ x: 325, y: 278, diameter: 40, angle: PI / 20, proportion: 0.45 });
    circles.push({ x: 371, y: 273, diameter: 48, angle: PI / 1.11, proportion: 0.6 });
    //Circles in the middle upper ones
    circles.push({ x: 253, y: 253, diameter: 30, angle: -PI / 2, proportion: 0.5 });
    circles.push({ x: 253, y: 207, diameter: 55, angle: PI / 2, proportion: 0.5 });
    circles.push({ x: 215, y: 178, diameter: 45, angle: PI, proportion: 0.5 });
    circles.push({ x: 175, y: 181, diameter: 30, angle: -PI / 20, proportion: 0.55 });
    circles.push({ x: 295, y: 181, diameter: 45, angle: PI / 200, proportion: 0.5 });
    circles.push({ x: 195, y: 140, diameter: 40, angle: PI / 1.68, proportion: 0.4 });
    circles.push({ x: 322, y: 150, diameter: 37, angle: PI / 2.4, proportion: 0.58 });
    //Circles on right sides
    circles.push({ x: 390, y: 240, diameter: 50, angle: -PI / 2.5, proportion: 0.4 });
    circles.push({ x: 396, y: 192, diameter: 40, angle: PI / 2, proportion: 0.5 });
    circles.push({ x: 396, y: 140, diameter: 60, angle: -PI / 2, proportion: 0.5 });
    circles.push({ x: 388, y: 95, diameter: 30, angle: PI / 3.4, proportion: 0.7 });
    circles.push({ x: 413, y: 90, diameter: 20, angle: PI / 8, proportion: 0.5 });
    circles.push({ x: 450, y: 100, diameter: 50, angle: -PI / 1.08, proportion: 0.55 });
    circles.push({ x: 486, y: 120, diameter: 28, angle: PI / 8, proportion: 0.5 });
    circles.push({ x: 500, y: 100, diameter: 20, angle: PI / 1.8, proportion: 0.45 });
    //Circles on downbelow vertical
    circles.push({ x: 264, y: 340, diameter: 70, angle: PI / 1.67, proportion: 0.4 });
    circles.push({ x: 248, y: 417, diameter: 81, angle: -PI / 2.25, proportion: 0.45 });
    circles.push({ x: 250, y: 483, diameter: 45, angle: PI / 2.22, proportion: 0.55 });
    circles.push({ x: 261, y: 521, diameter: 30, angle: PI / 1.42, proportion: 0.3 });
    circles.push({ x: 240, y: 557, diameter: 50, angle: -PI / 3.3, proportion: 0.3 });
    circles.push({ x: 205.5, y: 577, diameter: 30, angle: -PI / 0.95, proportion: 0.55 });
    circles.push({ x: 164, y: 580, diameter: 50, angle: PI / 200, proportion: 0.5 });
    circles.push({ x: 283, y: 575, diameter: 40, angle: PI / 10, proportion: 0.4 });
    circles.push({ x: 332, y: 580, diameter: 60, angle: PI / 1, proportion: 0.5 });

    // Add more circles based on the image
    // For example, you might need to add several more circles to match the image
    // This is just a starting point
}


function draw() {
    background(0); // Set the background to black

    //
    // Define fill color and stroke color for the rectangles
    let rectFillColor1 = color(142, 66, 70); // Color for the first rectangle
    let rectStrokeColor1 = color(0, 0, 0);   // Stroke color for the first rectangle

    let rectFillColor2 = color(60, 100, 100); // Example: blue color in HSB for the second rectangle
    let rectStrokeColor2 = color(0, 0, 0); // Example: yellow color in HSB for the second rectangle

    let rectFillColor3 = color(0, 100, 100, 100);

    let rectFillColor4 = color(120, 100, 100, 100);

    // Draw the first rectangle
    fill(rectFillColor1);
    stroke(rectStrokeColor1);
    rect(58, 595, 433, 90);
    rect()

    // Draw the second rectangle
    fill(rectFillColor2);
    stroke(rectStrokeColor2);
    rect(82, 580, 325, 90);

    // Draw the third rectangle
    fill(rectFillColor3);
    noStroke();
    rect(138, 582.5, 50, 83);

    // Draw the fourth rectangle
    fill(rectFillColor4);
    noStroke();
    rect(193, 582.5, 62, 83);

    // Draw the fifth rectangle
    fill(rectFillColor4);
    noStroke();
    rect(303, 582.5, 60, 85);

    // Draw the sixth rectangle
    fill(rectFillColor1);
    stroke(rectStrokeColor1);
    rect(0, 595, 58, 90);

    // Draw the seventh rectangle
    fill(rectFillColor1);
    stroke(rectStrokeColor1);
    rect(479, 595, 58, 90);


    // Draw a semi-circle on top of the second rectangle
    let semiCircleFillColor = color(60, 100, 100); // Example: yellow color in HSB
    let semiCircleFillColor2 = color(120, 100, 100, 100);
    let semiCircleFillColor3 = color(0, 100, 100, 100);

    //First semicircle
    fill(semiCircleFillColor);
    noStroke();
    arc(163, 667, 55, 40, PI, 0, CHORD);

    //Second semicircle
    fill(semiCircleFillColor2);
    noStroke();
    arc(110.5, 668, 52, 55, PI, 0, CHORD);

    //Third semicircle
    fill(semiCircleFillColor);
    noStroke();
    arc(224, 667, 63, 85, PI, 0, CHORD);

    //Fourth semicircle
    fill(semiCircleFillColor3);
    noStroke();
    arc(223.5, 667, 57, 78, PI, 0, CHORD);

    //Fifth semicircle
    fill(semiCircleFillColor3);
    noStroke();
    arc(278, 667, 48, 58, PI, 0, CHORD);

    //sixth semicircle
    fill(semiCircleFillColor);
    noStroke();
    arc(333, 667, 60, 20, PI, 0, CHORD);

    //Seventh semicircle
    fill(semiCircleFillColor2);
    noStroke();
    arc(384, 668, 41, 55, PI, 0, CHORD);

    // Draw all circles with specified proportions
    for (let circle of circles) {
        circleNeon(circle.x, circle.y, circle.diameter, color(120, 100, 100, 100), color(0, 100, 100, 100), circle.angle, circle.proportion);
    }
}


function circleNeon(x, y, diameter, color1, color2, angle, proportion) {
    let greenAngle = proportion * PI * 2;
    let redAngle = (1 - proportion) * PI * 2;


    // Apply glow effect for the first part (green)
    glow(color1, 400);
    drawPartialCircle(x, y, diameter, color1, angle, greenAngle);


    // Apply glow effect for the second part (red)
    glow(color2, 400);
    drawPartialCircle(x, y, diameter, color2, angle + greenAngle, redAngle);


    // Apply additional layers of glow effect
    glow(color1, 80);
    drawPartialCircle(x, y, diameter, color1, angle, greenAngle);
    glow(color2, 80);
    drawPartialCircle(x, y, diameter, color2, angle + greenAngle, redAngle);


    glow(color1, 12);
    drawPartialCircle(x, y, diameter, color1, angle, greenAngle);
    glow(color2, 12);
    drawPartialCircle(x, y, diameter, color2, angle + greenAngle, redAngle);


    // Draw yellow line with glow
    glowLine(x, y, diameter, angle, greenAngle, color(60, 100, 100), [80, 40, 12]);
}


function drawPartialCircle(x, y, diameter, col, startAngle, arcLength) {
    fill(col);
    noStroke();
    beginShape();
    for (let a = startAngle; a < startAngle + arcLength; a += 0.01) {
        let sx = x + cos(a) * diameter / 2;
        let sy = y + sin(a) * diameter / 2;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}


function drawLineSegment(x, y, diameter, angle, arcLength) {
    stroke(60, 100, 100); // Yellow color in HSB
    strokeWeight(4); // Line thickness
    let reduction = 1;
    let x1 = x + cos(angle) * (diameter / 2 - reduction);
    let y1 = y + sin(angle) * (diameter / 2 - reduction);
    let x2 = x + cos(angle + arcLength) * (diameter / 2 - reduction);
    let y2 = y + sin(angle + arcLength) * (diameter / 2 - reduction);
    line(x1, y1, x2, y2);
}


function glowLine(x, y, diameter, angle, arcLength, col, blurs) {
    for (let blur of blurs) {
        glow(col, blur);
        drawLineSegment(x, y, diameter, angle, arcLength);
    }
}


function glow(glowColor, blurriness) {
    drawingContext.shadowBlur = blurriness;
    drawingContext.shadowColor = glowColor;
}



