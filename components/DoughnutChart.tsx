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
  PointElement,
  ChartOptions,
  Legend,
  Tooltip,
  Title,
} from "chart.js";
import { useRouter } from "next/router";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart(props: any) {
  const router = useRouter();

  let resultData: any = props.data[0];

  const [ChartData, setChartData] = useState<
    ChartData<"doughnut", Number[], String>
  >({
    labels: ["20대", "30대", "40대", "50대", "60대", "70대이상", "기타"],
    datasets: [
      {
        label: "123",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(153, 153, 153, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 153, 153, 1)",
        ],
        borderWidth: 3,
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
    Title
  );

  const configs: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        position: "top",
      },
      legend: {
        display: true,
        align: "center",
        position: "left",
        // maxWidth: 0,
        // maxHeight: 50,
      },
      tooltip: {
        mode: "index",
        intersect: true,
      },
    },
  };

  function chartAttribute() {
    setChartData({
      labels: ["20대", "30대", "40대", "50대", "60대", "70대이상", "기타"],
      datasets: [
        {
          label: "123",
          data: [
            resultData?.AGE01_CNT,
            resultData?.AGE02_CNT,
            resultData?.AGE03_CNT,
            resultData?.AGE04_CNT,
            resultData?.AGE05_CNT,
            resultData?.AGE06_CNT,
            resultData?.AGE07_CNT,
          ],
        },
      ],
    });
  }

  useEffect(() => {
    chartAttribute();
    // router.reload();
  }, [props]);

  return <Doughnut data={ChartData} options={configs}></Doughnut>;
}
