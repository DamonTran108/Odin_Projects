const container = document.querySelector("#container");


const content = document.createElement("div")





content.classList.add("content");





content.textContent =  "THIS IS THE GBLORIOUS TEXT-CONTENT";



const p = document.createElement("p");

p.classList.add("p");

p.textContent = "Hey, I'm red!";

p.style.cssText = "color : red"



const h3 = document.createElement("h3");

h3.classList.add("h3");


h3.style.cssText = "color : blue";

h3.textContent = "i'm a blue h3";



const div2 = document.createElement("div");

div2.classList.add("div2");


div2.style.border = "thick solid black"

div2.style.backgroundColor = "pink";


const innerH1 = document.createElement("h1");

innerH1.classList.add("innerH1");

innerH1.textContent = "i'm in a div";


const p1 = document.createElement("p");

p1.classList.add("p1");

p1.textContent = "me too";


div2.appendChild(innerH1);
div2.appendChild(p1);







container.appendChild(content);

container.appendChild(p);

container.appendChild(h3);

container.appendChild(div2);

