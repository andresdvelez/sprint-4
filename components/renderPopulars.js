const popularContainer = document.querySelector("#popularContainer");
const POP_URL = "http://localhost:3000/populares";

export const renderPopulars = async () => {
  const res = await fetch(POP_URL);
  const data = await res.json();

  data.forEach((item) => {
    popularContainer.innerHTML += `
    <div id="${item.id}" class="product__wrapper-card">
        <img src="${item.imagen}" alt="" class="card-img" />
        <p class="card-price">$${item.precio}/kg</p>
        <p class="card-desc">${item.nombre}</p>
        <button id="addBtn" type="button" class="card-btn">Agregar</button>
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
