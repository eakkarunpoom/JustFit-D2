import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import activityList from "../../data/activity-type";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function MyChart({ goal }) {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Tracking History (Mins)',
          },
        },
      };
    const bg = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
    ]
    const labels = ['Activity'];
    const datasets = [];
    activityList.map((acItem, index) => {

        const totalDuration = goal.reduce((acc, cur) => {
            if (cur.activityType === acItem && cur.status === "done") {
                return acc + cur.duration
            } else {
                return acc;
            }
        }, 0)

        datasets.push({
            label: acItem,
            data: [totalDuration],
            backgroundColor: bg[index],
        })
    })
    
    const data = {
        labels,
        datasets,
    };
  
    return <Bar options={options} data={data} />;
}
  

export default MyChart;