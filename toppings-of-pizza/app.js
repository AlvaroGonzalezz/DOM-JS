// Select elements

// Select elements by ID
//  const container = document.getElementById("container");
//  console.log(container.innerHTML);
 
// Select elements by Class
// const toppings = document.getElementsByClassName("topping"); // show collection html
// console.log(toppings[3]); // show element specific of collection

// Select elements by Tag
// const myToppings = document.getElementsByTagName("li");
// console.log(myToppings);  

// Select firt element that meets with selector (id or class)
// const olive = document.querySelector("#olives");
// const backOrange = document.querySelector(".topping.back-orange"); 
// const backBrown = document.querySelector("ul li.back-brown"); // we can use HTML tags
// // const backBrown = document.querySelector("ul li:not(.back-brown)"); 
// console.log(backOrange);

// Selec all elemens that meets with selector
// const toppingsOrange = document.querySelectorAll(".topping.back-orange");
// console.log(toppingsOrange);
// console.log(toppingsOrange[0]); // show first element 


// Change Style using JS

// const firstTop = document.querySelector(".topping");
// firstTop.style.backgroundColor = "blue";
// const list = document.getElementById("list-toppings");
// // show text of element  
// console.log(list.innerText); // only Text
// console.log(list.textContent); // include spaces
// console.log(list.innerHTML); // include tags HTML

// Modify text 

// const title = document.getElementById("title");
// console.log(title.textContent);
// title.innerText = "Pizza 🍕";

// Attributes

// const link = document.getElementsByTagName("a");
// console.log(link[0].getAttribute("href")); // show value of attribute
// // link[0].removeAttribute("href"); // delete 
// link[0].setAttribute("target", "_blank"); // delete 

// Add or delete class 

// const firstTopp = document.querySelector(".topping");
// console.log(firstTopp.classList  ); // show the class of element
// firstTopp.classList.add("back-orange");
// firstTopp.classList.remove("back-orange");

// Create element

// const topList = document.getElementById("list-toppings");
// const newTopping = document.createElement("li");
// newTopping.classList.add("topping", "back-brown")
// newTopping.innerHTML = "Chicken"
// topList.append(newTopping);
// console.log(newTopping);

// Remove element

// newTopping.remove();

// Go through DOM

// const topList = document.getElementById("list-toppings");
// console.log(topList.parentElement); // show parent element
// console.log(topList.parentElement.parentElement); 
// console.log(topList.children); // next elements in collection 
// console.log(topList.firstChild); // show next first text
// console.log(topList.firstElementChild); // HTML
// console.log(topList.lastChild); // show last, normally is spaces but really it is a last thing
// console.log(topList.previousElementSibling); // show sibling element
// console.log(topList.nextElementSibling); // show sibling element


