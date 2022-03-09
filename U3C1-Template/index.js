document.querySelector("#product_form").addEventListener("submit",myFormSubmit);
var productarr = JSON.parse(localStorage.getItem("productDetails")) || [];
function myFormSubmit(){
 event.preventDefault();   
var productobj={
    name: document.querySelector("#name").value,
    price:document.querySelector("#price").value,
    type: document.querySelector("#type").value,
    image:document.querySelector("#image").value,
};
productarr.push(productobj);
console.log(productarr);
localStorage.setItem("productDetails",JSON.stringify(productarr));

document.querySelector("#submit")
        .addEventListener("click",function() {
            windows.location.href="/inventory.html";
        });
    }
