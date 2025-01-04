//complete this code
class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }

  getArea(): number {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side: number) {
    // Call the Rectangle constructor with both width and height as side
    super(side, side);
  }

  getPerimeter(): number {
    return 4 * this.width; // Since width and height are the same for a square
  }
}

// Example usage:
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28
