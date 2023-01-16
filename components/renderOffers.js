const offertContainer = document.querySelector("#offertContainer");
const OFFERS_URL = "http://localhost:3000/ofertas";

export const renderOfferts = async () => {
  const res = await fetch(OFFERS_URL);
  const data = await res.json();

  data.forEach((item) => {
    offertContainer.innerHTML += `
    <div id="${item.id}" class="product__wrapper-card">
        <p class="card-disccount">32% dto.</p>
        <img src="${item.imagen}" alt="" class="card-img" />
        <p class="card-price">$${item.precioFinal}/kg <span>$${item.precioInicial}/kg</span></p>
        <p class="card-desc">${item.nombre}</p>
        <button type="button" id="addBtn" class="card-btn">Agregar</button>
    </div>
    `;
  });
  const addBtn = document.querySelectorAll("#addBtn");

  for (let i = 0, len = addBtn.length; i < len; i++) {
    addBtn[i].addEventListener("click", (e) => {
      e.preventDefault();

      const newProduct = data.filter(
        (item) => item.id === parseInt(e.target.parentElement.id)
      );

      const carUrl = "http://localhost:3000/carrito/";

      fetch(carUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct[0]),
      });
    });
  }
};
