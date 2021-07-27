const express       = require('express');
const mongoose      = require('mongoose');
const bodyParser    = require('body-parser')
const cors          = require('cors');
const app           = express();
const port          = 8000;
const productRoute  = require('./routes/productAndCategory')


//putting link to .env file to safecase our password of database
require('dotenv/config')


//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/',productRoute);


//response to show on homepage
app.get('/',(req,res)=>{
    res.send('REST API ASSIGNMENT')
})

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser:true, 
     useUnifiedTopology:true, 
     useCreateIndex:true},
    ()=>console.log('connected to db'))


app.listen(port,()=>console.log(`server is running at port:${port}`));
