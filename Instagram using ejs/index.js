const express = require("express");
const app = express();

const port = 8080;

app.set("view engine" , "ejs");

app.get("/" , (req,res) =>{
    res.render("home.ejs");
});

app.use(express.static("public"));


app.get("/ig/:username", (req,res) =>{
    let {username} = req.params;
    const instdata = require("./data.json");
    const data = instdata[username];
    if(data){
        res.render("instagram.ejs", {data});
    }else{
        res.render("error.ejs");
    }
});


app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
