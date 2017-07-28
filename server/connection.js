const mongoose = require('mongoose');

// mongodb://jnex:<dbpassword>@ds032887.mlab.com:32887/dnews
const db = mongoose.connect('mongodb://jnex:7Q3Ae4POP8nU@ds032887.mlab.com:32887/dnews', {useMongoClient: true});
module.exports = db;

