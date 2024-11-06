"use strict";
{
    const calculateShapeArea = (shapes) => {
        if (shapes.shape === "circle") {
            const result = Math.PI * shapes.radius * shapes.radius;
            console.log(result.toFixed(2));
        }
        else if (shapes.shape === "rectangle") {
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
