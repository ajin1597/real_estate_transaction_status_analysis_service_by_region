import React from "react";
import { useEffect, useState } from "react";
import {
  ArcElement,
  LinearScale,
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  ChartData,
  LineController,
  LineElement,
  PointElement,
  ChartOptions,
  Legend,
  Tooltip,
} from "chart.js";
import { useRouter } from "next/router";
import { Bar } from "react-chartjs-2";

export default function DoughnutChart(props: any) {
  const router = useRouter();

  console.log(props.data);
  // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
  //병신아 데이터 넘어온다 병신아 차트 만들어라 븅신아

  const [ChartData, setChartData] = useState<
    ChartData<"bar", Number[], String>
  >({
    labels: ["January", "February"],
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 2],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });

  Chart.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );

  const configs: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  function chartAttribute() {
    setChartData({
      labels: ["", " "],
      datasets: [
        {
          label: "123",
          data: [0, 0],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });
  }

  // useEffect(() => {
  //   chartAttribute();
  //   // router.reload();
  // }, [props.apartDdata, props.apartSdata, props.houseDdata, props.houseSdata]);

  return <Bar data={ChartData} options={configs} />;
}
