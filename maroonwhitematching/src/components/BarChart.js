import React from 'react';
import '../Views/views.css';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  return(
        <Bar
          data = {{
            labels: ['Easy Going', 'Organized', 'Funny', 'Outdoorsy', 'Intellectual', 'Introverted'],
            datasets: [{
              label: 'Common Personality Types',
              data: [300,180,150,140,100,70],
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
          height = {50}
          width = {50}
          options={{ maintainAspectRatio: false}}
        />
  );
}

export default BarChart;
