import express from "express";
import superheroes from "superheroes";

const app=express();
const port=3000;

app.get("/",(req, res) => {
    const heroName=superheroes();
    res.send("hello i'm ayoub and My superHeroe is "+heroName);
})
app.listen(3000,() => {
    if (err) throw err ;
    console.log("server running on port "+port);
})