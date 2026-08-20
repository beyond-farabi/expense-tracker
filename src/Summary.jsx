import { formatRupiah } from './utils.js'

function Summary({ total }) {
    return (
        <div className='summary'>
            <span className='summary-label'>Total pengeluaran</span>
            <span className='summry-amount'>{formatRupiah(total)}</span>
        </div>
    )
}

export default Summary