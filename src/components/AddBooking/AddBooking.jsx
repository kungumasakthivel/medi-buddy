import './AddBooking.css';
import AddBookingSliders from './AddBookingSliders';

function AddBooking() {
  return (
    <div className='mb-10 mt-10'>
      <div className='flex justify-between content-center ml-5 mr-5 mt-10 mb-10 max-sm:ml-5 max-sm:mr-5 max-md:mb-1'>
        <p className='text-3xl font-bold max-md:text-xl'>
            Your Active Bookings 
        </p>
        <button className='booking-btn font-bold text-xl max-md:text-base'>View All</button>
      </div>
      <div>
        <AddBookingSliders />
      </div>
    </div>
  )
}

export default AddBooking
