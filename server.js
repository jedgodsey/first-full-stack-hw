const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const PORT = 7000;

app.set('view engine', 'ejs');

// Set up controller
const teamCtrl = require('./controllers/teamController');

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Home Route
app.get('/', (req, res) => {
    res.render('allTeams');
})

//Team Routes
app.use('/teams', teamCtrl);

// Listener
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
