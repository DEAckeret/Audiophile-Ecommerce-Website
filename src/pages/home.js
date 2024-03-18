
import Navbar from "../components/Navbar";
import imageHeader from "../assets/home/mobile/image-header.jpg";
import MobileMenu from "../components/mobile-comp/MobileMenu";
import ProductAd from "../components/ProductAd";
import BrandMessage from "../components/BrandMessage";
import Footer from "../components/Footer";


function Home( ) {
    return (
        <>
            <Navbar />
            <div className="home-page">
                
                <div className="home-header bg-dark">
                    <div className="home-header-text color-light space-1">
                        <p>New Product</p>
                        <h2>XX99 Mark II Headphones</h2>
                        <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                        <button>See Product</button>
                    </div>

                    <img src={imageHeader} alt="XX99 Mark 2 Headphones" className="home-header-img"></img>
                </div>

                <div className="filler-8"></div>
                
                <MobileMenu />

                <div className="filler-8"></div>

                <ProductAd />

                <div className="filler-8"></div>

                <BrandMessage />

                <div className="filler-8"></div>

                <Footer />
            </div>
        </>
    );
}

export default Home;