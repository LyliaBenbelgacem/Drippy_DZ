 // Menu Display
 let menu = document.querySelector("#menu-icon");
 console.log("get menu icon")
 let navbar = document.querySelector(".navbar");
 console.log("get nav")
 menu.onclick=()=>{
  console.log("clicked")
     menu.classList.toggle("bx-x");
     navbar.classList.toggle("active");
 }
 // Remove Menu On Scroll
 window.onscroll = () =>{
     menu.classList.remove("bx-x");
     navbar.classList.remove("active");
 }