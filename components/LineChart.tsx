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
      "2014.01",
      "2015.01",
      "2016.01",
      "2017.01",
      "2018.01",
      "2019.01",
      "2020.01",
      "2021.01",
      "2022.01",
    ],
    datasets: [
      {
        label: "전국 주택 매매 지수",
        data: [
          83.528, 84.875, 87.767, 88.368, 89.787, 90.512, 90.571, 95.916,
          104.719,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
      {
        label: "전국 주택 전세 지수",
        data: [
          86.911, 89.58, 93.798, 94.936, 95.458, 93.583, 92.859, 97.554, 103.25,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
      {
        label: "전국 아파트 매매 지수",
        data: [
          80.221, 82.257, 86.125, 86.768, 87.827, 87.526, 86.852, 94.145,
          106.284,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
      {
        label: "전국 아파트 전세 지수",
        data: [
          81.406, 85.201, 90.955, 92.548, 92.949, 90.076, 89.16, 96.312, 104.48,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
      {
        label: "전국 아파트 전세 지수",
        data: [
          81.406, 85.201, 90.955, 92.548, 92.949, 90.076, 89.16, 96.312, 104.48,
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
