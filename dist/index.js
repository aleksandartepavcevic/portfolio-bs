const form=document.getElementById("contact-form"),formEvent=form.addEventListener("submit",(e=>{e.preventDefault();let t=new FormData(form);sendMail(t)})),sendMail=e=>{fetch("http://aleksandartepavcevic.github.io/send",{method:"post",body:"mail"}).then((e=>e.json()))};document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}));let autoExpand=e=>{e.style.height="auto",e.style.height=e.scrollHeight+2+"px",e.style.height.replace("px","")>=150?e.style.overflowY="scroll":e.style.overflowY="hidden"};document.addEventListener("input",(e=>{"textarea"===e.target.tagName.toLowerCase()&&autoExpand(e.target)}),!1);const express=require("express"),nodemailer=require("nodemailer"),multiparty=require("multiparty");require("dotenv").config();const app=express();app.route("/").get((function(e,t){t.sendFile(process.cwd()+"/index.html")}));const PORT=process.env.PORT||5e3;app.listen(PORT,(()=>{console.log(`Listening on port ${PORT}...`)}));const transpoter=nodemailer.createTransport({host:"smtp.gmail.com",port:587,auth:{user:process.env.EMAIL,pass:process.env.PASS}});transpoter.verify((function(e,t){e?console.log(e):console.log("Server is ready to take our messages")})),app.post("/send",((e,t)=>{let o=new multiparty.Form,s={};o.parse(e,(function(e,o){console.log(o),Object.keys(o).forEach((function(e){s[e]=o[e],toString()}));const n={form:s.name,to:process.env.EMAIL,subject:s.subject,text:`${s.name} <${s.email}> \n${s.message}`};transpoter.sendMail(n,((e,o)=>{e?(console.log(e),t.status(500).send("Something went wrong.")):t.status(500).send("Email successfully sent to recipient!")}))}))}));