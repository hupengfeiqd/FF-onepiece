var mysql = require('mysql');

function createConnection () {
    var connection = mysql.createConnection({
      host:'localhost',
      port:'3306',
      user:'root',
      password:'root',
      database:'onepiece'
    });
    return connection
}

module.exports.createConnection = createConnection;
