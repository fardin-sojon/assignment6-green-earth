
const manageSpiner = (status)=>{
    if(status == true){
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("card-container").classList.add("hidden");
    }
    else{
        document.getElementById("card-container").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");
    }
}


const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then((res) => res.json())
        .then((json) => displayCategories(json.categories))
}

const removeActive=()=>{
    const categoriesButton = document.querySelectorAll(".categorie-btn");
    const allCardHover = document.getElementById("allcards")
    allCardHover.classList.remove("active2")
    categoriesButton.forEach((btn) => btn.classList.remove("active"));
}

const loadCategoriesCard = (id) => {
    manageSpiner(true);
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            removeActive(); // remove all active class
            const clickBtn = document.getElementById(`categorie-btn-${id}`)
            clickBtn.classList.add("active"); //add active class
            displayCard(data.plants);
        })
}

const loadCardDetails= async(id)=>{
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    const res =await fetch(url);
    const details = await res.json();
    displayCardDetails(details.plants);
    
}

// {
//     "id": 10,
//     "image": "https://i.ibb.co.com/50K7Cgv/amla-min.jpg",
//     "name": "Amla Tree",
//     "description": "A small to medium tree producing fruits rich in Vitamin C and antioxidants. Its fruits are used in Ayurvedic tonics for boosting immunity.",
//     "category": "Medicinal Tree",
//     "price": 550
// }

const displayCardDetails =(card)=>{
    console.log(card);
    const detailsBox = document.getElementById("details-container");
    detailsBox.innerHTML = `
        <div class="space-y-2">
              <h2 class="font-bold text-xl">${card.name}</h2>
              <img class="h-60 w-full rounded-lg object-cover" src="${card.image}" alt="">
              <h4 class="font-bold">Category:<span class="font-normal"> ${card.category}</span></h4>
              <h5 class="font-bold">Price:<span class="font-normal"> ৳${card.price}</span></h5>
              <p class="font-bold">Description: <span class="font-normal">${card.description}</span></p>
            </div>
    `
    document.getElementById("card_details_modal").showModal();
}

const displayCard = (cards) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    for (let card of cards) {
        // console.log(card);
        const cardDiv = document.createElement("div");
        cardDiv.innerHTML = `
            <div class="bg-white p-5 space-y-3 rounded-xl">
              <img class="h-52 w-full object-cover" src="${card.image}" alt="" />
              <h3 onclick="loadCardDetails(${card.id})" class="text-lg font-bold">${card.name}</h3>
              <p>${card.description}</p>
              <div class="flex justify-between items-center">
                <h4 class="geist-font text-[#15803D] bg-[#DCFCE7] p-2 rounded-2xl">${card.category}</h4>
                <span>৳<span>${card.price}</span></span>
              </div>
              <button onclick="cartButtons('${card.name}', '${card.price}')" class="cart-btn btn  w-full runded-3xl text-white bg-[#15803D]">Add to Cart</button>
            </div>
        `
        cardContainer.append(cardDiv);
    }
    manageSpiner(false);
}

const displayCategories = (categories) => {
    // 1. get the container & empty
    const categoriesContainer = document.getElementById("categories-container");
    categoriesContainer.innerHTML = "";
    // 2. get into every categories
    for (let categorie of categories) {
        // console.log(categorie)
        // 3. create Element
        const categorieDiv = document.createElement("div");
        categorieDiv.innerHTML = `
            <button id="categorie-btn-${categorie.id}" onclick="loadCategoriesCard(${categorie.id})" class="hover:bg-[#15803D] hover:text-white p-2 rounded-md w-full text-left categorie-btn">${categorie.category_name}</button>
        `
        // 4. append into container
        categoriesContainer.append(categorieDiv);
    }
}

loadCategories()


// All Card Plants
const allLoadCard = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then((res) => res.json())
        .then((data) => {
            removeActive();
            const clickAllTree = document.getElementById("allcards")
            clickAllTree.classList.add("active2")
            displayAllCard(data.plants)
        })
}

const displayAllCard = (allCards) => {
    const AllCardContainer = document.getElementById("card-container");
    AllCardContainer.innerHTML = "";

    for (let allCard of allCards) {
        // console.log(card);
        const allCardDiv = document.createElement("div");
        allCardDiv.innerHTML = `
            <div class="bg-white p-5 space-y-3 rounded-xl">
              <img class="h-70 w-full" src="${allCard.image}" alt="" />
              <h3 onclick="loadCardDetails(${allCard.id})" class="text-lg font-bold">${allCard.name}</h3>
              <p>${allCard.description}</p>
              <div class="flex justify-between items-center">
                <h4 class="geist-font text-[#15803D] bg-[#DCFCE7] p-2 rounded-2xl">${allCard.category}</h4>
                <span>৳<span>${allCard.price}</span></span>
              </div>
              <button onclick="cartButtons('${allCard.name}', '${allCard.price}')" class="btn w-full rounded-3xl text-white bg-[#15803D]">Add to Cart</button>
            </div>
        `
        AllCardContainer.append(allCardDiv);
    }
}
allLoadCard()


// ================= Cart System =================
let total = 0; 
const cartButtons = async(name, price)=>{

    const selectedItem = {name, price}
    console.log(selectedItem);
    
    displayCart(selectedItem)
}


const displayCart = (cart) =>{

    console.log(cart);
    const cartContainer = document.getElementById("cart-container")

    const cartDiv = document.createElement("div")
    alert(`✅${cart.name} has been add to Cart 🛒`)
    cartDiv.innerHTML= `
        <div class="flex gap-5 justify-between items-center bg-[#F0FDF4] p-3 mt-3">
            <div>
              <h3 class="mb-1">${cart.name}</h3>
              <p>৳<span>${cart.price} x 1</span></p>
            </div>
            <span class="delete-btn cursor-pointer">❌</span>
        </div>
    `

    const deleteBtn = cartDiv.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        cartDiv.remove(); 
        total -= parseInt(cart.price); 
        document.getElementById("total").innerText = total;
    });

    cartContainer.append(cartDiv)  

    total += parseInt(cart.price);
    document.getElementById("total").innerText = total;
}