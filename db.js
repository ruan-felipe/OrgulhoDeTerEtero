const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function() {

    // criando tabela
    db.run(
        `CREATE TABLE IF NOT EXISTS lobinhos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );`
    )

    // inserindo na tabela
    /*const query = `
        INSERT INTO lobinhos(
            image,
            title,
            category,
            description,
            link
        ) VALUES(?,?,?,?,?);
    `
    const values = [
        "https://pbs.twimg.com/media/ERpmuONXsAE3SgB.jpg",
        "CUTI CUTI *-*",
        "lobinho :3",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "http://orgulhodeteretero.com.br"
    ]
    db.run(query, values, function(err) {
        if (err) return console.log(err)
        
        console.log(this)
    }) */

   //DELETE TABLE

   /*db.run(`DELETE FROM lobinhos WHERE id = ?`, [1], function(err){
       if (err) return console.log(err)
       
       console.log("DELETE", this)
   })
    //SELECT TABLE
    db.all(`SELECT* FROM lobinhos`, function(err, rows){
        if (err) return console.log(err)

        console.log(rows)
    })*/

})

module.exports = db