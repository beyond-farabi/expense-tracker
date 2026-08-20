import { CATEGORIES } from "./utils"

function CategoryFilter({ active, onChange }) {
    const options = ["semua", ...CATEGORIES]

    return (
        <div className="category-filter">
            {/* map option jadi tombol: 
            key, 
            onClick manggil onChange dengan kategorinya, 
            className "active" kalau cat === active */}
            {options.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onChange(cat)}
                    className={cat === active ? "active" : ""}    
                >
                    {cat}
                </button>
            ))}

        </div>
    )
}

export default CategoryFilter