import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js"
import { useMemo } from "react"

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

export const ExpenseChart = ({ expenses }) => {
    const dailyTotals = useMemo(() => {
        const totals = {}
        for (const exp of expenses) {
            totals[exp.date] = (totals[exp.date] || 0) + exp.amount
        }

        const sortedDates = Object.keys(totals).sort()
        return {
            labels: sortedDates,
            data: sortedDates.map(date => totals[date])
        }
    }, [expenses])

    const data = {
        labels: dailyTotals.labels,
        datasets: [
            {
                label: "Wydatki (zł)",
                data: dailyTotals.data,
                backgroundColor: "#3B82F6", // Tailwind blue-500
                borderRadius: 6,
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 20,
                },
            },
        },
    }

    if (expenses.length === 0) return null

    return (
        <div className="mb-4">
            <h5 className="text-center mb-3">📊 Wydatki dzienne</h5>
            <Bar data={data} options={options} />
        </div>
    )
}