//complete this code
class Rectangle {
  constructor(width, height) {
    this._width = width;  // Private variable for width
    this._height = height;  // Private variable for height
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area of the rectangle
  getArea() {
    return this._width * this._height;
  }
}

// Square class extends Rectangle
class Square extends Rectangle {
  constructor(side) {
    super(side, side);  // A square is a rectangle with equal width and height
  }

  // Method to calculate perimeter of the square
  getPerimeter() {
    return 4 * this.width;  // Since all sides are equal, we can use width or height
  }
}
