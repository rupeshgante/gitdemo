const express=require('express');
const path = require('path');
const bodyParser = require('body-parser');
var cors=require('cors');

const app=express();

const sequelize=require('./util/database');

const userRoutes=require('./routes/users');

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(userRoutes);

sequelize.sync().then(result=>{
    // console.log(result);
})
.catch(err=>console.log(err));

app.listen(8000);
