//complete this code
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate and return the area of the rectangle
  getArea() {
    return this._width * this._height;
  }
}

// Square subclass that extends Rectangle
class Square extends Rectangle {
  constructor(side) {
    // Call the Rectangle constructor with equal width and height
    super(side, side);
  }
  
  // Optional: Method to calculate and return the perimeter of the square
  getPerimeter() {
    return 4 * this.width; // Since width and height are the same for a square
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;