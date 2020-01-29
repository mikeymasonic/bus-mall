const results = JSON.parse(localStorage.getItem('votes'));


const votes = [];
const labels = [];

results.forEach(item => {
    votes.push(item.votes);
    labels.push(item.id);
});

const ctx = document.getElementById('results').getContext('2d');


new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Total Votes: ' + votes.length,
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