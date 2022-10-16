import React from "react";
import { useEffect, useState } from "react";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  ChartData,
  LinearScale,
  LineElement,
  LineController,
  PointElement,
  BarController,
  ChartOptions,
  Legend,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

export default function DoughnutChart() {
  const ChartData = {
    labels: [
      "2019.03",
      "2019.06",
      "2019.09",
      "2019.12",
      "2020.03",
      "2020.06",
      "2020.09",
      "2020.12",
      "2021.03",
      "2021.06",
      "2021.09",
      "2021.12",
      "2022.03",
      "2022.06",
    ],
    datasets: [
      {
        label: "전국 20대이하 아파트매매 거래건수",
        data: [
          1436, 1511, 1839, 3814, 3337, 4341, 2848, 7098, 3896, 3279, 3440,
          2230, 2013, 1572,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
      {
        label: "전국 30대 아파트매매 거래건수",
        data: [
          7390, 7954, 10913, 21102, 17371, 23530, 14996, 29079, 16964, 13909,
          14162, 7280, 7479, 6042,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
      {
        label: "전국 40대 아파트매매 거래건수",
        data: [
          8892, 9769, 12559, 26445, 20989, 27815, 16021, 28824, 18068, 14719,
          13587, 7406, 7761, 6606,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
      {
        label: "전국 50대 아파트매매 거래건수",
        data: [
          7114, 7645, 9250, 17467, 16808, 20679, 11659, 19687, 13931, 11206,
          9441, 5783, 6812, 5951,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
      {
        label: "전국 60대 아파트매매 거래건수",
        data: [
          3910, 4152, 5080, 9620, 10088, 12254, 7433, 12807, 9754, 7491, 6525,
          3961, 4377, 3983,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
      {
        label: "전국 70대이상 아파트매매 거래건수",
        data: [
          1895, 1962, 2306, 4152, 4208, 5309, 3696, 6078, 5111, 3873, 3323,
          2045, 2254, 2032,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
    ],
  };

  Chart.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    LineController,
    PointElement,
    BarController,
    Legend,
    Tooltip
  );

  const configs: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return <Line options={configs} data={ChartData} />;
}
