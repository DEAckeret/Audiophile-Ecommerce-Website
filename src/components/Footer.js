import { Link } from "react-router-dom";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";


function Footer() {
    return (
        <footer className="bg-dark">
            <div className="footer-content">
                <div className="filler-1"></div>
            <h1 className="color-light">audiophile</h1>
            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/headphones">Headphones</Link>
                <Link to="/speakers">Speakers</Link>
                <Link to="/earphones">Earphones</Link>
            </div>

            <div className="footer-sendoff">
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            </div>

            <div className="footer-copyright">
                <p>Copyright 2021. All Rights Reserved</p>
            </div>

            <div className="footer-socials">
                <a><img src={facebook} alt="Description" /></a>
                <a><img src={twitter} alt="Description" /></a>
                <a><img src={instagram} alt="Description" /></a>
            </div>

            <div className="filler-1"></div>

            </div>
        </footer>
    );
}

export default Footer;