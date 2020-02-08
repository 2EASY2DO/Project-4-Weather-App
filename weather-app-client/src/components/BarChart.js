import React, { Component } from 'react';
import Chart from 'chart.js'

class BarChart extends Component {


  componentDidMount() {
   this.getData();
  }

  getData = () => {
    fetch('http://localhost:3000/locations/1')
    .then(response => response.json())
    .then(json => this.prepareData(json))
    .then(data => this.createChart(data))
  }

  prepareData = (data) => {
      const chartData = {
          labels: [],
          datasets: [
              {
                  label: 'Avg High Temps',
                  data: [],
                  lineTension: 0,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)"
              },
              {
                  label: 'Avg Low Temps',
                  data: []
              }
          ]
      }

      data.temperatures.forEach( temperature => {
          chartData.labels.push(temperature.id);
          chartData.datasets[0].data.push(temperature.average_high_f);
          chartData.datasets[1].data.push(temperature.average_low_f);
      })

    console.log(chartData)
    return chartData;
  }

  createChart = (data) => {
    const ctx = document.querySelector('#temperatures');
    const tempsChart = new Chart(ctx, {
        type: 'bar',
        data: data
    })
  }


  render () {
    return (
      <>
        <h1>Temperatures</h1>
        <canvas id="temperatures" width="300" height="100"></canvas>
      </>
    )
  }
}

export default BarChart;
