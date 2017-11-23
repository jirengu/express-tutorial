
var orm = require('orm')

module.exports = orm.express("sqlite://database.sqlite", {
  define: function (db, models, next) {
      models.note = db.define("note", {
        title: String,
        content: String
      });
      models.note.sync()
      next();
  }
})