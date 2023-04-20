

import Italiana from "../images/pizza-1.jpg";
import Greak from "../images/pizza-2.jpg";
import Caucasian from "../images/pizza-3.jpg";
import American from "../images/pizza-4.jpg";
import Tomatoe from "../images/pizza-5.jpg";
import Margherita from "../images/pizza-6.jpg";
import ItalianaBg from "../images/pizza-1-Bg.png";
import HawaiaSpecialBg from "../images/pizza-5-Bg.png";
import HawaiaBg from "../images/pizza-2-Bg.png";
import Ultimae from "../images/pizza-7-Bg.png";
import Bacon from "../images/pizza-8-Bg.png";
import Crispy from "../images/pizza-4-Bg.png";
import pricingImg from "../images/tre.png";
import juicy from '../images/juicyMix.png';
import cocaCola from '../images/juicyFruties.png';
import sprite from '../images/juicyOrange.png';
import burgerFirst from '../images/burger_1.png';
import burgerSecond from '../images/burger_2.png';
import burgerThird from '../images/burger_3.png';
import pastaFirst from '../images/pasta_1.png';
import pastaSecond from '../images/pasta_2.png';
import pastaThird from '../images/pasta_3.png';
import carT from "../images/bag.png";
import about from "../images/about.jpg";

import { HotPizzaMeals } from "./hotPizzaMeals";
import { OurMenuPricing } from "./ourMenuPricing"
import { HotPizzaMealsSecondRow } from './hotPizzaMeals';

import { ChoosingTypeOfProduct } from "./typeOfProducts";
import { ChangeBgForBtnCart } from "./cart";
import { RemoveBgForBtnCart } from "./cart";
import { AddSiblingElementToCart } from "./cart";

import { AddSiblingElementToCartSecond } from "./cart";


let dataForSectionHotPizzaMeals = [
  {
      name: "Italiana Pizza",
      desciption: "Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia",
      img: Italiana,
      price: "$2.00",
  },
  {

      name: "Greak Pizza",
      desciption: "Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia",
      img: Greak,
      price: "$2.30",
  },
  {

      name: "Caucasian Pizza",
      desciption: "Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia",
      img: Caucasian,
      price: "$2.45",
  },
];

let dataForSectionHotPizzaMealsSecondRow = [
  {
      name: "American Pizza",
      desciption: "a small river named Duden flows by their place and supplies",
      img: American,
      price: "$1.90",
  },
  {
      name: "Tomatoe Pizza",
      desciption: "a small river named Duden flows by their place and supplies",
      img: Tomatoe,
      price: "$2.20",
  },
  {
      name: "Margherita Pizza",
      desciption: "a small river named Duden flows by their place and supplies",
      img: Margherita,
      price: "$2.50",
  },
]

let dataForMenuPricing = [
  {
      name: "Italiana Pizza",
      desciption: "a small river named Duden flows by their place and supplies",
      img: ItalianaBg,
      price: "$29.00",
  },
  {

      name: "Hawaia Special",
      desciption: "a small river named Duden flows by their place and supplies",
      img: HawaiaSpecialBg,
      price: "$27.30",
  },
  {

      name: "Caucasian Pizza",
      desciption: "a small river named Duden flows by their place and supplies",
      img: HawaiaBg,
      price: "$21.45",
  },
  {
      name: "American Pizza",
      desciption: "a small river named Duden flows by their place and supplies",
      img: Ultimae,
      price: "$19.90",
  },
  {
      name: "Tomatoe Pizza",
      desciption: "a small river named Duden flows by their place and supplies",
      img: Bacon,
      price: "$30.20",
  },
  {
      name: "Margherita Pizza",
      desciption: "a small river named Duden flows by their place and supplies",
      img: HawaiaBg,
      price: "$21.50",
  },
  {
      name: "Crispy Pizza",
      desciption: "a small river named Duden flows by their place and supplies",
      img: Crispy,
      price: "$26.50",
  },
  {
      name: "Crispy Pizza",
      desciption: "a small river named Duden flows by their place and supplies",
      img: Crispy,
      price: "$22.50",
  },
]

let dataPizzaList = [
  {
      name: "Hawaia Pizza",
      desciption: "Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia",
      img: HawaiaBg,
      price: "$2.00",
  },
  {

      name: "Greak Pizza",
      desciption: "Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia",
      img: HawaiaSpecialBg,
      price: "$2.30",
  },
  {

      name: "Caucasian Pizza",
      desciption: "Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia",
      img: Ultimae,
      price: "$2.45",
  },
];
let dataDrinksList = [
  {
      name: "Juice for Vitamin C",
      desciption: "Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia",
      img: juicy,
      price: "$2.00",
  },
  {

      name: "Pink or Grapefruit Juice",
      desciption: "Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia",
      img: cocaCola,
      price: "$2.30",
  },
  {

      name: "Low-Sodium Orange Juice",
      desciption: "Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia",
      img: sprite,
      price: "$2.45",
  },
]
let dataPastaList = [
  {
      name: "Homemade Pasta",
      desciption: "Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia",
      img: pastaFirst,
      price: "$2.00",
  },
  {

      name: "Pasta tres quesos",
      desciption: "Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia",
      img: pastaSecond,
      price: "$2.30",
  },
  {

      name: "Basic Semolina Pasta",
      desciption: "Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia",
      img: pastaThird,
      price: "$2.45",
  },
]
let dataBurgerList = [
  {
      name: "Burger Chicken ",
      desciption: "Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia",
      img: burgerFirst,
      price: "$2.00",
  },
  {

      name: "Burger Hot Spicy",
      desciption: "Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia",
      img: burgerSecond,
      price: "$2.30",
  },
  {

      name: "Hot Burger with pork",
      desciption: "Far far away,behind the word mountains,far fram the countries Vakalia and Cansonantia",
      img: burgerThird,
      price: "$2.45",
  },
]


let pricingHeaderImg = document.querySelector('.menu-pricing-header__img');
pricingHeaderImg.src = pricingImg;

let selectFoodImg = document.querySelector('.select-img');
selectFoodImg.src = about;


OurMenuPricing(dataForMenuPricing);

HotPizzaMeals(dataForSectionHotPizzaMeals);

HotPizzaMealsSecondRow(dataForSectionHotPizzaMealsSecondRow);

ChoosingTypeOfProduct(dataPizzaList);



let btnPizzaItems = document.querySelector('.link-pizza');
let btnDrinksItems = document.querySelector('.link-two');
let btnBurgersitems = document.querySelector('.link-burgers');
let btmPastaItems = document.querySelector('.link-pasta');
let ChooseTypeOfProductList = document.querySelector('.select-section-list__item');

ChooseTypeOfProductList.addEventListener('click', function (e) {
  switch (e.target) {
      case btnPizzaItems:
          ChangeBgForBtnCart(btnPizzaItems);
          ChoosingTypeOfProduct(dataPizzaList);
          RemoveBgForBtnCart(btnBurgersitems);
          RemoveBgForBtnCart(btmPastaItems);
          RemoveBgForBtnCart(btnDrinksItems);
          break;
      case btnDrinksItems:
          ChangeBgForBtnCart(btnDrinksItems);
          ChoosingTypeOfProduct(dataDrinksList);
          RemoveBgForBtnCart(btnBurgersitems);
          RemoveBgForBtnCart(btmPastaItems);
          RemoveBgForBtnCart(btnPizzaItems);
          break;
      case btnBurgersitems:
          ChangeBgForBtnCart(btnBurgersitems);
          ChoosingTypeOfProduct(dataBurgerList);
          RemoveBgForBtnCart(btnDrinksItems);
          RemoveBgForBtnCart(btmPastaItems);
          RemoveBgForBtnCart(btnPizzaItems);
          break;
      case btmPastaItems:
          ChangeBgForBtnCart(btmPastaItems);
          ChoosingTypeOfProduct(dataPastaList);
          RemoveBgForBtnCart(btnDrinksItems);
          RemoveBgForBtnCart(btnBurgersitems);
          RemoveBgForBtnCart(btnPizzaItems);
          break;
  }
});

// cart

let cartIcon = document.querySelector('.menu__cart img');
cartIcon.src = carT;


let arrayForCartItems = [];
if (arrayForCartItems.length > 3) {
  arrayForCartItems.length = 0;
}

window.addEventListener('click', (e) => {

  let addToCartBtns = document.querySelectorAll(".menu-container-select-section__item-foods button");
  for (let el of addToCartBtns) {

      if (e.target == el) {

          let priceOfProducts = e.target.previousElementSibling;
          let descriptionOfProducts = priceOfProducts.previousElementSibling;
          let nameOfProducts = descriptionOfProducts.previousElementSibling;

          let dataForCartItem = {
              name: nameOfProducts.textContent,
              price: priceOfProducts.textContent,
          };
          arrayForCartItems.length = 0;
          arrayForCartItems.push(dataForCartItem);
      }


  }
})

window.addEventListener("click", function (e) {
  if (e.target == cartIcon) {
      document.querySelector("#my-modal").classList.add("open");
  }
})

let listProduct = document.querySelector('.menu__listOfProducts-pizza');
let btnOrder = document.querySelectorAll('.menu button');

let btnAddToCart = document.querySelectorAll('.menu-container-select-section__item-foods button');
let listProductSelectSection = document.querySelector('.menu-container-select-section__item-foods ');


listProduct.addEventListener('click', (e) => {
  for (let el of btnOrder) {
      if (e.target == el) {
          AddSiblingElementToCart(e.target);
      }
  }

});

listProductSelectSection.addEventListener('click', (e) => {
  for (let el of btnAddToCart) {
      if (e.target == el) {
          AddSiblingElementToCartSecond(e.target);
      }
  }
})


let buttonClosePopup = document.querySelector('#close-my-modal-btn svg');

// modal window
window.addEventListener("click", function (e) {

  if (e.target == buttonClosePopup) {

      document.querySelector("#my-modal").classList.remove("open");

  }
})

// close modal window , press Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal").classList.remove("open");
  }
});

//  Close modal window , click outside
document.querySelector("#my-modal .menu-cart-modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
// remove class
document.getElementById("my-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});














