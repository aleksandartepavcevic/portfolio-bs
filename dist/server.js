const express=require("express"),nodemailer=require("nodemailer"),multiparty=require("multiparty"),helmet=require("helmet"),compression=require("compression"),mongoose=require("mongoose");require("dotenv").config();const app=express();app.use(helmet()),app.use(compression()),app.route("/").get((function(e,s){s.sendFile(process.cwd()+"/index.html")}));const PORT=process.env.PORT||5e3;app.listen(PORT,(()=>{console.log(`Listening on port ${PORT}...`)}));const transpoter=nodemailer.createTransport({host:"smtp.gmail.com",port:587,auth:{user:process.env.EMAIL,pass:process.env.PASS}});transpoter.verify((function(e,s){e?console.log(e):console.log("Server is ready to take our messages")})),app.post("/send",((e,s)=>{let o=new multiparty.Form,t={};o.parse(e,(function(e,o){console.log(o),Object.keys(o).forEach((function(e){t[e]=o[e].toString()}));const n={form:t.name,to:process.env.EMAIL,subject:t.subject,text:`${t.name} <${t.email}> \n${t.message}`};transpoter.sendMail(n,((e,o)=>{e?(console.log(e),s.status(500).send("Something went wrong.")):s.status(500).send("Email successfully sent to recipient!")}))}))}));