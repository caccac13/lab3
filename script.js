let products = [
  {
    id: 1,
    img: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/c/o/combo_app_2024-04.png",
    name: "01 MIẾNG GÀ GIÒN VUI VẺ + 1 MỲ Ý SỐT BÒ BẰM + 01 NƯỚC NGỌT",
    price: "78",
  },
  {
    id: 2,
    img: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/h/_/h_nh_combo_500x500_px-02_1_.png",
    name: "VI VU HÈ, QUÀ TRAO TAY 3",
    price: "129",
  },
  {
    id: 3,
    img: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/h/_/h_nh_combo_500x500_px-03.png",
    name: "VI VU HÈ, QUÀ TRAO TAY 2",
    price: "129",
  },
  {
    id: 4,
    img: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/c/o/combo-02.png",
    name: "HÈ RỰC RỠ, ƯU ĐÃI HẾT CỠ 1",
    price: "79",
  },
  {
    id: 5,
    img: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/c/o/combo-02.png",
    name: "HÈ RỰC RỠ, ƯU ĐÃI HẾT CỠ 2",
    price: "79",
  },
  {
    id: 6,
    img: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/h/_/h_nh_combo_500x500_px-01_1__3.png",
    name: "VI VU HÈ, QUÀ TRAO TAY 1",
    price: "129",
  },
  {
    id: 7,
    img: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/1/_/1.2_h_nh_combo_500x500_px_-02.png",
    name: "ĂN THẢ GA, RINH ONG VỀ NHÀ 01",
    price: "135",
  },
  {
    id: 8,
    img: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/1/_/1.2_h_nh_combo_500x500_px_-02.png",
    name: "ĂN THẢ GA, RINH ONG VỀ NHÀ 02",
    price: "135",
  },
  {
    id: 9,
    img: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/c/o/combo_app_2024-01.png",
    name: "COMBO CẶP ĐÔI ĂN Ý 145K (2 GÀ GIÒN VUI VẺ + 2 MỲ Ý SỐT BÒ BẰM + 1 KHOAI VỪA + 2 NƯỚC NGỌT)",
    price: "145",
  },
  {
    id: 10,
    img: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/c/o/combo_app_2024-03_1_.png",
    name: "COMBO 185K (3 MIẾNG GÀ GIÒN + 2 MÌ Ý + 1 KHOAI VỪA + 3 NƯỚC NGỌT VỪA)",
    price: "185",
  },
  {
    id: 11,
    img: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/p/h/phan_an_app_295k.png",
    name: "COMBO 322K (2 MIẾNG GÀ GIÒN + 2 MÌ Ý + 2 CƠM GÀ GIÒN + 2 KHOAI TÂY VỪA + 2 BÁNH XOÀI ĐÀO + 4 NƯỚC NGỌT LỚN)",
    price: "322",
  },
  {
    id: 12,
    img: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/4/9/499k.jpg",
    name: "TIỆC KIỂU MỚI, QUÀ CHUẨN GU 499K",
    price: "499",
  },
  {
    id: 13,
    img: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/5/9/599kk.jpg",
    name: "TIỆC KIỂU MỚI, QUÀ CHUẨN GU 599K",
    price: "599",
  },
  {
    id: 14,
    img: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/z/5/z5491259380383_b410ca9fddbae4ef1495cdbf91f69d11.jpg",
    name: "TIỆC KIỂU MỚI, QUÀ CHUẨN GU 699K",
    price: "699",
  },
  {
    id: 15,
    img: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/e/e/ee8e7512368728-6mingggin_1.png",
    name: "6 MIẾNG GÀ GIÒN",
    price: "188",
  },
  {
    id: 16,
    img: "https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/9/2/92d27d47dadbfc-hambugerlon.jpg",
    name: "SANDWICH GÀ GIÒN",
    price: "30",
  },
];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", () => {
  fetchProducts(); // Tải sản phẩm khi trang được tải
  displayProduct(products);
  updateCartTotal();
});

saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
  sessionStorage.setItem("cart", JSON.stringify(cart));
  document.cookie = `cart=${JSON.stringify(cart)};path=/;max-age=${
    60 * 60 * 24 * 7
  }`;
};

showHomePage = () => {
  const mainContent = document.querySelector(".content");
  mainContent.classList.add("w1000-ce");
  mainContent.innerHTML = `
    <div class="product-content">
        <div class="product-info">
            <h3>Hôm nay ăn gì!!!</h3>
        </div>
    </div>
    <div class="filter">
        <label for="filterName">Lọc theo tên:</label>
        <input type="text" id="filterName" oninput="filterProducts()">
        <label for="filterPrice">Lọc theo giá:</label>
        <input type="number" id="filterPrice" oninput="filterProducts()">
    </div>
    <div class="list-prod"></div>
  `;
  displayProduct(products);
};

displayProduct = (products) => {
  let listProduct = document.querySelector(".content .list-prod");
  listProduct.classList.add("w1000-ce");
  listProduct.innerHTML = "";
  products.forEach((product) => {
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper-item";
    const productItem = document.createElement("div");
    productItem.className = "item";
    productItem.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <p class="name">${product.name}</p>
      <p class="price">${parseInt(product.price).toLocaleString()} <u>đ</u></p>
      <button onclick="addToCart(${product.id})">Mua ngay</button>
    `;
    wrapper.appendChild(productItem);
    listProduct.appendChild(wrapper);
  });
};

filterProducts = () => {
  const filterName = document.querySelector("#filterName").value.toLowerCase();
  console.log(filterName);
  const filterPrice = document.getElementById("filterPrice").value;
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(filterName) &&
      (!filterPrice || product.price <= filterPrice)
    );
  });
  displayProduct(filteredProducts);
};

updateCartTotal = () => {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  document.querySelector(".cart-total").textContent =
    "Tổng cộng: " + total.toLocaleString() + " đ";
};

displayCart = () => {
  const cartItemsElement = document.querySelector(".content");
  cartItemsElement.innerHTML = "";
  const listItem = document.createElement("div");
  listItem.className = "list-item";
  console.log(listItem);
  if (cart.length === 0) {
    cartItemsElement.innerHTML = "<p>Giỏ hàng của bạn đang trống.</p>";
    document.getElementById("cartTotal").textContent = "0 VND";
    return;
  }
  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <p class="mid"><span class="name">${item.name}</span><br>
            <span class="quantity">Số lượng: <input type="number" value="${
              item.quantity
            }" min="0" onchange="updateCart(${item.id}, this.value)"></span></p>
            <p class="price">${item.price.toLocaleString()} <u>đ</u></p>
            <p class="delete-item" onclick="removeFromCart(${
              item.id
            })"><i class="fa-solid fa-trash-can"></i></p>
        `;
    listItem.appendChild(cartItem);
    cartItemsElement.appendChild(listItem);
  });

  const footerCart = document.createElement("div");
  footerCart.className = "footer-cart";
  const cartTotal = document.createElement("div");
  cartTotal.className = "cart-total";
  cartTotal.innerHTML = `<p class="cart-total"></p>`;
  const pay = document.createElement("div");
  pay.className = "pay";
  pay.innerHTML = `<button onclick="pay()">Thanh toán</button>`;
  footerCart.appendChild(cartTotal);
  footerCart.appendChild(pay);
  listItem.appendChild(footerCart);
  updateCartTotal();
};

addToCart = (productId) => {
  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  alert("Đã thêm vào giỏ hàng!");
  updateCartTotal();
};

removeFromCart = (productId) => {
  cart = cart.filter((item) => item.id !== productId);
  displayCart();
  saveCart();
  updateCartTotal();
};

updateCart = (productId, quantity) => {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity = parseInt(quantity);
    if (isNaN(cartItem.quantity) || cartItem.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
      updateCartTotal();
    }
    displayCart();
  }
};

pay = () => {
  const mainContent = document.querySelector(".content");
  mainContent.innerHTML = `
        <div class="pay">
            <h1>Thanh Toán</h1>
            <form id="payForm">
                <label for="name">Họ và Tên:</label>
                <input type="text" id="name" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" required>
                
                <label for="address">Địa chỉ:</label>
                <input type="text" id="address" required>
                
                <label for="phone">Số điện thoại:</label>
                <input type="tel" id="phone" required>
                
                <button type="submit">Xác Nhận Thanh Toán</button>
            </form>
        </div>
    `;
  const checkoutForm = document.getElementById("payForm");
  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    processPayment();
  });
};

processPayment = () => {
  alert("Thanh toán thành công! Cảm ơn bạn đã mua sắm.");
  cart = []; // Xóa giỏ hàng
  saveCart(); // Cập nhật giỏ hàng trong bộ nhớ
  showHomePage();
};

fetchProducts = () => {
  showHomePage();
};
