let openModal = document.querySelector(".modal-container");
let menu = document.querySelector(".menu");
let caracterX = document.querySelector(".closeModal");
let modalInput = (document.querySelector(".form-contact input").value = "");
let enviar = document.querySelector(".enviar");
enviar.addEventListener("click", (e) => {
  e.preventDefault();
});
menu.addEventListener("click", () => {
  if (openModal.style.display == "none") {
    openModal.style.display = "flex";
    modalInput.value = "";
  } else {
    openModal.style.display = "none";
    modalInput.value = "";
  }
});
caracterX.addEventListener("click", () => {
  if (openModal.style.display == "none") {
    openModal.style.display = "flex";
    modalInput.value = "";
  } else {
    openModal.style.display = "none";
    modalInput.value = "";
  }
});

let sliderbody = document.querySelector(".slider-body");

setInterval(() => {
  if (sliderbody.style.marginLeft == 0) {
    sliderbody.style.marginLeft = "-100vw";
  } else if (sliderbody.style.marginLeft == "-100vw") {
    sliderbody.style.marginLeft = "-200vw";
  } else if (sliderbody.style.marginLeft == "-200vw") {
    sliderbody.style.marginLeft = 0;
  }
}, 3000);
// let bod = document.querySelector("body").clientWidth;
// let slidemobile = document.querySelector(".slider");
// if (bod == 450) {
//   slidemobile.clientWidth = "50vw";
// }
