const results = JSON.parse(localStorage.getItem('votes'));
const displaytime = JSON.parse(localStorage.getItem('timesDisplayed'));


const votes = [];
const labels = [];
const displayDink = [];




// const timesDisplayed = [];

results.forEach(item => {
    votes.push(item.votes);
    labels.push(item.id + ' ' + item.votes);
    
});


let sumOfVotes = votes.reduce(function(a, b){
    return a + b;
}, 0);


displaytime.forEach(item => {
    displayDink.push(item.timesDisplayed);
    
});
console.log(displayDink);


const ctx = document.getElementById('results').getContext('2d');


new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Total Votes: ' + sumOfVotes,
            data: votes,
            backgroundColor: ['lightblue', 'blue', 'yellow', 'green', 'purple', 'orange', 'lightblue', 'blue', 'yellow', 'green', 'purple', 'orange', 'lightblue', 'blue', 'yellow', 'green', 'purple', 'orange', 'lightblue', 'blue', 'yellow', 'green', 'purple', 'orange']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

document.getElementById('results').textContent = JSON.stringify(results, 0, 2);