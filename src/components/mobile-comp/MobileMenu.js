import headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import arrowSVG from '../../assets/shared/desktop/icon-arrow-right.svg';

function MobileMenu() {
  return (
    <div className='mobile-menu'>
      <div className='mobile-section'>
        <img src= {headphones}></img>
        
        <p>headphones</p>
        <a className='color-neutral-accent'>shop<img src={arrowSVG} alt="Arrow" className='arrow-svg' /></a>
      </div>

      <div className='filler-7'></div>

      <div className='mobile-section'>
        <img src= {speakers}></img>
        
        <p>speakers</p>
        <a className='color-neutral-accent'>shop<img src={arrowSVG} alt="Arrow" className='arrow-svg'/></a>
      </div>

      <div className='filler-7'></div>

      <div className='mobile-section'>
        <img src= {earphones}></img>
        
        <p>earphones</p>
        <a className='color-neutral-accent'>shop<img src={arrowSVG} alt="Arrow" className='arrow-svg'/></a>
      </div>
    </div>
  );
}

export default MobileMenu;