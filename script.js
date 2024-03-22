const product = [
  {
    id: 0,
    image: "image/ML.webp",
    title: "MLBB Voucher 170 Diamonds",
    price: 40_000,
  },
  {
    id: 1,
    image: "image/ML.webp",
    title: "MLBB Voucher 300 Diamonds",
    price: 80_000,
  },
  {
    id: 2,
    image: "image/VL.webp",
    title: "Voucher Valorant Point 350",
    price: 50_000,
  },
  {
    id: 3,
    image: "image/VL.webp",
    title: "Voucher Valorant Point 1000",
    price: 150_000,
  },
  {
    id: 4,
    image: "image/LOL.webp",
    title: "Voucher League of Legends 105 Wild cores",
    price: 14_000,
  },
  {
    id: 5,
    image: "image/LOL.webp",
    title: "Voucher League of Legends 350 Wild cores",
    price: 48_000,
  },
  {
    id: 6,
    image: "image/CODM.webp",
    title: "Voucher Call of Duty Mobile 128cp",
    price: 18_000,
  },
  {
    id: 7,
    image: "image/CODM.webp",
    title: "Voucher Call of Duty Mobile 321cp",
    price: 47_000,
  },
  {
    id: 8,
    image: "image/GI.webp",
    title: "Voucher Genshin Impact 330gc",
    price: 50_000,
  },
  {
    id: 9,
    image: "image/GI.webp",
    title: "Voucher Genshin Impact 1090gc",
    price: 174_000,
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
