// code em js

const express = require("express")
const server = express()

// lobinhos 

const db = require("./db")

/*const lobinhos = [
   {
      img: "https://pbs.twimg.com/media/ERpmuONXsAE3SgB.jpg",
      title: "CUTI CUTI *-*",
      category: "lobinho :3",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      url: "http://orgulhodeteretero.com.br"
   },
   {
      img: "https://pbs.twimg.com/media/EPEp8DNWoAEmIPV.jpg",
      title: "MEU DEUS",
      category: "que meda",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      url: "http://orgulhodeteretero.com.br"
   },
   {
      img: "https://pbs.twimg.com/media/ESht3aNXYAEirEn.jpg",
      title: "SOPA DE LOBO UMA DELICIA",
      category: "seja chines oficial",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      url: "http://orgulhodeteretero.com.br"
   },
   {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd21w1kYfeaFARc5DoPhijL9XoK0KgKmh3rw&s",
      title: "MORIDDA DE LOBO AIAIAIAI",
      category: "seja mordido oficial",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      url: "http://orgulhodeteretero.com.br"
   },
   {
      img: "https://pbs.twimg.com/media/EoPdfNlW8AElD1j.jpg:large",
      title: "LOBO FERREIRO",
      category: "orgulho de ter ferro",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      url: "http://orgulhodeteretero.com.br"
   },
   {
      img: "https://pm1.aminoapps.com/7558/05b3e5142f2db6dbe225dc26ec0af0276ed29b41r1-812-1013v2_uhq.jpg",
      title: "CHEGOU O FRIO",
      category: "dentro de você tem um lobo quente",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      url: "http://orgulhodeteretero.com.br"
   }

]*/


// set static files
server.use(express.static("public"))
// enable req.body 
server.use(express.urlencoded({ extended: true}))


// nunjucks settings
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
   express: server,
   noCache: true, //boolean
})

server.get("/", function(req, res) {

   //SELECT TABLE
   db.all(`SELECT* FROM lobinhos`, function(err, rows){
      if (err) {
         console.log(err)
         return res.send("ERRO DE DATA BASE")
      }
      const reversedLobinhos = [...rows].reverse()

      let lastLobinho = []
      for (let meme of reversedLobinhos){
         if (lastLobinho.length < 2){
            lastLobinho.push(meme)
         }
      }

      return res.render("index.html", { lobinhos: lastLobinho })
   })
})

server.post("/", function(req, res){
   
   // inserindo na tabela
   const query = `
      INSERT INTO lobinhos(
         image,
         title,
         category,
         description,
         link
      ) VALUES(?,?,?,?,?);
   `
   const values = [
      req.body.image,
      req.body.title,
      req.body.category,
      req.body.description,
      req.body.link
   ]
   db.run(query, values, function(err) {
      if (err) {
         console.log(err)
         return res.send("ERRO DE DATA BASE")
      }      
      return res.redirect("/lobinho")
   })   
   
   
   console.log(req.body) 
})

server.get("/lobinho", function(req, res) {


   db.all(`SELECT* FROM lobinhos`, function(err, rows){

      if (err) {
         console.log(err)
         return res.send("ERRO DE DATA BASE")
      }

      const reversedLobinhos = [...rows].reverse()
   
      return res.render("lobinho.html", { lobinhos: reversedLobinhos} )

   })

 })

server.listen(3000)