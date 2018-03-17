const express = require('express');

// morgan - logger for express
const morgan = require('morgan');

const path = require('path');



const app = express();




// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist/')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);

// eslint-disable-next-line no-console
console.log(`EWS app listening on ${port}`);
