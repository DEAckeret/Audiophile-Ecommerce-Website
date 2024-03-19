import Navbar from "../components/Navbar";
import xx99Mark2 from "../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import xx99Mark1 from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import xx59 from "../assets/shared/desktop/image-xx59-headphones.jpg";
import MobileMenu from "../components/mobile-comp/MobileMenu";
import BrandMessage from "../components/BrandMessage";
import Footer from "../components/Footer";

function Headphones( ) {
  return (
    <>
      <Navbar />
      <div className="headphones-page">
        <p className="headphones-title">Headphones</p>

        <div className="headphones-product">
          <div className="headphones-product-img">
            <img src={xx99Mark2} alt="XX99 Mark 2 Headphones" />
          </div>

          <div className="headphones-product-info">
            <p>NEW PRODUCT</p>
            <h2>XX99 Mark II Headphones</h2>
            <p>The new </p>
            <button>See Product</button>
          </div>

          <div className="filler-5"></div>

          <div className="headphones-product-img">
                      <img src={xx99Mark1} alt="XX99 Mark 1 Headphones" />
                    </div>

          <div className="headphones-product-info">
                      <h2>XX99 Mark I Headphones</h2>
                      
                      <button>See Product</button>
          </div>

          <div className="filler-5"></div>

          <div className="headphones-product-img">
                      <img src={xx59} alt="XX99 Mark 1 Headphones" />
                    </div>

          <div className="headphones-product-info">
                      <h2>XX59 Headphones</h2>
                      
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

export default Headphones;