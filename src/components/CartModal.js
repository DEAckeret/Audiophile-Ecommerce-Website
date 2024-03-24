import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



const shoppingCart = <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />

const ShoppingCart = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const modalClass = isVisible ? "checkout-modal checkout-modal-visible" : "checkout-modal";

  return (
    <div>
      <button className='cart-button' onClick={toggleVisibility}>{shoppingCart}</button>
      <div className={modalClass}>
        Checkout Content
      </div>
    </div>
  );
};

export default ShoppingCart;
