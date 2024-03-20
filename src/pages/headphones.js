import Navbar from "../components/Navbar";
import xx99Mark2 from "../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import xx99Mark1 from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import xx59 from "../assets/shared/desktop/image-xx59-headphones.jpg";
import MobileMenu from "../components/mobile-comp/MobileMenu";
import BrandMessage from "../components/BrandMessage";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";

import { useNavigate } from "react-router-dom";

function Headphones( ) {
  const navigate = useNavigate();

  const handleClickM2 = () => {
    navigate("/headphones/mark-two");
  }; 

  const handleClickM1 = () => {
    navigate("/headphones/mark-one");
  };

  const handleClickX59 = () => {
    navigate("/headphones/xx59");
  };

  return (
    <>
      <Navbar />
      <div className="headphones-page">
        <PageBanner page="headphones" />

        <div className="headphones-product">
          <div className="headphones-product-img">
            <img src={xx99Mark2} alt="XX99 Mark 2 Headphones" />
          </div>

          <div className="headphones-product-info">
            <p>NEW PRODUCT</p>
            <h2>XX99 Mark II Headphones</h2>
            <p>The new </p>
            <button onClick={handleClickM2}>See Product</button>
          </div>

          <div className="filler-5"></div>

          <div className="headphones-product-img">
                      <img src={xx99Mark1} alt="XX99 Mark 1 Headphones" />
                    </div>

          <div className="headphones-product-info">
                      <h2>XX99 Mark I Headphones</h2>
                      
                      <button onClick={handleClickM1}>See Product</button>
          </div>

          <div className="filler-5"></div>

          <div className="headphones-product-img">
                      <img src={xx59} alt="XX99 Mark 1 Headphones" />
                    </div>

          <div className="headphones-product-info">
                      <h2>XX59 Headphones</h2>
                      
                      <button onClick={handleClickX59}>See Product</button>
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

export default Headphones;