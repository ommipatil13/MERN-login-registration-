// const express = require("express");
// const app = express();
// const cors = require("cors");
// const mongoose = require("mongoose");

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/myWebApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB Connected");
})

//userSchema

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

//model

const User = new mongoose.model("User", userSchema)

//Routes

// app.get("/", (req, res) => {
//     res.send("My API")
// })

app.post("/login", (req, res) => {
    // res.send("My API Login")
    const {email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user) {
            if(password === user.password) {
                res.send({message: "login success", user: user})
            }
            else {
                res.send({message: "password not match"})
            }
        }
        else {
            res.send({message: "user not register"})
        }
    }) 
})

app.post("/register", (req, res) => {
    // res.send("My API Register")
    // console.log(req.body);
    const { name, email, password } = req.body
    // if email is already present
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "user already registered" })
        }
        else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "successfull Registered Login " })
                }
            })
        }
    })

    // const user = new User ({
    //     name,
    //     email,
    //     password
    // })
    // user.save (err => {
    //     if(err) {
    //         res.send(err)
    //     } else{
    //         res.send( {message: "successfull Registered"})
    //     }
    // })
})

// app.get("/register", (req,res) => {
//     res.send("My API Register")
// })

app.listen(9002, () => {
    console.log("Port running at 9002");
})




