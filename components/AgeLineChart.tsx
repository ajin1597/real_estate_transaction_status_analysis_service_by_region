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
        label: "전국 20대이하 주택매매 거래건수",
        data: [
          2275, 2374, 2844, 5311, 4692, 5981, 4086, 9133, 5626, 5308, 5233,
          3868, 3332, 2828,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
      {
        label: "전국 30대 주택매매 거래건수",
        data: [
          9685, 10408, 13289, 24859, 20971, 27991, 18226, 34005, 21156, 17827,
          17589, 9992, 10059, 8859,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
      {
        label: "전국 40대 주택매매 거래건수",
        data: [
          12871, 13793, 16449, 32737, 26228, 34521, 20610, 35662, 24054, 20315,
          18307, 11284, 11464, 10219,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
      {
        label: "전국 50대 주택매매 거래건수",
        data: [
          12249, 12753, 14567, 24957, 24251, 29272, 17231, 27374, 21826, 18477,
          15457, 10780, 11880, 11362,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
      {
        label: "전국 60대 주택매매 거래건수",
        data: [
          7556, 7538, 8521, 14341, 15358, 18254, 11666, 18705, 15842, 13026,
          11067, 7659, 8425, 8123,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
      {
        label: "전국 70대이상 주택매매 거래건수",
        data: [
          3370, 3253, 3658, 6018, 6246, 7727, 5622, 8527, 7851, 6184, 5248,
          3621, 3953, 3660,
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
