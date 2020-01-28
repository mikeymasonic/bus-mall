import { productData } from './api.js';
// import { ProductArray } from './ProductArray.js';

// const buttonLinks = document.getElementById('buttonLinks');
const button = document.getElementById('button');
// const productImageTags = document.querySelectorAll('img');
// const productRadioTags = document.querySelectorAll('input');
// const productName = document.getElementById('product-name');

// const clicksDisplay = document.getElementById('status-count');

// const products = new ProductArray(productData);
// let totalClicks = 0;

function getRandomPictures() {
    const randomNumber1 = Math.floor(Math.random() * productData.length);
    let productArray1 = productData[randomNumber1];
    productData.splice(randomNumber1, randomNumber1 + 1);

    const randomNumber2 = Math.floor(Math.random() * productData.length);
    let productArray2 = productData[randomNumber2];
    productData.splice(randomNumber2, randomNumber2 + 1);

    const randomNumber3 = Math.floor(Math.random() * productData.length);
    let productArray3 = productData[randomNumber3];
    productData.splice(randomNumber3, randomNumber3 + 1);

    console.log(randomNumber1, randomNumber2, randomNumber3);
    
    
    const image1 = document.getElementById('img1');
    const image2 = document.getElementById('img2');
    const image3 = document.getElementById('img3');

    image1.src = productArray1.image;
    image2.src = productArray2.image;
    image3.src = productArray3.image;

    // let previousOne = productArray1;
    // let previousTwo = productArray2;
    // let previousThree = productArray3;

    // if (previousOne === currentState1) {

    // }

    console.log(image1);
    console.log(image2);
    console.log(image3);

    return [productArray1, productArray2, productArray3];

}

getRandomPictures();

button.addEventListener('click', () => {

    const userInput = document.querySelector('input:checked');
    console.log(userInput);
    return userInput.value;
    getRandomPictures();
    

});

