const { Circle, Triangle, Square } = require('./shapes');

describe('Shape Classes', () => {
  test('Triangle render() method returns correct SVG string after setting color', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  test('Circle render() method returns correct SVG string after setting color', () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });

  test('Square render() method returns correct SVG string after setting color', () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual('<rect x="70" y="50" width="160" height="160" fill="green" />');
  });
});
