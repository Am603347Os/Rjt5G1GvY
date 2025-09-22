// 代码生成时间: 2025-09-23 04:44:12
// Import the D3 library
const d3 = require('d3-fetch');

// Function to validate URL
function validateURL(url) {
  // Check if the URL is a string
  if (typeof url !== 'string') {
    throw new Error('URL must be a string');
  }

  // Remove any leading/trailing whitespace
  url = url.trim();

  // Use D3 to fetch the URL
  return d3.text(url)
    .then(() => {
      // If the URL is accessible, return true
      return true;
    })
    .catch(() => {
      // If the URL is not accessible, return false
      return false;
    });
}

// Example usage
validateURL('https://example.com').then(isValid => {
  console.log(`The URL is ${isValid ? 'valid' : 'invalid'}.`);
}).catch(error => {
  console.error('Error validating URL:', error.message);
});
