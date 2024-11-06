{
  //   ses type guards to calculate the area based on the shape type

  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (shapes: Shape) => {
    if (shapes.shape === "circle") {
      const result = Math.PI * shapes.radius * shapes.radius;
      console.log(result.toFixed(2));
    } else if (shapes.shape === "rectangle") {
      console.log(shapes.height * shapes.width);
    }
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  //
}
