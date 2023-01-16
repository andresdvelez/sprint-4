// Fetch car products
export const renderCarList = async () => {
  const carList = document.getElementById("carList");
  const carQuantity = document.querySelectorAll("#carQuantity");
  const products = await fetch("http://localhost:3000/carrito");
  const data = await products.json();

  if (data.length >= 1) {
    carQuantity.forEach((btn) => (btn.innerText = data.length));
  } else {
    carQuantity.forEach((btn) => (btn.innerText = 0));
  }
  data.forEach(
    (item) =>
      (carList.innerHTML += `
    <li class="car__item">
        <img
            src="${item.imagen}"
            height="36"
            alt=""
            class="car__item-img"
        />
        <div class="car__item-details">
            <p class="item__details-name">${item.nombre}</p>
            <p class="item__details-price">${item.precioFinal}</p>
        </div>
        <div class="car__item-quantity">
            <i class="fa-solid fa-minus item__quantity-minus"></i>
            <p class="item__quantity-value">1U</p>
            <i class="fa-solid fa-plus item__quantity-add"></i>
        </div>
    </li>
    `)
  );
};
