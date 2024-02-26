// Import the 'fs' (file system) module provided by Node.js
const fs = require('fs');

// Specify the path to the file we want to read or write
const filePath = 'example.txt';

// Check if the file exists
fs.exists(filePath, (exists) => {
    if (exists) {
        // If the file exists, read its content
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading the file:', err);
            } else {
                // Log the content of the file to the console
                console.log('File content:', data);
            }
        });
    } else {
        // If the file doesn't exist, create it and write some content
        const contentToWrite = 'Hello, this is a sample content!';
        fs.writeFile(filePath, contentToWrite, (err) => {
            if (err) {
                console.error('Error creating the file:', err);
            } else {
                console.log('File created and content written successfully!');
            }
        });
    }
});
