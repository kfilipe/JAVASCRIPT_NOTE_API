const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/javascriptNote', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,       .....DEPRECATE.....
    //useCreateIndex: true
}).then(() => console.log('Connection Succesful'))
    .catch((err) => console.log(err))