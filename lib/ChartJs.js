import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const labels = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

// BorderColor and bgColor is a object color for x axis and y axis
const setup = (datas, bgColor, borderColor) => {
    const dataset = {
        x: datas?.map(data => data.x) || 0,
        y: datas?.map(data => data.y) || 0
    }
    const data = {
        labels,
        datasets: [
            {
                label: '2021',
                data: dataset.x,
                borderWidth: 2,
                borderColor: borderColor?.x || '#FCA311',
                backgroundColor: bgColor?.x || '#FCA311',
                tension: 0.2
            },
            {
                label: '2022',
                data: dataset.y,
                borderWidth: 2,
                borderColor: borderColor?.y || '#FFFFFF',
                backgroundColor: borderColor?.y || '#FFFFFF',
                cubicInterpolationMode: 'monotone',
                tension: 0.2
            },
        ],
    }
    return data;
}

const setConfig = (tickColor, title) => {
    let delayed;
    const config = {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    color: tickColor
                }
            },
            y: {
                ticks: {
                    color: tickColor
                }
            },
        },
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
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
                position: 'bottom',
                align: 'end',
                labels: {
                    color: tickColor
                }
            },
            title: {
                display: true,
                text: ['OVERVIEW', title || ''],
                color: tickColor,
                position: 'top',
                align: 'start',
                font: {
                    weight: 'bold',
                    size: 16,
                    lineHeight: 2
                },
                padding: { bottom: 40 }
            },
        },
    }
    return config
}

export default function MyChart({ type, datas, tickColor, bgColor, borderColor, title }) {
    const options = setConfig(tickColor, title);
    const data = setup(datas, bgColor, borderColor);
    return (
        <Chart options={options} data={data} type={type} />
    )
}

