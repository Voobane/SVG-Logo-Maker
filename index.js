const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the text to be inside the shape :',
    validate: (input) => input.length <= 3 || 'You can enter up to three characters only.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword (or a hexadecimal number) for the text:'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword (or a hexadecimal number) for the shape:'
  }
]).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;
  let shapeInstance;

  switch (shape) {
    case 'circle':
      shapeInstance = new Circle();
      break;
    case 'triangle':
      shapeInstance = new Triangle();
      break;
    case 'square':
      shapeInstance = new Square();
      break;
  }

  shapeInstance.setColor(shapeColor);

  const svgContent = `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>
  `;

  fs.writeFileSync('logo.svg', svgContent.trim());
  console.log('Generated logo.svg');
});
