// 代码生成时间: 2025-10-08 02:09:21
 * It includes error handling and follows best practices for maintainability and scalability.
 */

// Importing D3.js for DOM manipulation and data visualization
const d3 = require('d3');

// Function to calculate tax based on income
function calculateTax(income) {
  if (typeof income !== 'number' || isNaN(income)) {
    throw new Error('Invalid income value. Income must be a number.');
  }

  // Define tax brackets
  const taxBrackets = [
    { limit: 9375, rate: 0.10 },
    { limit: 38700, rate: 0.15 },
    { limit: 82500, rate: 0.20 },
    { limit: 160300, rate: 0.25 },
    { limit: Infinity, rate: 0.30 }
  ];

  // Calculate tax
  let tax = 0;
  for (let i = 0; i < taxBrackets.length; i++) {
    const bracket = taxBrackets[i];
    if (income > bracket.limit) {
      tax += (bracket.limit - (i === 0 ? 0 : taxBrackets[i - 1].limit)) * bracket.rate;
    } else {
      tax += (income - (i === 0 ? 0 : taxBrackets[i - 1].limit)) * bracket.rate;
      break;
    }
  }

  return tax;
}

// Function to display tax calculation results
function displayTaxResults(income) {
  try {
    const tax = calculateTax(income);
    d3.select('#result').text(`Tax on income of $${income} is $${tax.toFixed(2)}`);
  } catch (error) {
    d3.select('#result').text(error.message);
  }
}

// Function to handle user input and calculate tax
function handleUserInput() {
  d3.select('#calculate').on('click', function() {
    const income = d3.select('#income').property('value');
    displayTaxResults(income);
  });
}

// Initialize the tax calculator
function initTaxCalculator() {
  d3.select('#income').on('input', function() {
    d3.select('#income')
      .attr('value', d3.select('#income').property('value').replace(/[^\d.]/g, ''));
  });
  handleUserInput();
}

// Run the tax calculator
initTaxCalculator();