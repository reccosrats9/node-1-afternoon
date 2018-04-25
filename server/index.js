const express= require('express')
const bodyParser= require('body-parser')
const mc= require('./controllers/messages_controller')

const app= express();
app.use(bodyParser.json())
app.use(express.static('./../public/build'))

const port= 3000;
app.listen(port, ()=> {console.log(`Server is listening on port ${port}`)})

let messagesBaseURL= '/api/messages'
app.post(messagesBaseURL, mc.create)
app.get(messagesBaseURL, mc.read)
app.put(`${messagesBaseURL}/:id`, mc.update)
app.delete(`${messagesBaseURL}/:id`, mc.delete)
