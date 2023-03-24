import Chart from 'chart.js/auto'


const get = data => {
  const years = []
  const temps = []
  const rows = data.split('\n').slice(1)

  rows.forEach(row => {
    const cells = row.split(',')
    const year = cells[0]
    const temp = cells[1]
    years.push(year)
    temps.push(parseFloat(temp) + 14)
  })

  const ctx = document.querySelector('canvas')

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: 'global average temperature',
        data: temps,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })

}

fetch('csv.csv').then(res => res.text()).then(data => get(data))

