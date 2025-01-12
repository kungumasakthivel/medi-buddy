import { Home, Lab, Time } from '../Icons/Icons';
import './Card.css';

function Card() {
  return (
    <div className='flex justify-center mb-5 '>
        <div className='rounded-xl shadow-lg book-lab-card p-2 pt-0'>
            <div className='sticker-book-labs max-md:hidden'>
                <p>Caseless</p>
            </div>
            <div className='flex justify-between items-center gap-5 mt-5'>
                <div className='col-1 flex flex-col justify-around items-start'>
                    <div className='row-1'>
                        <div className='heading mb-3'>
                            <p className='text-left text-xl font-bold max-sm:text-base max-sm:font-semibold'>
                                Complete Blood Count (CBC) - EDTA Whole Blood
                            </p>
                        </div>
                        <div className='desc'>
                            <div className='flex justify-start gap-2 items-center'>
                                <Time /> 
                                <p className='text-left font-semibold max-sm:text-sm'>Reports in 10-12 hrs</p>
                            </div>
                            <div className='flex justify-start gap-2 ml-1'>
                                <div className='flex items-center gap-2'>
                                    <Home />
                                    <p style={{color:'#4F4F4F'}}>Home</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Lab />
                                    <p style={{color:'#4F4F4F'}}>Lab</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-2 flex flex-col  justify-between items-end '>
                    <div className='flex justify-start gap-2'>
                        <p className='off-price'>₹800 </p>
                        <p className='off'>55% OFF</p>
                    </div>
                    <div className=''>
                        <p className='real-price max-sm:text-base'>
                            ₹500 /- 
                            <span className='span-onwards max-sm:text-sm'>
                                Omwards
                            </span>
                        </p>
                    </div>
                    <div>
                        <button className='bl-card-btn'>Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
