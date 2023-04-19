
export const HotPizzaMeals = (menu) => {

  for (let el of menu) {
    let menuListOfProducts = document.querySelector('.menu__listOfProducts-pizza');

    let divWrapperListProduct = document.createElement('div');
    divWrapperListProduct.className = 'menu__listOfProducts-wrapper';

    let img = document.createElement('img');

    img.src = el.img;
    menuListOfProducts.append(img);

    let divWrapperDescription = document.createElement('div');
    divWrapperDescription.className = 'desciption';

    let headerDescription = document.createElement('h3');
    headerDescription.className = "description__header";
    headerDescription.textContent = el.name;

    let descriptionText = document.createElement('p');
    descriptionText.className = "description__text";
    descriptionText.textContent = el.desciption;

    let priceWrapper = document.createElement('div');
    priceWrapper.className = "div__price-wrapper";


    let priceParagraph = document.createElement('p');
    priceParagraph.textContent = el.price;

    let btnOrder = document.createElement('button');
    btnOrder.className = "btn-order";
    btnOrder.textContent = "Order";


    priceWrapper.append(priceParagraph);
    priceWrapper.append(btnOrder);

    divWrapperDescription.append(headerDescription);
    divWrapperDescription.append(descriptionText);
    divWrapperDescription.append(priceWrapper);
    divWrapperListProduct.append(divWrapperDescription);
    menuListOfProducts.append(divWrapperListProduct);
  }
};


export const HotPizzaMealsSecondRow = (menu) => {

  for (let el of menu) {
    let menuListOfProducts = document.querySelector('.menu__listOfProducts-pizza');

    let divWrapperListProduct = document.createElement('div');
    divWrapperListProduct.className = 'menu__listOfProducts-wrapper';
   
    let imgPizza = document.createElement('img');
    imgPizza.src = el.img;


    let divDescription = document.createElement('div');
    divDescription.className = 'desciption';

    let priceWrapper = document.createElement('div');
    priceWrapper.className = "div__price-wrapper";

    let headerDescription = document.createElement('h3');
    headerDescription.className = "description__header";
    headerDescription.textContent = el.name;

    let descriptionText = document.createElement('p');
    descriptionText.className = "description__text";
    descriptionText.textContent = el.desciption;

    let priceParagraph = document.createElement('p');
    priceParagraph.textContent = el.price;

    let btn = document.createElement('button');
    btn.textContent = "Order";


    priceWrapper.append(priceParagraph);
    priceWrapper.append(btn);

    divDescription.append(headerDescription);
    divDescription.append(descriptionText);
    divDescription.append(priceWrapper);
    divWrapperListProduct.append(divDescription);
    menuListOfProducts.append(divWrapperListProduct);
    menuListOfProducts.append(imgPizza);
  }
};


export const OurMenuPricing = (menu) => {

  for (let el of menu) {
    let divPricingMenu = document.querySelector('#pricing');

    let divPricingContainer = document.createElement('div');
    divPricingContainer.className = "div__container";

    let divPricingItem = document.createElement('div');
    divPricingItem.className = "menu-item";

    let img = document.createElement('img');
    img.src = el.img;

    let nameOfPizza = document.createElement('p');
    nameOfPizza.innerHTML = el.name;
    nameOfPizza.className = "name__menu-pizza";

    let priceOfPizza = document.createElement('p');
    priceOfPizza.textContent = el.price;
    priceOfPizza.className = "p__price";

    let description = document.createElement('p');
    description.textContent = el.desciption;
    description.className = "description__pizza";

    let divWrapperForImage = document.createElement('div');
    divWrapperForImage.className = "wrapper__div-image";
    let divWrapperDescription = document.createElement('div');

    divWrapperForImage.append(nameOfPizza);
    divWrapperForImage.append(priceOfPizza);

    divWrapperDescription.append(description);
    divPricingItem.append(img);
    divWrapperForImage.append(divWrapperDescription);
    divPricingItem.append(divWrapperForImage);
    divPricingMenu.append(divPricingItem);
  }
};



let count = 0;
let counter = 0;

export const ChoosingTypeOfProduct  = (foods) => {

  let divContainerSelectFood = document.querySelector('.menu-container-select-section__item-foods');

  for (let el of foods) {

    let divItemsMenuWrapper = document.createElement('div');
    divItemsMenuWrapper.className = "div__itemsMenu" + counter;
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

export const AddSiblingElementToCart = (event) => {
 
  let sibling = event.parentElement;

  let parent = sibling.previousElementSibling;

  let name = parent.previousElementSibling;
 
  let price = event.previousElementSibling;

 
  let modalBox = document.querySelector('.modal__box-products');
  let nameOfProducts = document.createElement('p');
  nameOfProducts.textContent = name.textContent;

  let parPrice = document.createElement('p');
  parPrice.textContent = price.textContent;
  
  modalBox.append(nameOfProducts);
  modalBox.append(parPrice);
};
export const AddSiblingElementToCartSecond = (event) => {

  let price = event.previousElementSibling;
  
  let description = price.previousElementSibling;
  let name = description.previousElementSibling;
 


 
  let modalBox = document.querySelector('.modal__box-products');
  let nameOfProducts = document.createElement('p');
  nameOfProducts.textContent = name.textContent;

  let parPrice = document.createElement('p');
  parPrice.textContent = price.textContent;
  
  modalBox.append(nameOfProducts);
  modalBox.append(parPrice);
};

export const ChangeBgForBtnCart = (element) => {

  isChildren();
  element.style.color = "black";
  element.style.backgroundColor = 'brown';
  element.style.border = 'none';

};


const isChildren = () => {
  let div = document.querySelector('.menu-container-select-section__item-foods');

  if (div.children) {
    div.innerHTML = "";
  }
};

export const RemoveBgForBtnCart = (element) => {

  element.style.color = "rgb(243, 135, 12)";
  element.style.backgroundColor = "";
  element.style.border = "1px solid rgb(243, 135, 12)";
};







