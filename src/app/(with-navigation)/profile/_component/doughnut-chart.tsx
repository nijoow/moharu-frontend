'use client';
import { ArcElement, Chart, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
Chart.register(ArcElement, Tooltip);

const DoughnutChart = ({ data }: { data: [number, number, number] }) => {
  // 모든 data 값이 0 일때
  const isEmpty = data.every(value => value === 0);

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
    <div className="flex">
      <div className="relative h-60 w-60 p-7">
        {isEmpty ? (
          <div className="relative h-[190px] w-[190px] rounded-full bg-slate-50">
            <div className="absolute left-[65px] top-[65px] flex h-[60px] w-[60px] transform items-center justify-center rounded-full bg-white">
              ?
            </div>
          </div>
        ) : (
          <Doughnut options={options} data={chartData} />
        )}
      </div>
      <div className="flex h-[180px] flex-col justify-center">
        <div className="flex h-32px items-center">
          <div className="mr-12px h-12px w-12px rounded-full bg-slate-900"></div>
          예술
        </div>
        <div className="flex h-32px items-center">
          <div className="mr-12px h-12px w-12px rounded-full bg-pink-500"></div>
          책
        </div>
        <div className="flex h-32px items-center">
          <div className="mr-12px h-12px w-12px rounded-full bg-indigo-300"></div>
          커리어
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
