import "./index.css";
import { useState, useEffect } from "react"
import {ExpenseChart} from "../Components/ExpenseChart.jsx";
import {ExpenseList} from "../Components/ExpenseList.jsx";
import {loadExpenses, saveExpenses} from "../Utils/storage.js";
import {ExpenseForm} from "../Components/ExpenseForm.jsx";
import "bootstrap/dist/css/bootstrap.min.css"

export function App() {
    const [expenses, setExpenses] = useState([])

    useEffect(() => {
        setExpenses(loadExpenses())
    }, [])

    useEffect(() => {
        saveExpenses(expenses)
    }, [expenses])



    return (
        <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center p-3">
            <div className="container" style={{ maxWidth: "700px" }}>
                <div className="card shadow rounded-4 p-4">
                    <h1 className="text-center mb-4">💸 Expense Tracker</h1>

                    <ExpenseForm onAdd={expense => setExpenses([expense, ...expenses])} />
                    <ExpenseChart expenses={expenses} />
                    <ExpenseList
                        expenses={expenses}
                        onDelete={id => setExpenses(expenses.filter(e => e.id !== id))}
                    />
                </div>
            </div>
        </div>
    )
}