const express = require('express')
const exphbs = require('express-handlebars')
//below 2 packages are installed as error was coming npm i @handlebars/allow-prototype-access and npm i handlebars
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const Handlebars = require('handlebars')

const app = express()

const db = require('./models/db')
db()


app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

//this middleaware is used/  when we send data that json will accept
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.use("/employee", require('./controllers/employeeController'))


const PORT = 3000
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT ${PORT}`)
})