const express = require('express');

const app = express();
const date = require(__dirname + "/date.js");

app.use(express.json());
app.use(express.static(__dirname +'/public'));
app.use(express.urlencoded({ extended: false }))

app.set('view engine', "ejs");



let itemsList = [];

let workList = [];

let today = date.getDate();




app.get('/', (req,res)=>{

    res.render('todolists',  {title: today, item: itemsList});

});

app.post('/', (req,res)=>{
    let item = req.body.item;
    
    if (req.body.list === "Work List")
    {
        workList.push(item);
        res.redirect('/work');

    } else{
        itemsList.push(item);
        res.redirect('/');
    }



});


let workTitle = "Work List";

app.get('/work', (req,res)=>{

    res.render('todolists',  {title: workTitle, item: workList});

});


app.get('/about', (req,res)=>{

    res.render('about');

});



app.listen(3000, ()=> console.log('Server started on port 3000'));