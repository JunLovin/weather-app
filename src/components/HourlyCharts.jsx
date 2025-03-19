import { useContext } from 'react'
import { UseWeatherApiContext } from '@context/UseWeatherApi'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

function HourlyChart() {
    const { data, celcius } = useContext(UseWeatherApiContext)

    if (!data || !data.days || !data.days[0] || !data.days[0].hours) {
        return <div>Cargando datos del clima...</div>
    }

    const todayHours = data.days[0].hours

    const hours = todayHours.map(hour => {
        return hour.datetime.substring(0, 5)
    })

    const temperatures = todayHours.map(hour => hour.temp)
    const temperaturesCelsius = todayHours.map(hour => ((hour.temp - 32) * 5 / 9).toFixed(0))

    const chartData = {
        labels: hours,
        datasets: [
            {
                label: celcius ? 'Temperatura (°C)' : 'Temperatura (°F)',
                data: celcius ? temperaturesCelsius : temperatures,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                tension: 0.4,
            }
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white',
                    font: {
                        size: 12
                    }
                }
            },
            title: {
                display: true,
                text: 'Temperatura por hora (Hoy)',
                color: 'white',
                font: {
                    size: 14
                }
            },
        },
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    color: 'white',
                    font: {
                        size: 10
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, .1)'
                }
            },
            x: {
                ticks: {
                    color: 'white',
                    font: {
                        size: 10
                    },
                    maxRotation: 0,
                    autoSkip: true,
                    maxTicksLimit: 12
                },
                grid: {
                    color: 'rgba(255, 255, 255, .1)'
                }
            }
        },
    }

    return (
        <div className="hourly-chart card p-2 max-w-full h-[250px] relative">
            <div className="chart-container h-full w-full">
            <Line data={chartData} options={options} />
            </div>
        </div>
    )
}

export default HourlyChart