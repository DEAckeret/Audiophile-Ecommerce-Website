import BrandModel from '../assets/shared/mobile/image-best-gear.jpg';


function BrandMessage() {
    return (
        <div className='brand-message'>
            <div className='brand-model'>
                <img src={BrandModel}></img>
            </div>
            <div className='brand-text'>
                <h2>Bringing you the <span className='brand-best'>best</span> audio gear</h2>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
        </div>
    );
}

export default BrandMessage;