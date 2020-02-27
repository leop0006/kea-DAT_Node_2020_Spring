const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send({message:"Hello there"});
});

app.get("/aboutThisWebsite", (req, res) => {
    const aboutThisWebsite = {
        Website: "Hello this is a json representation"
    }
    res.send(aboutThisWebsite)

});

app.get("/RiseUpGamers", (req, res) => {
    const Joker = {
        GangWeed: "Rise up my Fellow gamers Jessica is with Chad"
    }
    res.send(Joker);

});


app.listen(3000, error => {
    if (error) {
        console.log(error)
    }
});