const fs = require ('fs')
const express = require ('express')

const path = require('path')
const app = express()


// app.use(express.urlencoded({extended: false}))
// app.get('/form', function(req,res) {
//     res.send()
// })

app.get('/', function(req,res) {
res.send('<h1>Hello World!</h1>')
})

app.get('/restaurants', function(req,res) {
    const htmlFilePath = path.join(__dirname, 'views', 'restaurants.html')
    res.sendFile(htmlFilePath)
})


app.get('/recommend', function(req,res) {
    const htmlFilePath = path.join(__dirname, 'views', 'recommend.html')
    res.sendFile(htmlFilePath)
})


app.get('/', function(req,res) {
    const htmlFilePath = path.join(__dirname, 'views', 'index.html')
    res.sendFile(htmlFilePath)
})


app.get('/confirm', function(req,res) {
    const htmlFilePath = path.join(__dirname, 'views', 'confirm.html')
    res.sendFile(htmlFilePath)
})


app.get('/about', function(req,res) {
    const htmlFilePath = path.join(__dirname, 'views', 'about.html')
    res.sendFile(htmlFilePath)
})



// app.post('/store-user', function(req,res) {
//     const userName = req.body.username

//     const filePath = path.join(__dirname, 'data', 'users.json')

//     const  fileData = fs.readFileSync(filePath);
//     const existingUsers = JSON.parse(fileData)

//     existingUsers.push(userName)

//     fs.writeFileSync(filePath, JSON.stringify(existingUsers))

//     res.send('<h1>Username stored!</h1>')
// })

// app.get('/users', function(req,res) {
//     const filePath = path.join(__dirname, 'data', 'users.json')

//     const  fileData = fs.readFileSync(filePath);
//     const existingUsers = JSON.parse(fileData)

//     res.send(existingUsers)
// })

app.listen(3000)