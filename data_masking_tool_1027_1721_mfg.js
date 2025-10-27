// 代码生成时间: 2025-10-27 17:21:52
// Import D3.js library
const d3 = require('d3');

// Function to mask data
function maskData(data) {
  // Check if data is an array
  if (!Array.isArray(data)) {
    throw new Error('Input data must be an array.');
  }

  // Mask each element in the array
  return data.map(item => {
    // Check if item is an object with properties
    if (typeof item === 'object' && item !== null) {
      return Object.keys(item).reduce((obj, key) => {
        // Mask property values based on type
        obj[key] = maskProperty(item[key]);
        return obj;
      }, {});
    } else {
      // If item is not an object, return it as is
      return item;
    }
  });
}

// Function to mask individual property based on type
function maskProperty(value) {
  if (typeof value === 'string') {
    // Mask string values with asterisks
    return '*'.repeat(value.length);
  } else if (typeof value === 'number') {
    // Mask number values with 'N/A'
    return 'N/A';
  } else {
    // Return other types as is
    return value;
  }
}

// Example usage
const rawData = [
  { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
  { name: 'Jane Smith', age: 28, email: 'jane.smith@example.com' }
];

try {
  const maskedData = maskData(rawData);
  console.log('Masked Data:', maskedData);
} catch (error) {
  console.error('Error:', error.message);
}
