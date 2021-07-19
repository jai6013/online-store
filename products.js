let products = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0j8s43SRGSEHvkkBwSH1mrJIfDYiqK0sXw&usqp=CAU",
    name: "Mobile",
    brand: "samsung",
    price: "1000",
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0j8s43SRGSEHvkkBwSH1mrJIfDYiqK0sXw&usqp=CAU",
    name: "Mobile",
    brand: "samsung",
    price: "1400",
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0j8s43SRGSEHvkkBwSH1mrJIfDYiqK0sXw&usqp=CAU",
    name: "Mobile",
    brand: "samsung",
    price: "7000",
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0j8s43SRGSEHvkkBwSH1mrJIfDYiqK0sXw&usqp=CAU",
    name: "Mobile",
    brand: "samsung",
    price: "6000",
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0j8s43SRGSEHvkkBwSH1mrJIfDYiqK0sXw&usqp=CAU",
    name: "Mobile",
    brand: "samsung",
    price: "71000",
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0j8s43SRGSEHvkkBwSH1mrJIfDYiqK0sXw&usqp=CAU",
    name: "Mobile",
    brand: "samsung",
    price: "3000",
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0j8s43SRGSEHvkkBwSH1mrJIfDYiqK0sXw&usqp=CAU",
    name: "Mobile",
    brand: "samsung",
    price: "4000",
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0j8s43SRGSEHvkkBwSH1mrJIfDYiqK0sXw&usqp=CAU",
    name: "Mobile",
    brand: "samsung",
    price: "9000",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0j8s43SRGSEHvkkBwSH1mrJIfDYiqK0sXw&usqp=CAU",
    name: "Mobile",
    brand: "samsung",
    price: "8000",
  },
];

if (localStorage.getItem("products") == null) {
  localStorage.setItem("products", JSON.stringify(products));
}

function showProducts() {
  let products = JSON.parse(localStorage.getItem("products"));

  let products_div = document.getElementById("product");

  products.forEach(function (el) {
    let div = document.createElement("div");

    let p_img = document.createElement("img");
    p_img.src = el.img;
    p_img.addEventListener("mouseover",function(){
        p_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PMJKS9sbGqi8X45YjLZxJwh7-qNCZxoXqg&usqp=CAU";
    })

    let p_name = document.createElement("p");
    p_name.innerHTML = el.name;

    let p_brand = document.createElement("p");
    p_brand.innerHTML = el.brand;

    let p_price = document.createElement("p");
    p_price.innerText = el.price;

    let btn = document.createElement("button");
    btn.Value = "Add To Cart";
    btn.addEventListener("click", addToCart);

    div.append(p_img, p_name, p_brand, p_price, btn);

    products_div.append(div);
  });
}
showProducts(JSON.parse(localStorage.getItem("products")));

function sortLH() {
  let products = JSON.parse(localStorage.getItem("products"));

  products = products.sort(function (a, b) {
    return a.price - b.price;
  });
  showProducts(products);
}

function sortHL() {
  let products = JSON.parse(localStorage.getItem("products"));

  products = products.sort(function (a, b) {
    return b.price - a.price;
  });
  showProducts(products);
}

function addToCart() {
  window.location.href = "cart.html";

}
