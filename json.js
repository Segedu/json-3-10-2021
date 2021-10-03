//!1
// const CONTACT_US = `{
//     "name": "liel", "message": "Hello world", "email": "liel@gmail.com"
// }`;
// console.log(CONTACT_US);
// console.log(JSON.parse(CONTACT_US));

//!2
// const TRANSPORT = `{
//     "cars":[{"model":"mazda","price":30000,"year":2020}],
//     "ships":[{"name":"the road not taken","year":2009,"anchoring":"Tel aviv","img":"https://cdn.pixabay.com/photo/2017/04/30/12/56/aaa-2272797_960_720.jpg"},{"name":"the road not taken","year":2005,"anchoring":"ashdod","img":"https://cdn.pixabay.com/photo/2017/04/30/12/56/aaa-2272797_960_720.jpg"}]
// }`;
// let converted = JSON.parse(TRANSPORT);
// let divElement = document.getElementById("cont");

// converted.ships.forEach((element) => {
//   divElement.innerHTML += `<section>
//   <p>${element.name}</p>
//   <h1>${element.year}</h1>
//   <p>${element.anchoring}</p>
//   <img src="${element.img}"/>
//   </section>`;
// });

//!3
// let nameInput = document.getElementById("nameInput");
// let emailInput = document.getElementById("emailInput");
// let messageInput = document.getElementById("messageInput");
// let btn = document.getElementById("btn");

// const CONTACT = `{
//     "name": "${nameInput.value}", "message": "${emailInput.value}", "email": "${messageInput}"
// }`;

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let contactObj = {
//     name: `${nameInput.value}`,
//     message: `${emailInput.value}`,
//     email: `${messageInput.value}`,
//   };
//   console.log(JSON.stringify(contactObj));
// });

//!4
// function toJson(obj) {
//   return JSON.stringify(obj);
// }

//!5
// function fromJson(json) {
//   return JSON.parse(json);
// }

//!6
// function duplicteAgeBy3AToJson(userObj) {
//   userObj = { age: 25, name: "DANI", email: "dani@gmail.com" };
//   userObj.age = userObj.age * 3;
//   console.log(JSON.stringify(userObj));
// }
// duplicteAgeBy3AToJson();
