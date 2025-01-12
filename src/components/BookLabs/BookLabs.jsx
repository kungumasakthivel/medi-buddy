import './BookLabs.css'
import Card from './Card/Card'

function BookLabs() {
  return (
    <div className='booklabs-container ml-5 mr-5 mt-10'>
        <div className='flex justify-between mb-10 max-sm:mb-3'>
            <p className='font-bold text-3xl max-sm:text-xl'>Book Popular Lab Tests</p>
            <button className='booklabs-btn font-bold text-xl max-sm:text-base'>
                View More
            </button>
        </div>
        <div>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default BookLabs
