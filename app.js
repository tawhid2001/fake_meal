const get_value = () => {
  const inval = document.getElementById("input_val").value;
  searchmenu(inval);
};

const searchmenu = (char) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${char}`)
    .then((res) => res.json())
    .then((data) => display(data));
};

const display = (menus) => {
  const mainCon = document.getElementById("display-cards");
  menus.meals.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("card_con");
    

    div.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="${element.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body d-flex justify-content-center flex-column">
    <p class="card-text text-center h4">${element.strMeal}</p>
    <p class="card-text text-center">${element.strCategory}</p>
    <a href="#" class="btn btn-primary" onclick="findDitails('${element.idMeal}')">Details</a>
  </div>
</div>
        `;
    mainCon.appendChild(div);
  });
};



const findDitails = (id) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => displayDitails(data));
}


const displayDitails = (product) =>{
    const mealsObj = product.meals[0];
    const id = mealsObj.idMeal;
    const name = mealsObj.strMeal;
    const cuisine = mealsObj.strArea;
    const catergory= mealsObj.strCategory;
    
    const detailCon = document.getElementById("details-card");

    const div = document.createElement("div");
    div.classList.add("card-con");

    div.innerHTML = `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <p class="card-text">ID: ${id}</p>
    <p class="card-text">Name: ${name}</p>
    <p class="card-text">Cuisine: ${cuisine}</p>
    <p class="card-text">Category: ${catergory}</p>
    <p class="card-text"></p>
  </div>
</div>
    `;

    detailCon.appendChild(div);
}