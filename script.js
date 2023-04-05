<button onclick="index.href='product.html'">Chuyển đến sản phẩm</button>

var navLinks = document.getElementById("navLinks");

function showMenu(){
     navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}