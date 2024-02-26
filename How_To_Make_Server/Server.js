// Import the 'http' module provided by Node.js
const http = require('http');

// Define the port number where the server will listen
const PORT = 3300;

// Create a server using the http module
const server = http.createServer((req, res) => {
    // Handle incoming requests here

    // Scenario 1: Plain Text Response
    // Set the response header with a content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send a simple response back to the client
    res.write("Hiii By Sever")
    res.end();

    //! OR

    //? Scenario 2: HTML Response
    //? Set the response header with a content type

    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // Send an HTML-formatted response back to the client
    // res.end('<html><body><h1>Hello, this is a simple Node.js server!</h1></body></html>');

    //! OR

    //? Scenario 3: JSON Response
    //? Note: Make sure to send a valid JSON object

    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // Send a JSON-formatted response back to the client
    // res.end(JSON.stringify({ message: 'Hello, this is a simple Node.js server!' }));
});

// Start the server and make it listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
