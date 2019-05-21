var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_munizd',
  password        : 'dogSaltSick666',
  database        : 'cs340_munizd'
});
module.exports.pool = pool;
