// escribe la función bmi acá
const express = require("express");
const bodyParser= require("body-parser")


const app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/", function(req, res){

    var weight= Number(req.body.weight);
    var height = Number(req.body.height);

    var result = (weight / (height*height))*703;

    res.send("Result: " + result);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});
// código de prueba
console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75)) //  16.979591836734695