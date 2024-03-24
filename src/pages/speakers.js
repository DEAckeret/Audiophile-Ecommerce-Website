import Navbar from "../components/Navbar";
import zx9 from "../assets/shared/desktop/image-zx9-speaker.jpg";
import zx7 from "../assets/shared/desktop/image-zx7-speaker.jpg";
import MobileMenu from "../components/mobile-comp/MobileMenu";
import BrandMessage from "../components/BrandMessage";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";

import { useNavigate } from "react-router-dom";

function Speakers() {

  const navigate = useNavigate();

  const handleClickZX9 = () => {
    navigate("/speakers/zx9");
  };

  const handleClickZX7 = () => {
    navigate("/speakers/zx7");
  };

  return (
    <>
          <Navbar />
          <div className="headphones-page">
            <PageBanner page = "speakers"/>
    
            <div className="headphones-product">
              <div className="headphones-product-img">
                <img src={zx9} alt="ZX9 Speaker" />
              </div>
    
              <div className="headphones-product-info">
                <p>NEW PRODUCT</p>
                <h2>ZX9 Speaker</h2>
                <p>The new </p>
                <button onClick={handleClickZX9}>See Product</button>
              </div>
    
              <div className="filler-5"></div>
    
              <div className="headphones-product-img">
                          <img src={zx7} alt="ZX7 Speaker" />
                        </div>
    
              <div className="headphones-product-info">
                          <h2>ZX7 Speaker</h2>
                          
                          <button onClick={handleClickZX7}>See Product</button>
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