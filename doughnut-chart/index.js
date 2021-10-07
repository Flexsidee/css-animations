const data = {
  labels: [
    'Normal Events',
    'Incidents',
    'Shut Downs'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [85, 10, 5],
    backgroundColor: [
      '#59D7EA',
      '#FFC800',
      '#FF0000',
    ],
    hoverOffset: 4
  }]
};

const config = {
  type: 'doughnut',
  data: data,
  options:{
      rotation: 350,
      cutout: '60%',
      radius: '80%',
      aspectRatio: 1.5,
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
                }
            },
            position: 'right',
        },
        datalabels: {
        color: '#fff',
        display: true, 
        formatter: function (value, ctx) {
          return ((value * 100) / total).toFixed(2) + '%'; 
        },
      },
    }
  }
};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);