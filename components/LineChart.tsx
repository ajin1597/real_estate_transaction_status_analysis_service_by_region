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
import { useRouter } from "next/router";
import { Bar } from "react-chartjs-2";

export default function DoughnutChart(props: any) {
  const router = useRouter();

  // console.log(props.data1);
  // console.log(props.data);
  // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
  //병신아 데이터 넘어온다 병신아 차트 만들어라 븅신아

  let dayData: any = props.data[0];
  let lastDayData: any = props.data[1];

  console.log(typeof dayData.INDICES);
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  console.log(lastDayData.INDICES);
  const a = dayData.INDICES - lastDayData.INDICES;

  console.log(a);

  const [inDicesData, setInDicesData] = useState("");

  const [ChartData, setChartData] = useState<
    ChartData<"bar", Number[], String>
  >({
    labels: ["January", "February"],
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 2],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
      },
    ],
  });

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
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  function chartAttribute() {
    setChartData({
      labels: [dayData.RESEARCH_DATE, lastDayData.RESEARCH_DATE],
      datasets: [
        {
          label: "123",
          data: [dayData.INDICES, lastDayData.INDICES],
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
          ],
        },
      ],
    });

    setInDicesData(String((dayData.INDICES - lastDayData.INDICES).toFixed(2)));
  }

  useEffect(() => {
    chartAttribute();
  }, [props]);

  return (
    <div className="flex justify-center items-center">
      <Bar data={ChartData} options={configs} />
      <div className="pl-[80px]">
        <div className="flex justify-center w-[160px] text-3xl">전월 대비</div>
        <div className="flex justify-center w-[160px] text-3xl">증감률(%)</div>
        <div className="flex justify-center items-center w-[150px] h-[150px] text-3xl border-2 bg-red-200 rounded-full">
          {inDicesData}%
        </div>
      </div>
    </div>
  );
}
