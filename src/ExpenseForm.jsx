import { useState, useEffect } from 'react'
import { CATEGORIES } from './utils'

function ExpenseForm({ onAdd }) {
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("makanan")

    function handleSubmit() {
        // guard-clause, kalau description kosong atau amount kosong, return 
        if (description.trim() === "" || amount === "") return;

        // objek pengeluaran
        const expense = {
            id: Date.now(),
            description: description,
            amount: Number(amount),
            category: category
        }

        // panggil onAdd dengan objek itu
        onAdd(expense)

        // kosongkan form 
        setDescription("")
        setAmount("")
    }

    return (
        <div>
            <input 
                type='text'
                placeholder='Deskripsi'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            {/* input untuk amount */}
            <input 
                type='number'
                placeholder='jumlah'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>

            <button onClick={handleSubmit}>tambah</button>

        </div>
    )
}

export default ExpenseForm