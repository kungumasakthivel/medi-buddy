import './AddBooking.css';
import AddBookingSliders from './AddBookingSliders';

function AddBooking() {
  return (
    <div>
      <div className='flex justify-between content-center mt-10 max-sm:ml-5 max-sm:mr-5'>
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
