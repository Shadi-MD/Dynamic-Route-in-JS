const $ = document;
let mainContainer = $.querySelector(".container");

let allProducts = [
  { id: 1, title: "Sport shoes", price: "80", image: "images/1.png" },
  { id: 2, title: "Women shoes", price: "100", image: "images/2.png" },
  { id: 3, title: "Men shoes", price: "200", image: "images/3.png" },
];

allProducts.forEach(function (product) {
  mainContainer.insertAdjacentHTML(
    "beforeend",
    ' <div class="product-card"><h1>' +
      product.title +
      '</h1><p>Lorem ipsum, or lipsum as it is sometimes known</p><div class="product-pic" style="background-image: url(' +
      product.image +
      ');"></div><div class="product-info"><div class="product-price">$' +
      product.price +
      '</div><a href="product.html?id=' +
      product.id +
      '" class="product-button">See More</a></div></div>'
  );
});
