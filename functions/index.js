

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")("sk_test_51KZxQqSCnaBtop68fu6Lz5P9TRHB2hLIu03iJOWgwa99NsQ1vaF8li3jXHJ97Lvg75M5YjAR9gxEVxr56d0VmA1U00JAQYIsEQ");//secret key from stripe;

// App


//App config
const app = express()

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());


//API routes
app.get("/",(req,response)=>res.status(200).send("Hello Harsh"));
app.post("/payment/create",async (req,res)=>{
    const total = req.query.total;
    console.log("payment req received Book!! for this amount ----",total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount:2300, //subunit of currency
        currency : "usd",
    });
    res.status(201).send({
        clientSecret:paymentIntent.client_secret,
        
    })
})

//listen command
exports.api = functions.https.onRequest(app);
//example end point
//http://localhost:5001/clone-by-harsh/us-central1/api