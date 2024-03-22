const product = [
  {
    id: 0,
    image: "image/ML.webp",
    title: "Mobile Legends",
    price: 1_200_000,
  },
  {
    id: 1,
    image: "image/VL.webp",
    title: "Valorant",
    price: 600_000,
  },
  {
    id: 2,
    image: "image/LOL.webp",
    title: "League of Legends",
    price: 2_300_000,
  },
  {
    id: 3,
    image: "image/CODM.webp",
    title: "Call of Duty Mobile",
    price: 100_000,
  },
  {
    id: 4,
    image: "image/GI.webp",
    title: "Genshin Impact",
    price: 100_000,
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rp ${price}.00</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Tambah Ke Keranjang</button>" +
      `</div>
        </div>`
    );
  })
  .join("");

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML =
      "Keranjang lo masih kosong tuh, Ngab";
    document.getElementById("total").innerHTML = "Rp " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "Rp " + total + ".00";
        return (
          `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rp ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
