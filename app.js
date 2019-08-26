let express = require ('express');
let app = express();
let bodyParser = require('body-parser');


let db = [];

app.use(bodyParser.urlencoded({
    extended: false
    })
)

app.use(express.static(__dirname+"/views"));
app.use(express.static(__dirname+"/img"));//telling express that some of static assets will be in img

app.get('/', function(req,res){
    console.log('Hello from app.get');
    //res.send("Thanks for response");
    res.sendFile(__dirname+"/views/" + 'index.html');
});

app.get('/newtask', function(req,res){
    console.log('Hello from app.get');
    //res.send("Thanks for response");
    res.sendFile(__dirname+"/views/" + 'taskadd.html');
})

app.post('/newtask', function(req,res){

    // NEED TO FIX
    console.log('Post req received');
   
    res.sendFile(__dirname+"/views/" + 'index.html');
    db.push(req.body);
    
});



app.get('/listtasks', function(req,res){
    console.log('Hello from app.get');
    //res.send("Thanks for response");
    res.render(__dirname+"/views/" + 'tasklist.html', {ar:db});
});

app.engine('html', require('ejs').renderFile);
app.set("view engine", "html");
app.listen(8000);