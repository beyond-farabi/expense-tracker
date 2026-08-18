import { useState, useEffect } from 'react'

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
                <option value="makanan">Makanan</option>
                <option value="transfortasi">Transfortasi</option>
                <option value="belanja">Belanja</option>
                <option value="lainnya">Lainnya</option>
            </select>

            <button onClick={hanldeSubmit}>Tambah</button>

        </div>
    )
}

export default ExpenseForm