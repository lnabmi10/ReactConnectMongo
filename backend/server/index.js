const express = require('express')
const connectDB = require('./db');
const cors = require('cors')
const userModels = require('./models/userModels')
const app = express()
const port = 3001
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(express.json());
app.use(cors())
connectDB();
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.get('/user', async (req, res) => {
    const users = await userModels.find();
    
    res.json(users);
});

app.listen(port,()=>{
    console.log("app is running")
})

