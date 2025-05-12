export const ExpenseList = ({ expenses, onDelete }) => {
    if (expenses.length === 0) {
        return (
            <p className="text-muted text-center">Brak zapisanych wydatków</p>
        )
    }

    return (
        <div className="list-group mb-4">
            {expenses.map((expense) => (
                <div
                    key={expense.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                >
                    <div>
                        <small className="text-muted">{expense.date}</small>
                        <div>{expense.category}</div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <strong className="text-primary">{expense.amount.toFixed(2)} zł</strong>
                        <button
                            onClick={() => onDelete(expense.id)}
                            className="btn btn-sm btn-outline-danger"
                            title="Usuń"
                        >
                            ✖
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}