class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add = () => this.x + this.y;
  subtract = () => this.x - this.y;
  divide = () => {
    if (this.y === 0) {
      throw new Error('result is infinity');
    }
    return this.x / this.y;
  };
  multiply = () => this.x * this.y;
}

module.exports = Calculator;
