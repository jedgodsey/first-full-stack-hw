const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/football-teams', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => console.log('MongoDB Connected bruv'));
mongoose.connection.on('error', (error) => console.log(error));

module.exports = {
    Team: require('./Team')
}
