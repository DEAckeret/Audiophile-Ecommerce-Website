import SpeakerAd from '../assets/home/mobile/image-speaker-zx9.png';

function ProductAd() {
  return (
    <div className="product-ad">
      <div className="pa-section-one">
        <img src={SpeakerAd}></img>
        <p>ZX9 SPEAKER</p>
        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <button>See Product</button>
      </div>
      <div className="pa-section-two">
        <p>zx7 speaker</p>
              <button>See Product</button>
      </div>
      
      <div className="pa-section-three"></div>
      <div className="pa-section-four">
        <p>YX1 EARPHONES</p>
        <button>See Product</button>
      </div>
    </div>
  );
}

export default ProductAd;