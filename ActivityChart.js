import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import styles from './ActivityChart.module.css';

// Register Chart.js components
Chart.register(...registerables);

const ActivityChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['5', '9', '11', '13', '15', '17', '19', '21'],
      datasets: [
        {
          label: 'Activity',
          data: [5000, 7000, 9000, 6000, 10000, 12000, 9000, 11000],
          fill: false,
          backgroundColor: 'skyblue',
          borderColor: 'black',
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };

    // Create chart instance
    const chartInstance = new Chart(chartRef.current, {
      type:'bar',
      data: data,
      options: options,
    });

    return () => {
      // Destroy chart instance on component unmount
      chartInstance.destroy();
    };
  }, []);

  return (
    <div className={styles.chartContainer}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};


export default ActivityChart;
