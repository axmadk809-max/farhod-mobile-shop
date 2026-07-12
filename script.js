// ===== SAVAT =====
let count = 0;
let total = 0;

const counter = document.getElementById("count");
const cartItems = document.getElementById("cartItems");
const totalText = document.getElementById("total");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");
const cartBtn = document.querySelector(".cart");

// Mahsulotni savatga qo'shish
document.querySelectorAll(".buy").forEach(btn => {

    btn.addEventListener("click", () => {

        const card = btn.closest(".card");

        const name = card.querySelector("h3").innerText;
        const priceText = card.querySelector(".price").innerText;
        const price = Number(priceText.replace(/\D/g, ""));

        count++;
        total += price;

        if(counter) counter.textContent = count;
        if(totalText) totalText.textContent = total.toLocaleString();

        const item = document.createElement("div");
        item.className = "cart-item";
        item.dataset.price = price;

        item.innerHTML = `
            <h4>${name}</h4>
            <p>${price.toLocaleString()} so'm</p>
            <button class="remove">🗑️  O'chirish</button>
            <hr>
        `;

        cartItems.appendChild(item);

        if(cartPanel){
            cartPanel.classList.add("open");
        }

    });

});

// Savatni ochish
if(cartBtn){
    cartBtn.onclick = () => {
        cartPanel.classList.add("open");
    };
}

// Savatni yopish
if(closeCart){
    closeCart.onclick = () => {
        cartPanel.classList.remove("open");
    };
}

// Savatdan o'chirish
cartItems.addEventListener("click", e => {

    if(e.target.classList.contains("remove")){

        const item = e.target.closest(".cart-item");

        const price = Number(item.dataset.price);

        total -= price;
        count--;

        if(total < 0) total = 0;
        if(count < 0) count = 0;

        if(totalText) totalText.textContent = total.toLocaleString();
        if(counter) counter.textContent = count;

        item.remove();

    }

});

// ===== LIKE =====

document.querySelectorAll(".like").forEach(btn=>{

    btn.onclick=()=>{

        btn.classList.toggle("active");

        if(btn.classList.contains("active")){
            btn.innerHTML="❤️";
        }else{
            btn.innerHTML="🤍";
        }

    }

});

// ===== QIDIRUV =====

const search=document.getElementById("search");

if(search){

search.addEventListener("keyup",()=>{

const text=search.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

card.style.display=
card.innerText.toLowerCase().includes(text)
?"":"none";

});

});

}

// ===== DARK MODE =====

const mode=document.getElementById("mode");

if(mode){

mode.onclick=()=>{

document.body.classList.toggle("dark");

mode.innerHTML=
document.body.classList.contains("dark")
?"☀️":"🌙";

};

}

// ===== BUYURTMA =====

function sendOrder(){

const name=document.getElementById("name").value;
const phone=document.getElementById("phone").value;
const product=document.getElementById("product").value;

if(name==""||phone==""||product==""){

alert("Barcha maydonlarni to'ldiring!");
return;

}

alert("✅ Rahmat, "+name+"\nBuyurtmangiz qabul qilindi!");

}
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(() => {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

}, 3000);
setTimeout(() => {
    splash.style.opacity = "0";
}, 999999999999);