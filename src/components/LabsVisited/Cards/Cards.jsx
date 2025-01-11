import './Cards.css';
import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Cards() {
  return (
    <>
    <div className='flex justify-center box-container'>
        <div className="rounded-xl labs-card mb-5">
            <div className='bg-image-labs flex justify-center'>
                <img className='src-img' src="https://th.bing.com/th/id/OIP.R0qoJBWpB48diguv5muIfgHaFj?w=222&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt='apollo image' />
            </div>
            <div className='labs-desc ml-5 mb-5'>
                <p className='text-left text-3xl font-bold mt-5 max-sm:text-2xl'>Apollo</p>
                <p className='text-left text-lg font-medium mt-5 max-sm:text-base'>
                    <FontAwesomeIcon icon={faLocationDot} className='mr-2'/>Kormanangla, Banglore
                </p>
                <p className='text-left text-lg font-medium mt-2 max-sm:text-base'>
                    <FontAwesomeIcon icon={faClock} className='mr-1'/>Next Slot - 07:30 AM, Tomorrow
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cards
