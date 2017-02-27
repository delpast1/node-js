var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended:false});
app.get('/api/calculator', (req,res) =>{
    res.json({message: 'Calculator'});
});

app.post('/api/calculator',urlencodedParser, (req,res) => {
    let numberA = parseInt(req.body.numberA);
    let numberB = parseInt(req.body.numberB);
    let operation = req.body.operation;
    let result;
    if (operation=='add'){
        result = numberA + numberB;
    } else if (operation=='sub')
        result = numberA - numberB;
    else if (operation=='div')
        result = numberA/numberB;
    else result = numberA*numberB;

    response = {
        numberA: numberA,
        numberB: numberB,
        operation: operation,
        result: result
    };
    res.end(JSON.stringify(response));

});

var server = app.listen(8081, () => {
    console.log('connected');
});
