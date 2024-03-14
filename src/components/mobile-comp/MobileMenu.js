import headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import arrowSVG from '../../assets/shared/desktop/icon-arrow-right.svg';

function MobileMenu() {
  return (
    <div className='mobile-menu'>
      <div className='mobile-section'>
        <img src= {headphones}></img>
        
        <p>headphones</p>
        <a>shop<img src={arrowSVG} alt="Arrow" className='arrow-svg' /></a>
      </div>

      {/* <div className='filler-5'></div>

      <div className='mobile-section'>
        <img src= {headphones}></img>
        
        <p>headphones</p>
        <a>shop<img src={arrowSVG} alt="Arrow" className='arrow-svg'/></a>
      </div>

      <div className='filler-5'></div>

      <div className='mobile-section'>
        <img src= {headphones}></img>
        
        <p>headphones</p>
        <a>shop<img src={arrowSVG} alt="Arrow" className='arrow-svg'/></a>
      </div> */}
    </div>
  );
}

export default MobileMenu;