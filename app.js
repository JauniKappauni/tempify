const express = require('express')
const app = express()
const port = 3000
const multer = require('multer')
const uploads = multer({dest:'./public/uploads/'})

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('index')
})

app.post('/upload', uploads.single('file'), function(req,res){
    res.send(`${req.file.originalname} was uploaded`)
    console.log(`${req.file.originalname} was uploaded`)
})

app.listen(port, () => console.log(`Der Server läuft nun auf http://localhost:${port}`))