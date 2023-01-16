// const handleAdd = async (event) => {
//   const OFFERS_URL = "http://localhost:3000/ofertas";

//   const res = await fetch(OFFERS_URL);
//   const data = await res.json();

//   const newProduct = data.filter(
//     (item) => item.id === parseInt(event.parentElement.id)
//   );

//   const carUrl = "http://localhost:3000/carrito/";
//   fetch(carUrl, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newProduct[0]),
//   });
// };
