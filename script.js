// var xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
// var yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

// new Chart("myChart", {
//     type: "line",
//     data: {
//         labels: xValues,
//         datasets: [{
//             backgroundColor: "rgba(0,0,0,0)",
//             borderColor: "rgba(125, 130, 240, 1)",
//             data: yValues
//         }]
//     },
//     options: {}
// });

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

const tabArea = document.querySelector('.tabs');
const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab) => tab.classList.remove('active'))

        tab.classList.add('active')
    })
})

// tabArea.addEventListener('click', (e) => {
//     tabs.forEach((tab) => tab.classList.remove('active'));
//     e.target.classList.add('active');
// })
