// 代码生成时间: 2025-10-12 15:35:43
// Constants for the product data and search threshold
const PRODUCTS = [
    { id: 1, name: 'Apple', price: 1.20 },
    { id: 2, name: 'Banana', price: 0.99 },
    { id: 3, name: 'Carrot', price: 0.50 },
    // Add more products here
];

const SEARCH_THRESHOLD = 3; // Minimum number of characters to start searching

// Function to initiate the search engine
function initSearchEngine() {
    // Create a D3 selection for the search input and add an event listener
    d3.select('#search-input')
        .on('input', handleSearch);
}

// Function to handle search input events
function handleSearch() {
    // Get the search query from the input
    const query = d3.select('#search-input').node().value;
    
    // Check if the query is long enough
    if (query.length < SEARCH_THRESHOLD) {
        clearResults();
        return;
    }
    
    // Filter the products based on the query
    const results = PRODUCTS.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
    );
    
    // Display the search results
    displayResults(results);
}

// Function to display search results
function displayResults(results) {
    // Clear any previous results
    clearResults();
    
    // If there are no results, display a message
    if (results.length === 0) {
        d3.select('#search-results').append('p').text('No products found');
        return;
    }
    
    // Create a D3 selection for the search results container
    const resultsContainer = d3.select('#search-results');
    
    // Append each result to the container
    results.forEach(product => {
        resultsContainer.append('div').text(product.name);
    });
}

// Function to clear the search results
function clearResults() {
    // Select the search results container and remove all children
    d3.select('#search-results').selectAll('*').remove();
}

// Initialize the search engine when the document is ready
document.addEventListener('DOMContentLoaded', initSearchEngine);

// Error handling for unsupported browsers
if (!window.d3) {
    console.error('D3.js is not supported in this browser. Please use a modern browser.');
}
