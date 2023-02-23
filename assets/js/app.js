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
