import React from "react";
 import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';

 import {Doughnut} from 'react-chartjs-2';

 ChartJS.register( ArcElement, Tooltip, Legend );



function DonutChart(){

  const data = {
      labels: [],
      datasets: [
          {
              label: '',
              data: [70,30],
              borderColor: ['rgba(255,206,86,0.2)'],
              backgroundColor: ['#0051ff',
              'orange' ],
              pointBackgroundColor: 'rgba(255,206,86,0.2)',
          }
          
      ]
  }

  const options = {
  }

  return (
    <div>
      <Doughnut
          data = {data}
          options = {options}
      ></Doughnut>
    </div>
  );
}

export default DonutChart;


