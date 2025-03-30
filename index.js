var express = require('express');
var app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.get('/', function(req, res){
    res.render('index');

})
    
app.get('/resume', function(req, res){
    res.render('resume');

})



app.listen(3000, function() {
    console.log('Our app is running on port 3000')
}) 
