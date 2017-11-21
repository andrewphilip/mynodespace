const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');

const app=express();

/*
// order matters.... logger will not work if put under the app.get('/')
const logger = (req, res, next) =>{
    console.log('Logging....');
    next();
}

app.use(logger);
*/

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//static path
app.use(express.static(path.join(__dirname, 'public')));

var people =[
                { name:'andrew', age:47},
                { name:'aquinas', age:45},
                { name:'bonaventure', age:50}
            ];

app.get('/', (req, res) =>{
    
    //res.send('Agnus Dei!!');
    //res.json(people);
    res.render('index', {mainheader:'Users:', users: people});
});

app.listen(3000, function(){
    console.log('server started on port 3000.');
});