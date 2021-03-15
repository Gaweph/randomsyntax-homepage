var ColorHelper = (function () {
    function ColorHelper() {}
    ColorHelper.getColorVector = function (p, c) {
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
        return _this.getColorVector(p, x);
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
  var sketch = function (p) {
    var spacing = 10;
    p.setup = function () {
      var div = p.canvas.parentElement;
      var w = div.offsetWidth;
      var h = div.offsetHeight;
      p.createCanvas(w, h);
    };
    var x = 0;
    var y = 0;
    p.draw = function () {
      p.stroke(3);
      p.stroke(p.color("hsba(160, 100%, 50%, 0.5)"));
      if (p.random(1) > 0.5) {
        p.line(x, y, x + spacing, y + spacing);
      } else {
        p.line(x, y + spacing, x + spacing, y);
      }
      x += spacing;
      if (x > p.width) {
        x = 0;
        y += spacing;
      }
      if (y > p.height) {
        p.background(255);
        x = 0;
        y = 0;
      }
    };
    p.resizeCanvas = function () {
      var div = p.canvas.parentElement;
      var w = div.offsetWidth;
      var h = div.offsetHeight;
      p.resizeCanvas(w, h);
    };
  };
  //# sourceMappingURL=build.js.map
  
  export default sketch;