const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/contacts_list_db');

const db =mongoose.connection;


// if error
db.on('error', console.error.bind(console, 'error connecting to db'));


//up and running
db.once('open', function(){
    console.log('Successfully connected to the database');
});
