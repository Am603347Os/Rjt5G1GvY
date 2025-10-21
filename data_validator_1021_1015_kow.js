// 代码生成时间: 2025-10-21 10:15:52
(function() {

    // Define a function to validate data
    function validateData(data, schema) {
        // Check if data and schema are provided
        if (!data || !schema) {
            throw new Error('Data and schema must be provided.');
        }

        // Use D3 to map over the data and validate each item
        const isValid = d3.map(data, function(item) {
            for (const key in schema) {
                // Check if the item has the key and its value matches the schema
                if (!item.hasOwnProperty(key) || typeof item[key] !== schema[key].type) {
                    return false;
                }
            }
            return true;
        });

        // Return the result of the validation
        return isValid;
    }

    // Example usage:
    // Define a schema
    const schema = {
    //   'name': 'string',
    //   'age': 'number',
    //   'isStudent': 'boolean'
    // };

    // Define some data to validate
    const data = [
    //   { 'name': 'John', 'age': 25, 'isStudent': true },
    //   { 'name': 'Jane', 'age': 'thirty', 'isStudent': false }
    // ];

    // Validate the data
    // const result = validateData(data, schema);
    // console.log(result);

    // Export the function for use in other scripts
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = validateData;
    } else {
        window.validateData = validateData;
    }

})();