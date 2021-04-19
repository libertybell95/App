import React from 'react';
import '../Views/views.css';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  return(
        <Pie
          data = {{
            labels: ['Freshman', 'Sophmore', 'Junior', 'Senior'],
            datasets: [{
              label: 'Total Students & Classifications',
              data: [12,19,3,5],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
            },
            ],
          }}
          height = {50}
          width = {50}
          options={{ maintainAspectRatio: false}}
        />
  );
}

export default PieChart;
