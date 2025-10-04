// 代码生成时间: 2025-10-05 01:32:27
// Importing D3.js library
const d3 = require('d3');

/**
 * Initialize the level editor
 */
function initLevelEditor() {
  // Set up the SVG container for the editor
  const svg = d3.select('body').append('svg')
    .attr('width', '100%')
    .attr('height', '500px')
    .style('border', '1px solid black');

  // Add a group for the grid lines
  svg.append('g').attr('id', 'grid-lines');

  // Add a group for the level elements
  svg.append('g').attr('id', 'level-elements');
}

/**
 * Draw the grid lines on the SVG
 * @param {number} rows - The number of rows in the grid
 * @param {number} cols - The number of columns in the grid
 */
function drawGrid(rows, cols) {
  const svg = d3.select('svg');
  const gridSize = 20; // Size of each grid square

  // Clear previous grid lines
  d3.select('#grid-lines').selectAll('*').remove();

  // Draw horizontal grid lines
  for (let i = 0; i <= rows; i++) {
    svg.select('#grid-lines').append('line')
      .attr('x1', 0).attr('y1', i * gridSize)
      .attr('x2', cols * gridSize, 'y2', i * gridSize)
      .attr('stroke', 'gray').attr('stroke-width', 1);
  }

  // Draw vertical grid lines
  for (let i = 0; i <= cols; i++) {
    svg.select('#grid-lines').append('line')
      .attr('x1', i * gridSize).attr('y1', 0)
      .attr('x2', i * gridSize, 'y2', rows * gridSize)
      .attr('stroke', 'gray').attr('stroke-width', 1);
  }
}

/**
 * Add a level element at a given position on the grid
 * @param {number} row - The row position of the element
 * @param {number} col - The column position of the element
 * @param {string} type - The type of the element (e.g., 'block', 'enemy')
 */
function addLevelElement(row, col, type) {
  const svg = d3.select('svg');
  const gridSize = 20; // Size of each grid square

  // Validate input
  if (row < 0 || col < 0 || row >= 20 || col >= 20) {
    console.error('Invalid position for level element');
    return;
  }

  // Create and append the element
  const element = svg.select('#level-elements').append('rect')
    .attr('x', col * gridSize).attr('y', row * gridSize)
    .attr('width', gridSize).attr('height', gridSize)
    .attr('fill', 'white');

  // Style the element based on its type
  switch (type) {
    case 'block':
      element.attr('fill', 'blue');
      break;
    case 'enemy':
      element.attr('fill', 'red');
      break;
    default:
      console.error(`Unsupported element type: ${type}`);
  }
}

// Call the initialization function
initLevelEditor();

// Example usage: Draw a 10x10 grid and add a block and an enemy
drawGrid(10, 10);
addLevelElement(1, 1, 'block');
addLevelElement(2, 2, 'enemy');