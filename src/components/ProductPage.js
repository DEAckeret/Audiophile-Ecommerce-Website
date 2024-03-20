import Navbar from './Navbar';

const ProductPage = ({ page }) => {
    let productName = '';
    let productDescription = '';
    let productPrice = '';


        
    switch (page) {
        case 'headphones':
        productName = 'headphones';
        break;
        case 'speakers':
        bannerText = 'speakers';
        break;
        case 'earphones':
        bannerText = 'earphones';
        break;
        default:
        bannerText = 'Welcome to Audiophile';
    }
    
    return (
        <div>
            <Navbar />
            <div className="filler-8"></div>

            
                <div className="product-page">
                <p>{bannerText}</p>
                </div>


            
        </div>
    );
}

export default ProductPage;