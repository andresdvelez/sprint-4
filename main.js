import { renderOfferts } from "./components/renderOffers.js";
import { renderPopulars } from "./components/renderPopulars.js";
import { renderCarList } from "./components/renderCarList.js";

// Render products
renderOfferts();
renderPopulars();
renderCarList();

// Show car
const car = document.getElementById("car");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

openBtn.addEventListener("click", () => {
  car.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  car.classList.remove("active");
  overlay.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
  car.classList.remove("active");
  overlay.classList.remove("active");
});

// Show modal
const locationPicker = document.getElementById("locationPicker");
const locationModal = document.getElementById("locationModal");
const closeModalBtn = document.getElementById("closeModalBtn");

const showModal = (btn, modal) => {
  btn.addEventListener("click", () => {
    modal.classList.toggle("active");
    overlay.classList.toggle("active");
  });
};

const closeModal = (btn, modal) => {
  btn.addEventListener("click", () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
};

showModal(locationPicker, locationModal);
closeModal(closeModalBtn, locationModal);
