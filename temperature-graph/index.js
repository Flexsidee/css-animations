const labels = [
  12.04,
  13.04,
  14.04,
  15.04,
  16.04,
  17.04,
  18.04,
  19.04
];

const data = {
  labels: labels,
  datasets: [{
    label: 'Temperature F1',
    tension: 0.4,
    borderColor: '#59D7EA',
    data: [69.3, 68.6, 69.2, 68.5, 70.62, 70.4, 70.61]
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
        scales: {
            y: {
                type: 'linear',
                min: 68.0,
                max: 71.4,         
            },
            x: {
                grid:{
                    display: false,
                }
            }
        },
        elements: {
            point:{
                radius: 0
            }
        },
        layout: {
            padding: 0,
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#000',
                    font: {
                        size: 20,
                        weight: 'bold',
                    }
                },
                align: 'start', 
            }
        }
    }
};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);