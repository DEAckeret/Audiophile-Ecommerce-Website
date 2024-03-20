


const PageBanner = ({ page }) => {
  let bannerText = '';

  switch (page) {
    case 'headphones':
      bannerText = 'headphones';
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
    <div className="page-banner">
      <p>{bannerText}</p>
    </div>
  );
};

export default PageBanner;
