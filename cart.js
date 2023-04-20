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