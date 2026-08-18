import { formatRupiah } from './utils.js'

function ExpenseItem({ expense, onDelete }) {
    return (
        <div className="expense-item">
            <div>
                <p className="description">{expense.description}</p>
                <span className="category">{expense.category}</span>
            </div>

            <div>
                <span className="amount">{formatRupiah(expense.amount)}</span>
                {/* tombol hapus yang memanggil onDelete */}
                <button className="btn-delete" onClick={onDelete}>delete</button>
            </div>
        </div>
    )
}

export default ExpenseItem