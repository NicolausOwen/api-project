import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const prices = coinHistory?.prices?.map(p => p[1]);
  const timestamps = coinHistory?.prices?.map(p =>
    new Date(p[0]).toLocaleDateString()
  );

  const data = {
    labels: timestamps,
    datasets: [
      {
        label: `Harga ${coinName}`,
        data: prices,
        fill: false,
        borderColor: "#0071bd",
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "white" },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          color: "white",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
      },
    },
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl">
      <h2 className="text-xl font-bold text-white mb-2">{coinName} Price Chart</h2>
      <p className="text-sm text-gray-300 mb-1">Current Price: ${currentPrice}</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
