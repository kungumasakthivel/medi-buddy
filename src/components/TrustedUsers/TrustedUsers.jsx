import {TickIcon, Icon1, Icon2, Icon3} from './Icons/Icons.jsx';
import './TrustedUsers.css';
import UserSlider from './UserSlider.jsx';

function TrustedUsers() {
  return (
    <div className='tu-container mt-10 mb-10'>
      {/* Heading with users count and sheld */}
        <div className='heading-container flex justify-between gap-5 content-center'>
            <div className='flex flex-col justify-center content-center'>
                <h1 className='text-start font-bold text-3xl max-md:text-xl'>Trusted by 20,20,200+</h1>
                <h1 className='text-start font-bold text-3xl max-md:text-xl'>Users Every month</h1>
            </div>
            <div>
                <TickIcon />
            </div>
        </div>
        {/* Icons */}
        <div>
            <div className='flex justify-between content-center mt-5 gap-5'>
              <div className='flex content-center items-center mt-5 gap-2'>
                <Icon1 />
                <p>200+ Approved Diagnostic Centres</p>
              </div>
              <div className='flex content-center items-center gap-2'>
                <Icon2 />
                <p>1200+ Lab Tests Offered</p>
              </div>
              <div className='flex content-center items-center max-md:hidden gap-2 '>
                <Icon3 />
                <p>1200+ Pincodes Covered</p>
              </div>
            </div>
            <div className='hidden content-center items-center max-md:flex mt-3 gap-2'>
              <Icon3 />
              <p>1200+ Pincodes Covered</p>
            </div>
        </div>

        {/* Slider - user review */}
        <h1 className='font-bold text-3xl text-left mt-10 max-sm:font-bold max-sm:text-lg'>What our Users say</h1>
        <UserSlider />
    </div>
  )
}

export default TrustedUsers
