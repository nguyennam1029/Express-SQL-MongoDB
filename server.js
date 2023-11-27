const express = require('express');
const app = express();
const port = 3030; // Chọn một cổng tuỳ ý

// Sử dụng EJS làm view engine
app.set('view engine', 'ejs');

// Đường dẫn đến thư mục chứa các file view
app.set('views',  'src/views');

// Định nghĩa một route đơn giản
app.get('/', (req, res) => {
  res.render('index');
});


// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejssql',
  password:''
});

// simple query
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// with placeholder
connection.query(
  'SELECT * FROM message',

  function(err, results) {
    console.log(results);
  }
);




// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
