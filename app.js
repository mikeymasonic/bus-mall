//BUSMALL - think about one thing at a time

import { products } from './api.js';

// keep track of how many times a user has voted, period (up to 25)
// keep track of votes for a given product

const productsData = products.slice();

function findById(items, id) {
    console.log(items);
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.id === id) {
            return item;
        }
    }
}



// const addResultsArray = (dataArray, id) => {
//     // const productThingList = productsData;
//     const product = findById(productsData.id);
//     console.log(product);
    
//     const productDisplayArray = dataArray.findById(id);
//     if (productDisplayArray) {
//         productDisplayArray.timesDisplayed++;  
//     } else {

//         productDisplayDetails.push({
//             name: product.name,
//             id: id,
//             apperanceCount: 1,
//             selectedCount: 0
//         });
//     }
// localStorage.setItem('whatever', JSON.stringify(productDisplayDetails));

// };

const results = [];

// function removeById(items, id) {
    
//     for (let i = 0; i < items.length; i++) {
//         const item = items[i];
//         if (item.id === id) {
            
//             return productsData.splice(i, 1);
            
//         }
//     }
// }

let totalVotes;
let productVoteDetails;
let productDisplayDetails;

const initializeState = () => {
    totalVotes = 0;
    productVoteDetails = [];
    productDisplayDetails = [];
};

initializeState();

// display three random NON-duplicated products
// display three NEW products ***refresh products between votes***)
const displayThreeProducts = () => {
	// GET/SET three random products from our data
    let product1 = getRandomProduct(productsData);
    let product2 = getRandomProduct(productsData);
    let product3 = getRandomProduct(productsData);

    // console.log(addResultsArray(results, product1.id), '-=------------');
    // results.addResultsArray(results, product2.id);
    // results.addResultsArray(results, product3.id);

    // if (previousProduct1 === undefined || previousProduct2 === undefined || previousProduct3 === undefined) { 
    //     //  block of code to be executed if condition1 is true
    // } else if (condition2) {
    // //  block of code to be executed if the condition1 is false and condition2 is true
    // } else {
    // //  block of code to be executed if the condition1 is false and condition2 is false
    // }

	// make sure the products are unique/not the same
    while (product1.id === product2.id
			|| product2.id === product3.id
            || product1.id === product3.id
    ) {
        product2 = getRandomProduct(productsData);
        product3 = getRandomProduct(productsData);
    }
    // console.log('+++++++++++++++++++++')
    // console.log(removeById(product1.id));
    // console.log(removeById(product2.id));
    // console.log(removeById(product3.id));
    // removeById(product2.id);
    // removeById(product3.id);

    // console.log('==========');
    // console.log(product1.id);
    // console.log(product2.id);
    // console.log(product3.id);

    

    // products.slice(previousProduct1, previousProduct1 + 1);
    // products.slice(previousProduct2, previousProduct2 + 1);
    // products.slice(previousProduct3, previousProduct3 + 1);


    // //previous product logic
    // while (previousProduct1 === product1.id || previousProduct1 === product2.id || previousProduct1 === product3.id || previousProduct2 === product1.id || previousProduct2 === product2.id || previousProduct2 === product3.id || previousProduct3 === product1.id || previousProduct3 === product2.id || previousProduct3 === product3.id) {
    //     product1 = getRandomProduct(productsData);
    //     product2 = getRandomProduct(productsData);
    //     product3 = getRandomProduct(productsData);
    // }

    // previousProduct1 = product1.id;
    // previousProduct2 = product2.id;
    // previousProduct3 = product3.id;

    // console.log('==============');
    // console.log(previousProduct1);
    // console.log(previousProduct2);
    // console.log(previousProduct3);
    
	// render these three items on the screen as radio buttons with the same name and different values
    //Get Elements
    const radio1 = document.getElementById('product1');
    const radio2 = document.getElementById('product2');
    const radio3 = document.getElementById('product3');
    const radio1Span = document.getElementById('product1span');
    const radio2Span = document.getElementById('product2span');
    const radio3Span = document.getElementById('product3span');
    const image1 = document.getElementById('img1');
    const image2 = document.getElementById('img2');
    const image3 = document.getElementById('img3');

    //Write to Elements
    radio1.value = product1.name;
    radio2.value = product2.name;
    radio3.value = product3.name;
    radio1Span.textContent = product1.name;
    radio2Span.textContent = product2.name;
    radio3Span.textContent = product3.name;
    image1.src = product1.image;
    image2.src = product2.image;
    image3.src = product3.image;

    // let previousProductArray = [previousProduct1, previousProduct2, previousProduct3];
    // // return previousProduct1, previousProduct2, previousProduct3;
    // previousProductArray;
};
    




//this is how to get the current value of radio button
//get the form from the HTML
const form = document.querySelector ('form');

form.addEventListener('submit', (e) => {
    //prevents the reload
    e.preventDefault();

    //create a new formdata class
    const formData = new FormData(form);

    const selectedProductId = (formData.get('product')); 

    totalVotes++;

    //whichever one they clicked on, see if they've voted for it before
    const productInVotesArray = findById(productVoteDetails, selectedProductId);

    if (productInVotesArray) {
        productInVotesArray.votes++;
        
    } else {
        // const newVoteObject = {
        //     id: selectedProductId,
        //     votes: 1,
        // };
        //any array has a push object to push things into it
        // productVoteDetails.push(newVoteObject);
        productVoteDetails.push({
            id: selectedProductId,
            votes: 1,
        });
    }

    // const displayedIDArray = findById(productDisplayDetails, selectedProductId);

    // if (displayedIDArray) {
    //     displayedIDArray.displayed++;
        
    // } else {
    //     // const newVoteObject = {
    //     //     id: selectedProductId,
    //     //     votes: 1,
    //     // };
    //     //any array has a push object to push things into it
    //     // productVoteDetails.push(newVoteObject);
    //     productDisplayDetails.push({
    //         id: selectedProductId,
    //         displayed: 1,
    //     });
    // }
    // console.log(displayedIDArray);
    
    

    //makes radio button checked false
    document.querySelector('input[name="product"]:checked').checked = false;

    //setting data into localStorage w an attribut of 'votes', then "stringifying" it so it plays nice w localStorage
    
    localStorage.setItem('votes', JSON.stringify(productVoteDetails));

    //test
	// EVENT LISTENER
	// add event listener to each radio button to select one of the three products
	// when they select a product, update the total votes
	// update the productVoteDetails
		// if theres coffee in the votes array, increment the votes for coffee
        // if theres no coffee, push some coffee into the array
        
    if (totalVotes >= 25) {
        // document.querySelector('button').disabled = true;
        // alert('Thanks for your participation!');
        window.location = 'results.html';
    }
    displayThreeProducts();
});

// FormData.addEventListener('submit', );

function reset() {
    initializeState();
};

function getRandomProduct(someProducts) {
    const randomIndex = Math.floor(Math.random() * productsData.length);
    const randomProduct = productsData[randomIndex];

    return randomProduct;
}

displayThreeProducts();
// reset the whole app when finished
	// reset the votes array ([]) and total votes(0) to their initial states

// STRECH don't show previous products
// STRECH keep track of how many times a products appears so we can build a percentage (times clicked / times shown)

//Things to ask questions about - how to make janky previous duplicate function to work
//How to display count for how many times an image was displayed