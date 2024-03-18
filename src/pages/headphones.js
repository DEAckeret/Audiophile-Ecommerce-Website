import Navbar from "../components/Navbar";
import xx99Mark1 from "../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";

function Headphones( ) {
  return (
    <>
      <Navbar />
      <div className="headphones-page">
        <p className="headphones-title">Headphones</p>

        <div className="headphones-product">
          <div className="headphones-product-img">
            <img src={xx99Mark1} alt="XX99 Mark 1 Headphones" />
          </div>

          <div className="headphones-product-info">
            <p>NEW PRODUCT</p>
            <h2>XX99 Mark II Headphones</h2>
            <p>The new </p>
            <button>See Product</button>
          </div>
      </div>

      <div className="filler-8"></div>
    </div>
  </>
  );
}

export default Headphones;