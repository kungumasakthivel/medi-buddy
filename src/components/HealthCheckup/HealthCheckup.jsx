import CheckupSlider from './CheckupSlider';
import './HealthCheckup.css';

function HealthCheckup() {
  return (
    <div className='checkup-container mt-10 mb-10 ml-5 mr-5'>
        <div className=''>
            <div className='flex justify-between content-center font-bold mb-5'>
                <p className='text-3xl max-md:text-xl'>
                    Featured Health Check-ups
                </p>
                <button className='blue-text text-xl max-md:text-lg max-md:font-semibold'>
                    View All
                </button>
            </div>
            <div>
                <CheckupSlider />
            </div>
        </div>  
    </div>
  )
}

export default HealthCheckup
