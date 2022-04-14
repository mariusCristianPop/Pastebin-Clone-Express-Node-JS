const mysql = require('./db_connect');

// CREATE TABLE
function createTable() {
    mysql.connection.query("CREATE TABLE IF NOT EXISTS binContent (id int(11) NOT NULL AUTO_INCREMENT, content varchar(254), insertedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (id))",
        (err) => {
            if (err) throw err;
            console.log('New table created:');
        });
}

// INSERT INTO TABLE
function dbInsert(string) {
    let sql = "INSERT INTO binContent (id, content) VALUES ?";
    let values = [
        ['0', string]
    ];
    mysql.connection.query(sql, [values],
        (err) => {
            if (err) throw err;
            console.log('Row inserted:');
        });
}

// SHOW TABLE WITH ALL ITS CONTENTS
function showContents() {
    mysql.connection.query("SELECT * FROM binContent;",
        (err, rows) => {
            if (err) throw err;
            console.log('Current contents:');
            console.log(rows);
        });
}

// DELETE TABLE
function dropTable() {
    mysql.connection.query("DROP TABLE IF EXISTS binContent;",
    (err) => {
        if (err) throw err;
        console.log('Existing table deleted:');
    });
}

module.exports = { createTable, dbInsert, showContents, dropTable };