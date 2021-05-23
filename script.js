console.log("connected");

// let cart = [];
let cartObj = {};

const listOfItems = {
  blouse1: 49,
  blouse2: 49,
  blouse3: 49,
  shal1: 29,
  shal2: 29,
  shal3: 29,
  accessories1: 19,
  accessories2: 19,
  accessories3: 19,
};

let previewImage = document.getElementById("previewImage");

function showPreview(e) {
  let currentSrc = e.target.src;
  previewImage.src = currentSrc;
  previewImage.classList.toggle("hidden");
}

function removePreview() {
  previewImage.classList.toggle("hidden");
}

function addItemToCart(e) {
  //   console.log(e.target.id);
  //   console.log(e.target);
  let quantity = Number(
    document.getElementById(e.target.id + "Quantity").value
  );
  if (quantity === 0) return;
  //   console.log(quantity);
  //   let tempItem = {
  //     name: e.target.id,
  //     price: listOfItems[e.target.id],
  //     quantity: quantity,
  //   };
  //   cart.push(tempItem);

  cartObj[e.target.id]
    ? (cartObj[e.target.id][1] += quantity)
    : (cartObj[e.target.id] = [listOfItems[e.target.id], quantity]);

  //   console.log("item added");
  alert("Item added to cart");
}

function displayCart() {
  let total = 0;
  let detailsBox = document.getElementById("detailsText");
  let totalSum = document.getElementById("totalSum");

  //   for (let i = 0; i < cart.length; i++) {
  //     let paragraph = document.createElement("p");
  //     let textNode = document.createTextNode(
  //       `Item: ${cart[i].name}, Price: ${cart[i].price}, Quantity: ${
  //         cart[i].quantity
  //       }, Total: ${cart[i].price * cart[i].quantity}`
  //     );
  //     paragraph.appendChild(textNode);
  //     detailsBox.appendChild(paragraph);
  //     total += cart[i].price * cart[i].quantity;
  //   }
  detailsBox.innerHTML = "";
  for (item in cartObj) {
    let paragraph = document.createElement("p");
    let textNode = document.createTextNode(
      `Item: ${item}, Price: ${cartObj[item][0]}, Quantity: ${
        cartObj[item][1]
      }, Total: ${cartObj[item][0] * cartObj[item][1]}`
    );
    paragraph.appendChild(textNode);
    detailsBox.appendChild(paragraph);
    total += cartObj[item][0] * cartObj[item][1];
  }

  console.log(cartObj);

  totalSum.innerText = `Total Sum: ${total}`;
}

function clearCart() {
  cartObj = {};
  displayCart();
}
