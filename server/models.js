// mongodb://jnex:<dbpassword>@ds032887.mlab.com:32887/dnews

const models = {
  Admin: require('./models/admins'),
  Category: require('./models/category'),
  News: require('./models/news'),
  Users: require('./models/users'),
  UserNews: require('./models/user_news')
};

module.exports = models;

