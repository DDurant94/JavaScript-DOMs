let products = [
  { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
  { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
  { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts(){
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const productLi = document.createElement("li");
    productLi.innerHTML = `<h3>${product.name}</h3>
                            <p>Price: $${product.price.toFixed(2)}</p>
                            <p>${product.description}</p>
                            <button id="bttn" type="submit" style="border-radius: 5%; background-color: black; color: white;">Add to Cart </button>`;
                            
    productList.appendChild(productLi)
  })
}

document.addEventListener("DOMContentLoaded",displayProducts)

function backgroundChange(){
  
  const liBackgroundChange = document.getElementById("product-list");
  console.log(liBackgroundChange)
  liBackgroundChange.addEventListener("mouseover",function (){
    liBackgroundChange.style.backgroundColor = 'blue';
  });

  liBackgroundChange.addEventListener("mouseout", function(){
    liBackgroundChange.style.backgroundColor = 'red';
  });

}






