

import CartModal from './CartModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
// const shoppingCart = <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />
const hamburger = <FontAwesomeIcon icon={faHamburger} style={{color: "#ffffff",}} />


function Navbar( ) {
    return (
        <div className='navBar-header bg-dark color-light'>
            {hamburger}
            <h1>audiophile</h1>
            {/* {shoppingCart} */}
            <CartModal />
        </div>
    );
}

export default Navbar;