import express from "express";
import {randomSuperhero} from 'superheroes';

const app=express();
const port=3000;


app.get("/",(req, res) => {
    const heroName=randomSuperhero();
    res.send("hello i'm ayoub and My superHeroe is "+heroName);
})
app.listen(port, ( )=>{
    console.log("server running on port "+port);
})