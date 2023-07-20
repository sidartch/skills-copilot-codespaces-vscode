// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set port
const port = 3000;

// Start server
app.listen(port, function () {
    console.log('Server started on port ' + port);
});

// Get comment
app.get('/comment', function (req, res) {
    var comment = {
        "comment": "This is a comment",
        "commenter": "author"
    };
    res.json(comment);
});

// Save comment
app.post('/comment', function (req, res) {
    var comment = req.body;
    console.log(comment);
    res.send('Comment received');
});