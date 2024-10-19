// Create a simple line chart using Chart.js
const ctx = document.getElementById('revenueChart').getContext('2d');

const revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Monthly Revenue',
            data: [12000, 19000, 30000, 50000, 75000, 90000],
            borderColor: '#ff9800', /* Orange line */
            backgroundColor: 'rgba(255, 152, 0, 0.2)',
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});
