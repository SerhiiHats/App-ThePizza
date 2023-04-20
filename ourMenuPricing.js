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
      divWrapperDescription.classList = "wrapper-nameAnd-price";
  
   
      divWrapperDescription.append(nameOfPizza);
      divWrapperDescription.append(priceOfPizza);
  
      
      divPricingItem.append(img);
      divWrapperForImage.append(divWrapperDescription);
      divWrapperForImage.append(description);
      divPricingItem.append(divWrapperForImage);
      divPricingMenu.append(divPricingItem);
    }
  };