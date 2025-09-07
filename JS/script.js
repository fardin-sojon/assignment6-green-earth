const loadCategories=()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res)=> res.json())
    .then((json) => displayCategories(json.categories))
}



const displayCategories=(categories)=>{
    // 1. get the container & empty
    const categoriesContainer = document.getElementById("categories-container");
    categoriesContainer.innerHTML= "";
    // 2. get into every categories
    for(let categorie of categories){
        // console.log(categorie)
        // 3. create Element
        const categorieDiv = document.createElement("div");
        categorieDiv.innerHTML = `
            <button class="hover:bg-[#15803D] hover:text-white p-2 rounded-md w-full text-left">${categorie.category_name}</button>
        `
        // 4. append into container
        categoriesContainer.append(categorieDiv);
    }
}


loadCategories()

const loadCard = ()=>{
    fetch("https://openapi.programming-hero.com/api/plants")
    .then((res)=>res.json())
    .then((json)=> displayCard(json.plants))
}

const displayCard = (cards)=>{
    const cardContainer = document.getElementById("card-container");
    // cardContainer.innerHTML = "";

    for(let card of cards){
        // console.log(card);
        const cardDiv = document.createElement("div");
        cardDiv.innerHTML=`
            <div class="bg-white p-5 space-y-3">
              <img class="h-100 w-full" src="${card.image}" alt="" />
              <h3 class="text-lg font-bold">${card.name}</h3>
              <p>${card.description}</p>
              <div class="flex justify-between items-center">
                <h4 class="text-[#15803D] bg-[#DCFCE7] p-2 rounded-2xl">${card.category}</h4>
                <span>৳<span>${card.price}</span></span>
              </div>
              <button class="btn w-full rounded-3xl text-white bg-[#15803D]">Add to Cart</button>
            </div>
        `
        cardContainer.append(cardDiv);
    }
}
loadCard()