const $ = document;

let allProducts = [
  { id: 1, title: "Sport shoes", price: "80", image: "images/1.png" },
  { id: 2, title: "Women shoes", price: "100", image: "images/2.png" },
  { id: 3, title: "Men shoes", price: "200", image: "images/3.png" },
];

let h1Elem = $.querySelector("h1");
let imgElem = $.querySelector("img");
let backBtn = $.querySelector("button");

let locationSearchParam = new URLSearchParams(location.search);
let productId = locationSearchParam.get("id");

let productInfo = allProducts.find(function (product) {
  return product.id == productId;
});

h1Elem.innerHTML = productInfo.title;
imgElem.src = productInfo.image;

backBtn.addEventListener("click", function () {
  history.back();
});
