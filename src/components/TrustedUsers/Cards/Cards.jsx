import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
function Cards() {
  return (
    <div className="rounded-xl card">
      <div className='text-right'>Bengalre <FontAwesomeIcon icon={faLocationDot} /></div>
      <p className='text-pretty text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea numquam incidunt deserunt? Consequatur dicta, fugit assumenda fuga, exercitationem accusamus mollitia nam autem numquam aut corrupti magni temporibus cupiditate voluptates obcaecati.</p>
      <div className='flex justify-start gap-2 content-center mt-2'>
        <div className='round-profile'></div>
        <p className=''>User Name</p>
      </div>
    </div>
  )
}

export default Cards
