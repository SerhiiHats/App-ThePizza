let count = 0;
let counter = 0;

export const ChoosingTypeOfProduct  = (foods) => {

  let divContainerSelectFood = document.querySelector('.menu-container-select-section__item-foods');

  for (let el of foods) {

    let divItemsMenuWrapper = document.createElement('div');
    divItemsMenuWrapper.className = "div__itemsMenu" + counter;
    divItemsMenuWrapper.classList.add("test")
    counter++;

    if (counter >= 3) {
      counter = 0;
    }

    let img = document.createElement('img');
    img.src = el.img;

    let nameOfPizza = document.createElement('p');
    nameOfPizza.textContent = el.name;
    nameOfPizza.className = "name-pizza";

    let divWrapperDescription = document.createElement('div');
    divWrapperDescription.className = "descriptionOfProducts__wrapper";

    let desciptionOfPizza = document.createElement('p');
    desciptionOfPizza.textContent = el.desciption;
    desciptionOfPizza.className = "description-pizza";

    let priceOfPizza = document.createElement('p');
    priceOfPizza.textContent = el.price;
    priceOfPizza.className = "pizza-price";

    let btnAddToCart = document.createElement('button');

    btnAddToCart.textContent = "Add to cart";
    btnAddToCart.className = 'btn__addToCart' + count;
    count++;

    if (count >= 3) {
      count = 0;
    }

    divItemsMenuWrapper.append(img);
    divItemsMenuWrapper.append(nameOfPizza);
    divWrapperDescription.append(desciptionOfPizza);
    divItemsMenuWrapper.append(divWrapperDescription);
    divItemsMenuWrapper.append(priceOfPizza);
    divItemsMenuWrapper.append(btnAddToCart);
    divContainerSelectFood.append(divItemsMenuWrapper);
  }
};