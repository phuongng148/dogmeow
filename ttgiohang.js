/*var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementByClassName('close')[0];
var close_footer = document.getElementsByClassName('close-footer')[0];
var order = document.getElementsByClassName('order')[0];
btn.onclick = function () {
    modal.style.display = "block";
  }
  close.onclick = function () {
    modal.style.display = "none";
  }
  close_footer.onclick = function () {
    modal.style.display = "none";
  }
  order.onclick = function () {
    alert("Cảm ơn bạn đã thanh toán đơn hàng")
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }*/
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("cart");
    var close = document.getElementsByClassName("close")[0];
    var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//xóa cart
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
  })
}
// update cart 
function updatecart() {
    var cart_item = document.getElementsByClassName("cart-items")[0];
    var cart_rows = cart_item.getElementsByClassName("cart-row");
    var total = 0;
    for (var i = 0; i < cart_rows.length; i++) {
      var cart_row = cart_rows[i]
      var price_item = cart_row.getElementsByClassName("cart-price ")[0]
      var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
      var price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
      var quantity = quantity_item.value // lấy giá trị trong thẻ input
      total = total + (price * quantity)
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ'
    // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
  }
  // thay đổi số lượng sản phẩm
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}
// Thêm vào giỏ
/*var add_cart = document.getElementsByClassName("btn-cart");
for (var i = 0; i < add_cart.length; i++) {
  var add = add_cart[i];
  add.addEventListener("click", function (event) {

    var button = event.target;
    var product = button.parentElement.parentElement;
    var img = product.parentElement.getElementsByClassName("img-prd")[0].src
    var title = product.getElementsByClassName("content-product-h4")[0].innerText
    var price = product.getElementsByClassName("price")[0].innerText
    addItemToCart(title, price, img)
    // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
    modal.style.display = "block";
    
    updatecart()
  })
}

function addItemToCart(title, price, img) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cart_title = cartItems.getElementsByClassName('cart-item-title')
  
  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
      return
    }
  }

  var cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Xóa</button>
  </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
    var button_remove = Event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}*/
/*function addToCart(event) {
  // Lấy phần tử nút bấm và thẻ cha gần nhất có class "san-pham-"
  var button = event.target;
  var productElement = button.closest('.san-pham-');

  // Lấy thông tin sản phẩm từ thẻ HTML
  var img = productElement.querySelector('img').src;
  var title = productElement.querySelector('h4').innerText;
  var price = productElement.querySelector('p').innerText;
// Gọi hàm thêm sản phẩm vào giỏ hàng
addItemToCart(title, price, img);
modal.style.display = "block";
updatecart();
}
function addItemToCart(title, price, img) {
  var cartItems = document.querySelector('.cart-items');

  // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
  var cartItemNames = cartItems.querySelectorAll('.cart-item-title');
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText === title) {
          alert('Sản phẩm đã có trong giỏ hàng');
          return;
      }
  }

  // Tạo phần tử giỏ hàng mới
  var cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  cartRow.innerHTML = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${img}" width="100" height="100">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">Xóa</button>
      </div>`;
  
  cartItems.append(cartRow);

  // Thêm sự kiện cho nút "Xóa"
  cartRow.querySelector('.btn-danger').addEventListener('click', function() {
      cartRow.remove();
      updatecart();
  });

  // Thêm sự kiện thay đổi số lượng
  cartRow.querySelector('.cart-quantity-input').addEventListener('change', function(event) {
      var input = event.target;
      if (isNaN(input.value) || input.value <= 0) {
          input.value = 1;
      }
      updatecart();
  });
}

function updatecart() {
  console.log("Cập nhật giỏ hàng"); // Bạn có thể thêm logic tính tổng tiền ở đây.
}

// Khởi tạo sự kiện cho tất cả các nút "Mua hàng"
var buttons = document.querySelectorAll('.b-mua');
buttons.forEach(function(button) {
  button.addEventListener('click', addToCart);
});*/