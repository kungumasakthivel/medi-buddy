import { Time } from '../Icons/Icons';
import './Cards.css';
import { useState } from 'react';

function Cards() {
    const [btnCnt, setBtnCnt] = useState(0);
    // const [price, setPrice] = useState(0);
    const price = 89

    const add = () => {
        setBtnCnt(prev => prev + 1);
    }
    const sub = () => {
        if(btnCnt > 0) {
            setBtnCnt(prev => prev - 1);
        }
    }

  return (
    <div className='flex justify-center content-center '>
      <div className='checkup-card rounded-xl shadow-lg m-3 p-3'>
        <div>
            <div className='text-left text-3xl font-semibold max-md:text-lg '>
                <p>Medibuddy Fit health check-up</p>
                <div className='flex justify-start items-center gap-2 mt-3'>
                    <Time />
                    <p className='blue-text text-base font-medium'>
                        Reports in 10-12 hrs
                    </p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center'>
            <div className='mt-3'>
                <div className='flex justify-between items-start text-left'>
                    <div className='box-size'>
                        <p className='font-bold'>90 Tests</p>
                        <p className='dot'>Cholesterol - Total</p>
                        <p className='dot'>Vitamin D... + 87 more</p>
                        
                    </div>
                    <div className='box-size-left'>
                        <p className='font-bold'>Includes</p>
                        <p className='dot'>Radiology</p>
                    </div>
                </div>
            </div>
            <div className='mt-3 p-2 rounded-lg checkup-row-2'>
                <div className='flex justify-between items-start text-left'>
                    <div className='box-size'>
                        <p className='font-bold'>Fasting</p>
                        <p className='dot'>07-08 Hrs</p>                    
                    </div>
                    <div className='box-size-left'>
                        <p className='font-bold'>Available at</p>
                        <p className='dot'>Home</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-10'>
            <div className='flex justify-between items-center text-left'>
                <div className='box-size'>
                    <p className='font-bold text-xl'>₹ {price * btnCnt}</p>                   
                </div>
                <div className='price-and-btn box-size-left flex justify-start content-center gap-5 rounded'>
                    <button className='btn-price' onClick={() => sub()}>-</button>
                    <p>{btnCnt}</p>
                    <button className='btn-price' onClick={() => add()}>+</button>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Cards
