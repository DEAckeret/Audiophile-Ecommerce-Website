import headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import arrowSVG from '../../assets/shared/desktop/icon-arrow-right.svg';
import { Link } from 'react-router-dom';

function MobileMenu() {
  return (
    <div className='mobile-menu'>
      <div className='mobile-section'>
        <img src= {headphones}></img>
        
        <p>headphones</p>
        <Link to="/headphones" className='color-neutral-accent'>
                  Shop
          <img src={arrowSVG} alt="Arrow" className='arrow-svg' />
        </Link>
      </div>

      <div className='filler-7'></div>

      <div className='mobile-section'>
        <img src= {speakers}></img>
        
        <p>speakers</p>
        <Link to="/speakers" className='color-neutral-accent'>
                  Shop
          <img src={arrowSVG} alt="Arrow" className='arrow-svg' />
        </Link>
      </div>

      <div className='filler-7'></div>

      <div className='mobile-section'>
        <img src= {earphones}></img>
        
        <p>earphones</p>
        {/* <a className='color-neutral-accent' src={"/earphones"}>shop<img src={arrowSVG} alt="Arrow" className='arrow-svg'/></a> */}
        <Link to="/earphones" className='color-neutral-accent'>
          Shop
  <img src={arrowSVG} alt="Arrow" className='arrow-svg' />
</Link>
      </div>
    </div>
  );
}

export default MobileMenu;