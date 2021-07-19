let carts = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0j8s43SRGSEHvkkBwSH1mrJIfDYiqK0sXw&usqp=CAU",
      name: "Mobile",
      brand: "samsung",
      price: "1000",
    },
]
if (localStorage.getItem("carts") == null) {
    localStorage.setItem("carts", JSON.stringify(carts));
  }
function showCarts() {

  let carts_div = document.getElementById("cart");

  carts.forEach(function (el) {

  let div = document.createElement("div");

  let p_img = document.createElement("img");
  p_img.src = el.img;

  let p_name = document.createElement("p");
  p_name.innerHTML = el.name;

  let p_brand = document.createElement("p");
  p_brand.innerHTML = el.brand;

  let p_price = document.createElement("p");
  p_price.innerText = el.price;

  div.append(p_img, p_name, p_brand, p_price);

  carts_div.append(div);
  })
}
showCarts()

function checkout(){
    window.location.href = "checkoutPage.html"
}