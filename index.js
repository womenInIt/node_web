const express = require('express');
const expressOasGenerator = require('express-oas-generator');
const app = express()
const port = 4520; 

expressOasGenerator.init(app, {}); 

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });

app.get('/', (request, response) => {
  response.send("Hello from server");
})
