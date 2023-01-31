const express = require('express');
const server = express();

const staticHandler = express.static('../public');
server.use(staticHandler);
server.get('/', (request, response) => {
    const html =
        /*html*/
        `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <link rel="stylesheet" type="text/css" href="style.css" />
            <title>Home</title>
          </head>
          <body>
            <h1>Hello Express</h1>
          </body>
        </html>
    `;
    response.send(html);
});

module.exports = server;
