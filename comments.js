// Create web server
// Add comments
// View comments

// 1. Require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// 2. Require additional modules
var db = require('./models'),
    controllers = require('./controllers');

// 3. Configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// 4. Add static middleware
app.use(express.static('public'));

// 5. Set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

// 6. Add routes
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api', controllers.api.index);
app.get('/api/comments', controllers.comments.index);
app.get('/api/comments/:id', controllers.comments.show);
app.post('/api/comments', controllers.comments.create);
app.delete('/api/comments/:id', controllers.comments.destroy);
app.put('/api/comments/:id', controllers.comments.update);

// 7. Start server
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});