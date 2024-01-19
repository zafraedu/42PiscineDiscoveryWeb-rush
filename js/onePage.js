const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const bienvenida = document.querySelector("#bienvenida");

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
