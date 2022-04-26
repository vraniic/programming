const fs = require ('fs')
const express = require ('express')

const path = require('path')
const app = express()


app.use(express.urlencoded({extended: false}))
app.get('/form', function(req,res) {
    res.send()
})

app.get('/', function(req,res) {
    res.send('<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></input></form>')
})

app.post('/store-user', function(req,res) {
    const userName = req.body.username

    const filePath = path.join(__dirname, 'data', 'users.json')

    const  fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData)

    existingUsers.push(userName)

    fs.writeFileSync(filePath, JSON.stringify(existingUsers))

    res.send('<h1>Username stored!</h1>')
})

app.listen(3000)