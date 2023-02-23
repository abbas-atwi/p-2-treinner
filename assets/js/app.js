let openModal = document.querySelector(".modal-container");
let menu = document.querySelector(".menu");
let caracterX = document.querySelector(".closeModal");
menu.addEventListener("click", () => {
  if (openModal.style.display == "none") {
    openModal.style.display = "flex";
  } else {
    openModal.style.display = "none";
  }
});
caracterX.addEventListener("click", () => {
  if (openModal.style.display == "none") {
    openModal.style.display = "flex";
  } else {
    openModal.style.display = "none";
  }
});
