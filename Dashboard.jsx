import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  // Sample data for products and their availability percentages
  const products = [
    { name: 'Banana', quantity: 59 },
    { name: 'Apples', quantity: 34 },
    { name: 'Papa', quantity: 68 },
    { name: 'Kota', quantity: 45 },
    { name: 'Chips', quantity: 90 },
    { name: 'Drinks', quantity: 56 },
  ];

  const totalStock = products.reduce((acc, product) => acc + product.quantity, 0);

  // Prepare data for the bar chart
  const chartData = {
    labels: products.map(product => product.name),
    datasets: [
      {
        label: 'Percentage Available',
        data: products.map(product => product.quantity),
        backgroundColor: 'rgba(76, 175, 80, 0.6)', // Light green color
        borderColor: 'rgba(56, 142, 60, 1)', // Darker green border
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(56, 142, 60, 0.8)', // Slightly darker green on hover
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#4CAF50', // Green color for legend
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#4CAF50', // Green for x-axis ticks
          font: {
            size: 12,
          },
        },
      },
      y: {
        ticks: {
          color: '#4CAF50', // Green for y-axis ticks
          font: {
            size: 12,
          },
        },
        beginAtZero: true,
        max: 100, // Set maximum to 100% for percentage display
      },
    },
  };

  return (
    <div style={styles.dashboardContainer}>
      <h2 style={styles.heading}>Wings Cafe Dashboard</h2>
      <p style={styles.totalStock}>Total Products in Stock: {totalStock}</p>
      <div style={styles.chartContainer}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

// Style object for the Dashboard
const styles = {
  dashboardContainer: {
    textAlign: 'center',
    padding: '20px',
    margin: '10px auto',
    border: '1px solid #e0e0e0',
    borderRadius: '16px',
    backgroundColor: '#ffffff', // White background
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    width: '100%',
    boxSizing: 'border-box',
  },
  heading: {
    color: '#4CAF50', // Green for heading
    fontSize: '2em',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  totalStock: {
    color: '#4CAF50', // Green for total stock
    fontSize: '1.2em',
    fontWeight: '500',
    marginBottom: '20px',
    backgroundColor: '#e8f5e9', // Light green background for total stock
    padding: '10px',
    borderRadius: '8px',
    display: 'inline-block',
  },
  chartContainer: {
    padding: '20px',
    backgroundColor: 'rgba(244, 255, 244, 0.8)', // Light green chart background
    borderRadius: '16px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    height: '50vh', // Ensures the chart is responsive
    minHeight: '300px',
    overflowX: 'auto', // Allows scrolling on small screens
  },
};

export default Dashboard;
