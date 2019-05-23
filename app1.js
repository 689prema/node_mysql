var faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
     host :'localhost',
     user :'prema89',
     database:'join_us'
});
// Selecting data
// var q = 'SELECT COUNT(*) AS total FROM users';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].total);
// });
// connection.end();

//INSERTING DATA

// var q = 'INSERT INTO users(email) VALUES ("rusty_the_dog@gmail.com")';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

//INSERTING DATA TAKE 2
// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };
// console.log(person);

// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
//  });
//  console.log(end_result.sql);
// connection.end();

//INSERTING LOTS OF DATA

var data = [];
for(var i=0;i<500;i++){
data.push([
    faker.internet.email(),
    faker.date.past()
    ]);
}
//console.log(data);
var q = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});

connection.end();