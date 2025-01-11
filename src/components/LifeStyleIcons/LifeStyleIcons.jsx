import {Icon1, Icon2, Icon3} from './Icons/Icons.jsx';
import './LifeStyleIcons.css';
function LifeStyleIcons() {
  return (
    <div>
      <h1 className="text-start mt-5 text-2xl font-bold ml-5 max-md:text-base">
        Lifestyle Health Check-up Packages
      </h1>
      <div className="flex justify-around mt-5">
          
            <div className="">
              <Icon1 />
              <p className='text-center'>Hyper-Tension</p>
            </div>
            <div className=" ">
              <Icon2 />
              <p>Obesity</p>
            </div>
            <div className=" ">
              <Icon3 />
              <p>Smoking</p>
            </div>
      </div>
      <div className="flex justify-around mt-5">

            <div className="">
              <Icon1 />
              <p className='text-center'>Hyper-Tension</p>
            </div>

            <div className=" ">
              <Icon2/>
              <p>Obesity</p>
            </div>

            <div className=" ">
              <Icon3 />
              <p>Smoking</p>
            </div>  
      </div>
    </div>
  )
}

export default LifeStyleIcons
