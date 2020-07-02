var express=require("express");

var app = express();
app.set('port', process.env.PORT || 3000);



app.get("/api/users",(req,res)=> {
    res.status(200);
    res.type("text/json");
    let responseObject = {
        success : true,
        message : "Se ejecutó con éxito la operación"
    };
    res.send(responseObject);
});

app.listen(app.get('port'), ()=> {
    console.log("Express is running!! ");
});


app.use((req, res)=> {
    res.type("text/plain");
    res.status(404);
    res.send("404 - Not Found");
});