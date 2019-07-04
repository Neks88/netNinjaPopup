// const arej = ['macka', 'pas', "svinja"];

// let zivot;
// for (let i = 0; i < arej.length; i++) {

//     zivot = arej[i];
//     console.log(zivot);
// }

// console.log(zivot);

let iksic = document.querySelector(".eks");
let wC = document.querySelector(".wrapper-content");
let wrapper = document.querySelector(".wrapper");

let dugme = document.querySelector("button");


dugme.addEventListener("click", () => {
    wC.style.display = "block";
    wrapper.style.display = "block";
});

iksic.addEventListener("click", () => {
    wC.style.display = "none";
    wrapper.style.display = "none";

});

