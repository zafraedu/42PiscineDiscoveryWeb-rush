"use strict";

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const bienvenida = document.querySelector("#bienvenida");

// const back = document.querySelector(".m-0 display-5");

btn1.addEventListener("click", () => {
	bienvenida.classList.remove("visible");
	link2.classList.remove("visible");
	link1.classList.add("visible");
});

btn2.addEventListener("click", () => {
	bienvenida.classList.remove("visible");
	link1.classList.remove("visible");
	link2.classList.add("visible");
});
