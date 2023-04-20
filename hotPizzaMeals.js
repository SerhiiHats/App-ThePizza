export const HotPizzaMeals = (menu) => {

    for (let el of menu) {
        let menuListOfProducts = document.querySelector('.menu__listOfProducts-pizza');

        let divWrapperListProduct = document.createElement('div');
        divWrapperListProduct.className = 'menu__listOfProducts-wrapper';

        let img = document.createElement('img');

        img.src = el.img;
        // menuListOfProducts.append(img);
        divWrapperListProduct.append(img)

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