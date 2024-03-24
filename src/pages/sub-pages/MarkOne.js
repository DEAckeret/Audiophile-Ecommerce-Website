import AlsoLike from "../../components/AlsoLike";
import BrandMessage from "../../components/BrandMessage";
import Footer from "../../components/Footer";
import MobileMenu from "../../components/mobile-comp/MobileMenu";

function MarkOne() {
  return (
    <div>
      <h1>MarkOne</h1>


        <AlsoLike alsoLike="xx99-mark-one" />

        <div className="filler-8"></div>

        <MobileMenu />

        <div className="filler-8"></div>

        <BrandMessage />

        <div className="filler-8"></div>

        <Footer />
    </div>
  );
}

export default MarkOne;