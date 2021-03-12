var ColorHelper = (function () {
  function ColorHelper() {}
  ColorHelper.getColorVector = function (c, p) {
    return p.createVector(p.red(c), p.green(c), p.blue(c));
  };
  ColorHelper.rainbowColorBase = function (p) {
    return [
      p.color("red"),
      p.color("orange"),
      p.color("yellow"),
      p.color("green"),
      p.color(38, 58, 150),
      p.color("indigo"),
      p.color("violet"),
    ];
  };
  ColorHelper.getColorsArray = function (p, total, baseColorArray) {
    var _this = this;
    if (baseColorArray === void 0) {
      baseColorArray = null;
    }
    if (baseColorArray == null) {
      baseColorArray = ColorHelper.rainbowColorBase(p);
    }
    var rainbowColors = baseColorArray.map(function (x) {
      return _this.getColorVector(x, p);
    });
    var colours = new Array();
    for (var i = 0; i < total; i++) {
      var colorPosition = i / total;
      var scaledColorPosition = colorPosition * (rainbowColors.length - 1);
      var colorIndex = Math.floor(scaledColorPosition);
      var colorPercentage = scaledColorPosition - colorIndex;
      var nameColor = this.getColorByPercentage(
        rainbowColors[colorIndex],
        rainbowColors[colorIndex + 1],
        colorPercentage
      );
      colours.push(p.color(nameColor.x, nameColor.y, nameColor.z));
    }
    return colours;
  };
  ColorHelper.getColorByPercentage = function (
    firstColor,
    secondColor,
    percentage
  ) {
    var firstColorCopy = firstColor.copy();
    var secondColorCopy = secondColor.copy();
    var deltaColor = secondColorCopy.sub(firstColorCopy);
    var scaledDeltaColor = deltaColor.mult(percentage);
    return firstColorCopy.add(scaledDeltaColor);
  };
  return ColorHelper;
})();
var MarchingSquaresHelper = (function () {
  function MarchingSquaresHelper() {}
  MarchingSquaresHelper.drawForCombination = function (
    p,
    x,
    y,
    bitmask,
    PARAMS
  ) {
    var drawMesh = false;
    var drawLine = true;
    var midpoint = 0.5;
    var xPos = (x + 1) * PARAMS.gridSize;
    var yPos = (y + 1) * PARAMS.gridSize;
    var xZero = x * PARAMS.gridSize;
    var yZero = y * PARAMS.gridSize;
    var xMidpoint = xPos - PARAMS.gridSize / 2;
    var yMidpoint = yPos - PARAMS.gridSize / 2;
    if (bitmask == "0000") {
    } else if (bitmask == "0001") {
      if (drawLine) p.line(xZero, yMidpoint, xMidpoint, yZero);
      if (drawMesh) {
        p.beginShape();
        p.vertex(0, midpoint);
        p.vertex(midpoint, 0);
        p.vertex(0, 0);
        p.endShape();
      }
    } else if (bitmask == "0010") {
      if (drawLine) p.line(xPos - PARAMS.gridSize / 2, yZero, xPos, yMidpoint);
      if (drawMesh) {
        p.beginShape();
        p.vertex(1 - midpoint, 0);
        p.vertex(1, midpoint);
        p.vertex(1, 0);
        p.endShape();
      }
    } else if (bitmask == "0011") {
      if (drawLine) p.line(xZero, yMidpoint, xPos, yMidpoint);
      if (drawMesh) {
        p.beginShape();
        p.vertex(0, midpoint);
        p.vertex(1, midpoint);
        p.vertex(1, 0);
        p.vertex(0, 0);
        p.endShape();
      }
    } else if (bitmask == "0100") {
      if (drawLine)
        p.line(
          xPos - PARAMS.gridSize / 2,
          yPos,
          xPos,
          yPos - PARAMS.gridSize / 2
        );
      if (drawMesh) {
        p.beginShape();
        p.vertex(1 - midpoint, 1);
        p.vertex(1, 1 - midpoint);
        p.vertex(1, 1);
        p.endShape();
      }
    } else if (bitmask == "0101") {
      MarchingSquaresHelper.drawForCombination(p, x, y, "0001", PARAMS);
      MarchingSquaresHelper.drawForCombination(p, x, y, "0100", PARAMS);
    } else if (bitmask == "0110") {
      if (drawLine) p.line(xMidpoint, yZero, xMidpoint, yPos);
      if (drawMesh) {
        p.beginShape();
        p.vertex(midpoint, 0);
        p.vertex(midpoint, 1);
        p.vertex(1, 1);
        p.vertex(1, 0);
        p.endShape();
      }
    } else if (bitmask == "0111") {
      if (drawLine) p.line(xZero, yPos - PARAMS.gridSize / 2, xMidpoint, yPos);
      if (drawMesh) {
        p.beginShape();
        p.vertex(0, 1 - midpoint);
        p.vertex(midpoint, 1);
        p.vertex(1, 1);
        p.vertex(1, 0);
        p.vertex(0, 0);
        p.endShape();
      }
    } else if (bitmask == "1000") {
      if (drawLine) p.line(xZero, yPos - PARAMS.gridSize / 2, xMidpoint, yPos);
      if (drawMesh) {
        p.beginShape();
        p.vertex(0, 1 - midpoint);
        p.vertex(midpoint, 1);
        p.vertex(0, 1);
        y;
        p.endShape();
      }
    } else if (bitmask == "1001") {
      if (drawLine)
        p.line(
          xPos - PARAMS.gridSize / 2,
          yZero,
          xPos - PARAMS.gridSize / 2,
          yPos
        );
      if (drawMesh) {
        p.beginShape();
        p.vertex(1 - midpoint, 0);
        p.vertex(1 - midpoint, 1);
        p.vertex(0, 1);
        p.vertex(0, 0);
        p.endShape();
      }
    } else if (bitmask == "1010") {
      MarchingSquaresHelper.drawForCombination(p, x, y, "0010", PARAMS);
      MarchingSquaresHelper.drawForCombination(p, x, y, "1000", PARAMS);
    } else if (bitmask == "1011") {
      if (drawLine)
        p.line(
          xPos - PARAMS.gridSize / 2,
          yPos,
          xPos,
          yPos - PARAMS.gridSize / 2
        );
      if (drawMesh) {
        p.beginShape();
        p.vertex(1 - midpoint, 1);
        p.vertex(1, 1 - midpoint);
        p.vertex(1, 0);
        p.vertex(0, 0);
        p.vertex(0, 1);
        p.endShape();
      }
    } else if (bitmask == "1100") {
      if (drawLine)
        p.line(
          xZero,
          yPos - PARAMS.gridSize / 2,
          xPos,
          yPos - PARAMS.gridSize / 2
        );
      if (drawMesh) {
        p.beginShape();
        p.vertex(0, 1 - midpoint);
        p.vertex(1, 1 - midpoint);
        p.vertex(1, 1);
        p.vertex(0, 1);
        p.endShape();
      }
    } else if (bitmask == "1101") {
      if (drawLine) p.line(xMidpoint, yZero, xPos, yMidpoint);
      if (drawMesh) {
        p.beginShape();
        p.vertex(midpoint, 0);
        p.vertex(1, midpoint);
        p.vertex(1, 1);
        p.vertex(0, 1);
        p.vertex(0, 0);
        p.endShape();
      }
    } else if (bitmask == "1110") {
      if (drawLine) p.line(xMidpoint, yZero, xZero, yMidpoint);
      if (drawMesh) {
        p.beginShape();
        p.vertex(midpoint, 0);
        p.vertex(0, midpoint);
        p.vertex(0, 1);
        p.vertex(1, 1);
        p.vertex(1, 0);
        p.endShape();
      }
    } else if (bitmask == "1111") {
      if (drawMesh) {
        p.beginShape();
        p.vertex(0, 0);
        p.vertex(0, 1);
        p.vertex(1, 1);
        p.vertex(1, 0);
        p.endShape();
      }
    } else {
      console.log("bad number" + bitmask);
    }
  };
  MarchingSquaresHelper.getCurrentPointArray = function (p, points, PARAMS) {
    var res = [];
    for (var y = 0; y < p.height / PARAMS.gridSize; y++) {
      res[y] = [];
      for (var x = 0; x < p.width / PARAMS.gridSize; x++) {
        res[y][x] = 0;
      }
    }
    var maxGridX = p.width / PARAMS.gridSize;
    var maxGridY = p.height / PARAMS.gridSize;
    for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
      var point = points_1[_i];
      var xmin = Math.max(0, p.floor((point.x - point.r) / PARAMS.gridSize));
      var ymin = Math.max(0, p.floor((point.y - point.r) / PARAMS.gridSize));
      var xmax = Math.min(
        maxGridX - 1,
        p.ceil((point.x + point.r) / PARAMS.gridSize)
      );
      var ymax = Math.min(
        maxGridY - 1,
        p.ceil((point.y + point.r) / PARAMS.gridSize)
      );
      for (var y = ymin; y <= ymax; y++) {
        for (var x = xmin; x <= xmax; x++) {
          var insidePoint = point.inside(
            x * PARAMS.gridSize,
            y * PARAMS.gridSize
          );
          if (insidePoint >= 1) {
            try {
              res[y][x] = Math.max(insidePoint, res[y][x]);
            } catch (ex) {
              console.log(y, x);
            }
          }
        }
      }
    }
    return res;
  };
  MarchingSquaresHelper.drawSquares = function (p, pointsArr, PARAMS) {
    for (var y = 1; y < pointsArr.length - 1; y++) {
      var point = pointsArr[y];
      for (var x = 1; x < point.length - 1; x++) {
        var p1 = pointsArr[y][x] > 0 ? "1" : "0";
        var p2 = pointsArr[y][x + 1] > 0 ? "1" : "0";
        var p4 = pointsArr[y + 1][x + 1] > 0 ? "1" : "0";
        var p8 = pointsArr[y + 1][x] > 0 ? "1" : "0";
        p.stroke(PARAMS.colorsArray[p.floor(x * PARAMS.gridSize)]);
        MarchingSquaresHelper.drawForCombination(
          p,
          x,
          y,
          p8 + p4 + p2 + p1,
          PARAMS
        );
      }
    }
  };
  return MarchingSquaresHelper;
})();
var Point = (function () {
  function Point(p, pointX, pointY, vx, vy, radius, PARAMS) {
    this.p = p;
    this.pointX = pointX;
    this.pointY = pointY;
    this.vx = vx;
    this.vy = vy;
    this.radius = radius;
    this.PARAMS = PARAMS;
  }
  Point.prototype.inside = function (x, y) {
    var res =
      (this.r * this.r) /
      ((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y));
    return res;
  };
  Point.prototype.move = function () {
    this.pointX += this.vx / this.p.width;
    this.pointY += this.vy / this.p.height;
    if (this.x - this.r < 0 || this.x + this.r > this.p.width) {
      this.vx *= -1;
    }
    if (this.y - this.r < 0 || this.y + this.r > this.p.height) {
      this.vy *= -1;
    }
  };
  Object.defineProperty(Point.prototype, "r", {
    get: function () {
      return this.radius * this.PARAMS.maxPointSize;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(Point.prototype, "x", {
    get: function () {
      return this.pointX * this.p.width;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(Point.prototype, "y", {
    get: function () {
      return this.pointY * this.p.height;
    },
    enumerable: true,
    configurable: true,
  });
  return Point;
})();

let PARAMS;
let points;
let sliderGridSize;
var sketch = function (p) {
  PARAMS = {
    gridSize: 15,
    maxPointSize: 10,
    numberOfpoints: 100,
    colorsArray: [],
  };
  points;
  sliderGridSize;
  p.preload = function () {};
  p.setup = function () {
    var w = p._userNode.offsetWidth;
    var h = p._userNode.offsetHeight;
    p.createCanvas(w, h);
    points = [];
    for (var i = 0; i < PARAMS.numberOfpoints; i++) {
      var x = Math.random();
      var y = Math.random();
      var velocityX = Math.random() * 2 - 1;
      var velocityY = Math.random() * 2 - 1;
      var size = Math.random();
      points.push(new Point(p, x, y, velocityX, velocityY, size, PARAMS));
    }
    sliderGridSize = p.createSlider(2, 30, PARAMS.gridSize, 2);
    sliderGridSize.position(10, 10);

    setParams();
  };
  p.windowResized = function () {
    var w = p._userNode.offsetWidth;
    var h = p._userNode.offsetHeight;
    p.createCanvas(w, h);
    setParams();
  };
  p.draw = function () {
    p.background(1);
    PARAMS.gridSize = sliderGridSize.value();
    p.strokeWeight(2);
    var arr = MarchingSquaresHelper.getCurrentPointArray(p, points, PARAMS);
    MarchingSquaresHelper.drawSquares(p, arr, PARAMS);
    for (var _i = 0, points_2 = points; _i < points_2.length; _i++) {
      var p_1 = points_2[_i];
      p_1.move();
    }
    p.textSize(15);
    p.noStroke();
    p.fill(255);
    p.text("fps: " + p.frameRate(), 10, 50);
  };
  function setParams() {
    PARAMS.colorsArray = ColorHelper.getColorsArray(p, p.floor(p.width));
    PARAMS.maxPointSize = p.width / 15;
  }
};

export default sketch;
