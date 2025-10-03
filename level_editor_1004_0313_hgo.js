// 代码生成时间: 2025-10-04 03:13:23
// Importing necessary D3.js library
const d3 = require('d3');

// Defining the editor module
const LevelEditor = (() => {

  // Editor configuration
  const config = {
    width: 800,
    height: 600,
    gridSize: 50,
    levelData: []
  };

  // Private method to initialize the SVG canvas
  function initCanvas() {
    const svg = d3.select('#level-editor')
      .append('svg')
        .attr('width', config.width)
        .attr('height', config.height);
    return svg;
  }

  // Public method to add a level element
  function addElement(x, y, type) {
    if (!type) {
      console.error('Element type is required.');
      return;
    }

    const svg = initCanvas();
    const element = svg.append('rect')
      .attr('x', x * config.gridSize)
      .attr('y', y * config.gridSize)
      .attr('width', config.gridSize)
      .attr('height', config.gridSize)
      .attr('fill', 'red')  // Default fill color for visualization
      .call(d3.drag()
        .on('start', function () {
          d3.select(this).raise().classed('active', true);
        })
        .on('drag', function (event) {
          const [newX, newY] = d3.pointer(event, this);
          d3.select(this)
            .attr('x', newX - (config.gridSize / 2))
            .attr('y', newY - (config.gridSize / 2));
        })
        .on('end', function () {
          d3.select(this).classed('active', false);
          config.levelData.push({
            x: parseInt(d3.select(this).attr('x') / config.gridSize),
            y: parseInt(d3.select(this).attr('y') / config.gridSize),
            type: type
          });
        }));
  }

  // Public method to clear the level
  function clearLevel() {
    d3.select('#level-editor svg').remove();
    config.levelData = [];
  }

  // Public method to export the level data
  function exportLevel() {
    return config.levelData;
  }

  // Public API
  return {
    addElement: addElement,
    clearLevel: clearLevel,
    exportLevel: exportLevel
  };
})();

// Example usage:
// Add a block element at position (2, 3)
LevelEditor.addElement(2, 3, 'block');
// Clear the level
LevelEditor.clearLevel();
// Export the level data
console.log(LevelEditor.exportLevel());