//BUSMALL - think about one thing at a time

import { products } from './api.js';

// keep track of how many times a user has voted, period (up to 25)
// keep track of votes for a given product

const productsData = products.slice();

function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.id === id) {
            return item;
        }
    }
}

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
const displayThreeProducts = (previousProduct1, previousProduct2, previousProduct3) => {
	// GET/SET three random products from our data
    let product1 = getRandomProduct(productsData);
    let product2 = getRandomProduct(productsData);
    let product3 = getRandomProduct(productsData);

	// make sure the products are unique/not the same
    while (product1.id === product2.id
			|| product2.id === product3.id
            || product1.id === product3.id
    ) {
        product2 = getRandomProduct(productsData);
        product3 = getRandomProduct(productsData);
    }

    while (previousProduct1 === product1.id || previousProduct1 === product2.id || previousProduct1 === product3.id || previousProduct2 === product1.id || previousProduct2 === product2.id || previousProduct2 === product3.id || previousProduct3 === product1.id || previousProduct3 === product2.id || previousProduct3 === product3.id) {
        product1 = getRandomProduct(productsData);
        product2 = getRandomProduct(productsData);
        product3 = getRandomProduct(productsData);
    }

    previousProduct1 = product1.id;
    previousProduct2 = product2.id;
    previousProduct3 = product3.id;
    
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
    let previousProductArray = [previousProduct1, previousProduct2, previousProduct3];
    // return previousProduct1, previousProduct2, previousProduct3;
    previousProductArray;


    const productDisplayArray = findById(productDisplayDetails);
    if (productDisplayArray) {
        productDisplayArray.timesDisplayed++;
        
    } else {

        productDisplayDetails.push({
            timesDisplayed: 1,
        });
    }
    localStorage.setItem('timesDisplayed', JSON.stringify(productDisplayDetails));

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
    

    //makes radio button checked false
    document.querySelector('input[name="product"]:checked').checked = false;

    //setting data into localStorage w an attribut of 'votes', then "stringifying" it so it plays nice w localStorage
    
    localStorage.setItem('votes', JSON.stringify(productVoteDetails));


	// EVENT LISTENER
	// add event listener to each radio button to select one of the three products
	// when they select a product, update the total votes
	// update the productVoteDetails
		// if theres coffee in the votes array, increment the votes for coffee
        // if theres no coffee, push some coffee into the array
        
    if (totalVotes >= 10) {
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