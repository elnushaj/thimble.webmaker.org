module.exports = {
  slugify: function(s) {
    var uslug = require("uslug");
    return uslug(s);
  },

  error: function( code, msg ) {
    var err = new Error( msg || http.STATUS_CODES[ code ]);
    err.status = code;
    return err;
  }
};
