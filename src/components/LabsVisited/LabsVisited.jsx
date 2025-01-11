import LabsSliders from "./LabsSliders"
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LabsVisited() {
  return (
    <div>
      <div className="flex justify-between content-end mb-10 mr-5 max-md:mb-2 max-md:mr-0">
        <p className='ml-5 mt-10 text-start text-3xl font-bold max-md:text-2xl'>Labs Visited</p>
        <button className='btn-labs text-end text-xl font-bold max-md:text-lg max-md:mr-5 self-end'>See all <FontAwesomeIcon icon={faGreaterThan} /></button>
      </div>
      <div className="flex flex-col content-center labs-banner ">
        <LabsSliders />
      </div>
    </div>
  )
}

export default LabsVisited
