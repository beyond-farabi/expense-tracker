export function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0 
    }).format(angka)
}

export const CATEGORIES = ['makanan', 'transportasi', 'belanja', 'lainnya']