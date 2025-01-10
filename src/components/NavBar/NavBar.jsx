 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { 
    faArrowLeft, 
    faWallet, 
    faCartShopping,
    faSearch 
} from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'

 function NavBar() {
   return (
     <div className="container mx-auto px-4">
        {/* It contains back navigation, location, wallet and cart*/}
       <div className="flex flex-row content-center nav-bar">
            <div className='basis-1/12'>
                <FontAwesomeIcon icon={faArrowLeft} className='custom-font-size'/>
            </div>
            <div className='basis-9/12'>
                <div className='flex flex-row'>
                    <div className='flex flex-col justify-start'>
                        <h6>HSR Layout</h6>
                        <p>Bengalore</p>
                    </div>
                </div>
            </div>
            <div className='basis-1/12'>
                <FontAwesomeIcon icon={faWallet} className='custom-font-size' />
            </div>
            <div className='basis-1/12'>
                <FontAwesomeIcon icon={faCartShopping} className='custom-font-size'  />
            </div>
       </div>

       {/* Search bar implementation */}
       <div className='flex flex-row justify-center'>
            <div className="flex items-center border border-gray-300 p-2 search-bar">
            <input
                type="text"
                className="flex-grow p-2 rounded-full outline-none ml-2"
                placeholder="Find lab tests, diagnostics centres"
            />
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 ml-3" />
            </div>     
       </div>
     </div>
   )
 }

 export default NavBar
