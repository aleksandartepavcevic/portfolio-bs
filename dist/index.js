const form=document.getElementById("contact-form"),formEvent=form.addEventListener("submit",(e=>{e.preventDefault();let t=new FormData(form);sendMail(t)})),sendMail=e=>{fetch("https://aleksandartepavcevic.github.io/send",{method:"post",body:"mail"}).then((e=>e.json()))};document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}));let autoExpand=e=>{e.style.height="auto",e.style.height=e.scrollHeight+2+"px",e.style.height.replace("px","")>=150?e.style.overflowY="scroll":e.style.overflowY="hidden"};document.addEventListener("input",(e=>{"textarea"===e.target.tagName.toLowerCase()&&autoExpand(e.target)}),!1);const hamburgerMenu=document.getElementById("hamburger-menu"),menuExit=document.getElementById("menu-exit"),menu=document.querySelector(".menu"),aboutMe=document.getElementById("about-me-link"),workflow=document.getElementById("workflow-link"),projects=document.getElementById("projects-link");hamburgerMenu.addEventListener("click",(()=>{menu.classList.toggle("opened")})),menuExit.addEventListener("click",(()=>{menu.classList.toggle("opened")})),aboutMe.addEventListener("click",(()=>{menu.classList.toggle("opened")})),workflow.addEventListener("click",(()=>{menu.classList.toggle("opened")})),projects.addEventListener("click",(()=>{menu.classList.toggle("opened")}));const project=document.getElementById("project"),project2=document.getElementById("project2"),project3=document.getElementById("project3"),project4=document.getElementById("project4");project.addEventListener("mouseenter",(()=>{project.classList.add("hovered")})),project.addEventListener("mouseleave",(()=>{project.classList.remove("hovered")})),project2.addEventListener("mouseenter",(()=>{project2.classList.add("hovered")})),project2.addEventListener("mouseleave",(()=>{project2.classList.remove("hovered")})),project3.addEventListener("mouseenter",(()=>{project3.classList.add("hovered")})),project3.addEventListener("mouseleave",(()=>{project3.classList.remove("hovered")})),project4.addEventListener("mouseenter",(()=>{project4.classList.add("hovered")})),project4.addEventListener("mouseleave",(()=>{project4.classList.remove("hovered")}));