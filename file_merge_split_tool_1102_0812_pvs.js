// 代码生成时间: 2025-11-02 08:12:33
// Require necessary modules
const fs = require('fs');
const path = require('path');

// Helper function to read a file in chunks
function* readInChunks(filename, chunkSize = 1024 * 1024) {
    const rs = fs.createReadStream(filename);
    let chunk;
    while (null !== (chunk = rs.read(chunkSize))) {
        yield chunk.toString();
    }
}

// Helper function to write a file in chunks
function writeInChunks(filename, content, callback) {
    const ws = fs.createWriteStream(filename);
    ws.write(content, 'utf-8', callback);
}

// Function to split a file into smaller parts
function splitFile(inputFilename, outputFilenamePrefix, maxSize) {
    const files = [];
    const chunks = readInChunks(inputFilename, maxSize);

    let currentSize = 0;
    let currentFileNumber = 0;
    let currentContent = '';

    for (const chunk of chunks) {
        currentSize += Buffer.byteLength(chunk, 'utf-8');
        if (currentSize > maxSize) {
            writeInChunks(path.join(path.dirname(inputFilename), `${outputFilenamePrefix}_${currentFileNumber}.txt`), currentContent, () => {
                currentFileNumber++;
                currentSize = Buffer.byteLength(chunk, 'utf-8');
                currentContent = chunk;
            });
        } else {
            currentContent += chunk;
        }
    }

    // Write the last chunk
    if (currentContent) {
        writeInChunks(path.join(path.dirname(inputFilename), `${outputFilenamePrefix}_${currentFileNumber}.txt`), currentContent);
    }
}

// Function to merge multiple files into one
function mergeFiles(inputFiles, outputFilename) {
    let content = '';
    inputFiles.forEach((filename) => {
        content += fs.readFileSync(filename, 'utf-8');
    });
    writeInChunks(outputFilename, content, () => {
        console.log('Files merged successfully.');
    });
}

// Error handling middleware
function handleError(error) {
    if (error) {
        console.error('An error occurred:', error.message);
        throw error;
    }
}

// Example usage:
// Split a file into parts of 5MB
const inputFilePath = 'path/to/large/file.txt';
const outputPrefix = 'path/to/output/split_file_';
const maxChunkSize = 5 * 1024 * 1024; // 5 MB

try {
    splitFile(inputFilePath, outputPrefix, maxChunkSize);
} catch (error) {
    handleError(error);
}

// Merge multiple files into one
const inputFiles = ['path/to/output/split_file_0.txt', 'path/to/output/split_file_1.txt'];
const outputMergedFile = 'path/to/output/merged_file.txt';

try {
    mergeFiles(inputFiles, outputMergedFile);
} catch (error) {
    handleError(error);
}