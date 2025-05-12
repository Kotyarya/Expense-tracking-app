import { useState } from "react"
import { categories } from "../data/categories"

export const ExpenseForm = ({ onAdd }) => {
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState(categories[0])
    const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10))

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!amount || isNaN(amount)) return

        const newExpense = {
            id: crypto.randomUUID(),
            amount: parseFloat(amount),
            category,
            date,
        }

        onAdd(newExpense)
        setAmount("")
        setCategory(categories[0])
        setDate(new Date().toISOString().slice(0, 10))
    }

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="row g-2">
                <div className="col-sm">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Kwota"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <div className="col-sm">
                    <select
                        className="form-select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((cat) => (
                            <option key={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                <div className="col-sm">
                    <input
                        type="date"
                        className="form-control"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
                ➕ Dodaj
            </button>
        </form>
    )
}