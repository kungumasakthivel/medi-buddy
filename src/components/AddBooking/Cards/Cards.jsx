import './Cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { TickIcon, ProfileIcon } from '../Icons/Icons'

function Cards() {
  return (
    <div className='flex justify-center content-center'>
        <div className='add-booking p-5 m-5'>
            <div className='flex flex-col justify-center content-center'>
                <div className='add-booking-card-container  flex justify-between content-center mb-5'>
                    <div className='flex flex-col justify-center text-start text-xl gap-1 max-sm:text-base'>
                        <div className='flex justify-start items-center gap-2'>
                            <ProfileIcon />
                            <p className='font-semibold'> Mr. Suresh Gaikwad</p>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <TickIcon />
                            <p className='font-bold'> Appointment Confirmed</p>
                        </div>
                    </div>
                    <div className='greater-icon self-center flex justify-center'>
                        <FontAwesomeIcon icon={faGreaterThan} className='text-xl mb-1' />
                    </div>
                </div>
                <div className='add-booking-desc flex justify-between max-sm:text-sm'>
                    <div className='flex flex-col justify-around p-3'>
                        <p>03 Nov’22</p>
                        <p>Wednesday</p>
                    </div>
                    <div className='flex flex-col justify-around p-3'>
                        <p>09:30-10:30AM</p>
                        <p>Home Sample Collection</p>
                    </div>
                    <div className='flex flex-col justify-around p-3'>
                        <p>03 <spam>Lab Tests</spam></p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Cards
