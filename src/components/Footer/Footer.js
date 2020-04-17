import React from "react";
import FooterFoods from "../../media/footer-foods.svg";
import AppleStore from "../../media/apple-store.svg";
import GooglePlay from "../../media/google-play.svg";
import AppLogo from "../../media/app-logo.svg";
import YoutubeIcon from "../../media/social-media/youtube.svg";
import FacebookIcon from "../../media/social-media/facebook.svg";
import TwitterIcon from "../../media/social-media/twitter.svg";
import InstagramIcon from "../../media/social-media/instagram.svg";

export default function Footer() {
  return (
    <div
      className="footer container-fluid py-5 position-relative"
      style={{ backgroundColor: "#000" }}
    >
      <div className="footer-foods-svg col-12 col-md-8 m-auto d-flex justify-content-center">
        <img src={FooterFoods}></img>
      </div>

      <div className="col-11 col-lg-9 m-auto footer-navbar d-flex">
        <div className="application-links">
          <a href="#">
            <img src={AppleStore} alt="apple_store_icon" />
          </a>
          <a href="#">
            <img src={GooglePlay} alt="apple_store_icon" />
          </a>
        </div>
        <div className="navbar-links">
          <a href="#" className="link">
            About
          </a>
          <a href="#" className="link">
            Services
          </a>
          <a href="#" className="link">
            Support
          </a>
          <a href="#" className="link">
            Gallery
          </a>
          <a href="#" className="link">
            Terms
          </a>
          <a href="#" className="link">
            Locations
          </a>
        </div>
      </div>

      <div className="col-11 col-lg-9 m-auto middle-section px-0">
        <div className="guide-menu-item d-inline-block">
          <img src={AppLogo} alt="company_logo" className="company-logo" />
          <span className="powered-by">Powered By</span>
        </div>
        <div className="guide-menu-item d-inline-block">
          <div className="title">main menu</div>
          <a href="#" className="menu-link footer-link">
            pickup
          </a>
        </div>
        <div className="guide-menu-item d-inline-block">
          <div className="title">Orders</div>
          <a href="#" className="menu-link footer-link">
            upcoming orders
          </a>
          <a href="#" className="menu-link footer-link">
            recent orders
          </a>
        </div>
        <div className="guide-menu-item d-inline-block">
          <div className="title">reservation</div>
          <a href="#" className="menu-link footer-link">
            recent reservations
          </a>
          <a href="#" className="menu-link footer-link">
            wait to be seated
          </a>
        </div>
        <div className="guide-menu-item d-inline-block">
          <div className="title">profile</div>
          <a href="#" className="menu-link footer-link">
            promos & credits
          </a>
          <a href="#" className="menu-link footer-link">
            rewards
          </a>
        </div>
        <div className="guide-menu-item d-inline-block">
          <div className="title">special offers</div>
          <a href="#" className="menu-link footer-link">
            chief special
          </a>
          <a href="#" className="menu-link footer-link">
            code FREEDINE
          </a>
          <a href="#" className="menu-link footer-link">
            breakfast special
          </a>
        </div>
        <div className="guide-menu-item d-inline-block">
          <div className="title">support</div>
          <a href="#" className="menu-link footer-link">
            contact us
          </a>
          <a href="#" className="menu-link footer-link">
            live chat
          </a>
        </div>
      </div>

      <div className="col-11 col-lg-9 m-auto px-0 bottom-section">
        <div className="text-section">
          <div className="mb-2">
            Delight customers everywhere with a branded custom-built native iOS,
            native Android and Installable Website Application.
          </div>
          <div className="dark-text">
            Opeqe is reliable, fast and commission free all-in-one ordering
            solutions for multi-location or single location restaurants.
          </div>
        </div>
        <div className="links-container d-flex justify-content-between align-items-center text-light">
          <div>
            <span className="text-uppercase pr-3 copy-right">
              &copy; 2019 opeqe inc
            </span>
            |
            <a href="#" className="text-capitalize px-3 footer-link">
              terms & conditions{" "}
            </a>
            |
            <a href="#" className="text-capitalize pl-3 footer-link">
              privacy policy
            </a>
          </div>
          <div className="socials-section">
            <a href="#" className="link">
              <img src={InstagramIcon} alt="youtube" />
            </a>
            <a href="#" className="link">
              <img src={TwitterIcon} alt="youtube" />
            </a>
            <a href="#" className="link">
              <img src={FacebookIcon} alt="youtube" />
            </a>
            <a href="#" className="link">
              <img src={YoutubeIcon} alt="youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
