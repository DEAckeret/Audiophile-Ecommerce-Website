import yx1 from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import Navbar from "../components/Navbar";
import MobileMenu from "../components/mobile-comp/MobileMenu";
import BrandMessage from "../components/BrandMessage";
import Footer from "../components/Footer";
import PageBanner from '../components/PageBanner';

import { useNavigate } from "react-router-dom";

function Earphones() {

   const navigate = useNavigate();
  
    const handleClickYX1 = () => {
      navigate("/earphones/yx1");
    };


    return (
        <>
              <Navbar />
              <div className="headphones-page">
                <PageBanner page="earphones" />
        
                <div className="headphones-product">
                  <div className="headphones-product-img">
                    <img src={yx1} alt="YX1 Earphones" />
                  </div>
        
                  <div className="headphones-product-info">
                    <p>NEW PRODUCT</p>
                    <h2>YX1 Earphones</h2>
                    <p>The new </p>
                    <button onClick={handleClickYX1}>See Product</button>
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
export default Earphones;