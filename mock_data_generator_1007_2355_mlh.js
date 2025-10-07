// 代码生成时间: 2025-10-07 23:55:44
const d3 = require('d3');

/**
 * Generates a list of mock data objects.
 * @param {number} count - The number of mock data objects to generate.
 * @returns {Array} An array of mock data objects.
 */
function generateMockData(count) {
  if (count < 1) {
    throw new Error('Count must be a positive number.');
  }

  const mockData = [];
  for (let i = 0; i < count; i++) {
    mockData.push({
      id: i + 1,
      name: d3.randomAlpha(5)(), // Random 5-letter name
      age: d3.randomUniform(18, 65)(), // Random age between 18 and 65
      city: d3.randomChoice(['New York', 'Los Angeles', 'Chicago', 'Houston'])() // Random city selection
    });
  }

  return mockData;
}

/**
 * Logs the mock data to the console.
 * @param {Array} data - The array of mock data objects to log.
 */
function logMockData(data) {
  console.log('Generated Mock Data:', data);
}

// Example usage
try {
  const mockData = generateMockData(10);
  logMockData(mockData);
} catch (error) {
  console.error('Error generating mock data:', error.message);
}
