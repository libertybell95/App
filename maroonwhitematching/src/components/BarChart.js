import React from 'react';
import '../Views/views.css';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  return(
      <div>
        <Bar
          data = {{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: 'Common Personality Types',
              data: [12,19,3,5,3,5],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 10
            },
            ],
          }}
          height = {10}
          width = {20}
          options={{ maintainAspectRatio: false }}
        />
      </div>
  );
}

export default BarChart;
