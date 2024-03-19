import Navbar from "../components/Navbar";
import zx9 from "../assets/shared/desktop/image-zx9-speaker.jpg";
import zx7 from "../assets/shared/desktop/image-zx7-speaker.jpg";
import MobileMenu from "../components/mobile-comp/MobileMenu";
import BrandMessage from "../components/BrandMessage";
import Footer from "../components/Footer";

function Speakers() {
  return (
    <>
          <Navbar />
          <div className="headphones-page">
            <p className="headphones-title">Speakers</p>
    
            <div className="headphones-product">
              <div className="headphones-product-img">
                <img src={zx9} alt="ZX9 Speaker" />
              </div>
    
              <div className="headphones-product-info">
                <p>NEW PRODUCT</p>
                <h2>ZX9 Speaker</h2>
                <p>The new </p>
                <button>See Product</button>
              </div>
    
              <div className="filler-5"></div>
    
              <div className="headphones-product-img">
                          <img src={zx7} alt="ZX7 Speaker" />
                        </div>
    
              <div className="headphones-product-info">
                          <h2>ZX7 Speaker</h2>
                          
                          <button>See Product</button>
              </div>
          </div>
    
          <div className="filler-8"></div>
    
          <MobileMenu />
    
          <div className="filler-8"></div>
    
          <BrandMessage />
    
          <div className="filler-8"></div>  
    
          <Footer />
        </div>
      </>
    );
    }

export default Speakers;