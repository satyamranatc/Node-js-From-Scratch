const http = require('http');
const path = require('path');
const fs = require('fs');

const filePath1 = path.join(__dirname, 'Pages', 'Demo.html');
const filePath2 = path.join(__dirname, 'Pages', 'MyForm.html');

http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile(filePath1, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (req.method === 'GET' && req.url === '/MyForm') {
        fs.readFile(filePath2, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (req.method === 'POST' && req.url === '/MyForm') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const formData = new URLSearchParams(body);
            const name = formData.get('Name');
            const age = formData.get('age');

            // Now you can use 'name' and 'age' as the submitted form data
            console.log('Name:', name);
            console.log('Age:', age);

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Form data received successfully.');
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
}).listen(5300, () => {
    console.log('Server is running on http://localhost:5300');
});
