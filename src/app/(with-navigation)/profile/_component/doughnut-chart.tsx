'use client';
import { ArcElement, Chart, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
Chart.register(ArcElement, Tooltip);

const DoughnutChart = ({ data }: { data: [number, number, number] }) => {
  const chartData = {
    labels: ['예술', '책', '커리어'],
    datasets: [
      {
        label: '',
        data,
        backgroundColor: ['#0F172A', '#EC4899', '#A5B4FC'],
        hoverBackgroundColor: ['#0F172A', '#EC4899', '#A5B4FC'],
        borderWidth: 0,
        cutout: '30%',
      },
    ],
  };
  const options = {
    plugins: {
      legend: {},
    },
    layout: { padding: 0 },
    responsive: true,
  };

  return (
    <div className="relative h-60 w-60 p-7">
      <Doughnut options={options} data={chartData} />
    </div>
  );
};

export default DoughnutChart;
