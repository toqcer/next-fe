import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  BarElement,
  BarController,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  BarController,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend
);

const labels = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

// BorderColor and bgColor is a object color for x axis and y axis
const setup = (datas, bgColor, borderColor) => {
  const dataset = {
    // x: datas?.map((data) => data.x) || 0,
    y: datas?.map((data) => data.y) || 0,
  };
  const data = {
    labels,
    datasets: [
      // {
      //   label: "2022",
      //   data: dataset.x,
      //   borderWidth: 2,
      //   borderColor: borderColor?.x || "#FFFFFF",
      //   backgroundColor: borderColor?.x || "#FFFFFF",
      //   cubicInterpolationMode: "monotone",
      //   tension: 0.2,
      // },
      {
        label: "2022",
        data: dataset.y,
        borderWidth: 3,
        borderRadius: 4,
        borderColor: borderColor?.y || "#FCA311",
        backgroundColor: bgColor?.y || "#FCA311",
        tension: 0.2,
      },
    ],
  };
  return data;
};

const setConfig = (tickColor, title, gridColor) => {
  let delayed;
  const config = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: tickColor,
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: tickColor,
        },
        grid: {
          borderDash: [3, 3],
          color: gridColor || "#E5E5E5",
        },
      },
    },
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 250 + context.datasetIndex * 40;
        }
        return delay;
      },
    },
    plugins: {
      labels: {
        color: tickColor,
      },
      legend: {
        position: "bottom",
        align: "end",
        labels: {
          color: tickColor,
        },
      },
      title: {
        display: true,
        text: ["OVERVIEW", title || ""],
        color: tickColor,
        position: "top",
        align: "start",
        font: {
          weight: "bold",
          size: 16,
          lineHeight: 2,
        },
        padding: { bottom: 40 },
      },
    },
  };
  return config;
};

export default function MyChart({
  type,
  datas,
  tickColor,
  bgColor,
  borderColor,
  title,
  gridColor,
}) {
  const options = setConfig(tickColor, title, gridColor);
  const data = setup(datas, bgColor, borderColor);
  return <Chart options={options} data={data} type={type} />;
}
