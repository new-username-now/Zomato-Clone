import Collection from "./components/Collection";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import GetApp from "./components/GetApp";
import Hero from "./components/Hero";
import Localities from "./components/Localities";
import Offer from "./components/Offer";

const react = require("react");
const ReactDOM = require("react-dom");

function App() {
  return (
    <div>
      <Hero />
      {/* <section class="hero__section">
        <header>
          <nav class="navbar">
            <a href="#">
              <i class="fa-solid fa-mobile-screen"></i> Get the App
            </a>
            <div class="navbar__menu_container">
              <a href="#" class="link">
                Investor Relations
              </a>
              <a href="#" class="link">
                Add Restaurant
              </a>
              <a href="#" class="link">
                Login
              </a>
              <a href="#" class="link">
                Sign up
              </a>
              <a href="#" class="user__icon">
                <i class="fa-solid fa-user"></i>
              </a>
            </div>
          </nav>
        </header>
        <div class="hero__section_container">
          <img
            src="images/heroSectionLogo.png"
            class="hero__section_logo"
            alt="Zomato logo"
          />
          <h1 class="hero__section_title">
            Discover the best food & drinks in Colombo
          </h1>
          <div class="hero__section_input_container">
            <div class="hero__section_location_icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <input
              type="text"
              class="input_container_location"
              placeholder="Colombo"
            />

            <div class="hero__section_search_icon">
              <i class="fas fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              class="input_container_search"
              placeholder="Search for a restaurant, cusine or a dish"
            />
          </div>
        </div>
      </section> */}

      {/* ------------------------------------- */}

      <Offer />
      {/* <section class="container we__offer">
        <div class="we__offer_card">
          <img src="images/item1.png" alt="dilevery" />
          <div class="we__offer_content">
            <h2>Order Online</h2>
            <p>Stay home and order to your doorstep</p>
          </div>
        </div>
        <div class="we__offer_card">
          <img src="images/item2.png" alt="dining" />
          <div class="we__offer_content">
            <h2>Dining</h2>
            <p>View the city's favourit dining venue.</p>
          </div>
        </div>
        <div class="we__offer_card">
          <img src="images/item3.png" alt="Night-life" />
          <div class="we__offer_content">
            <h2>Nightlife and Clubs</h2>
            <p>Explore the city's top Nightlife outlets</p>
          </div>
        </div>
      </section> */}

      {/* --------------------------------- */}

      <Collection />
      {/* <section class="container collections">
        <div class="large_container">
          <h1>Collections</h1>
          <div class="sub__heading_container">
            <span>
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Colombo, based on trends
            </span>
            <span>
              All collections in Colombo <i class="fa-solid fa-caret-right"></i>
            </span>
          </div>
        </div>

        <div class="collections_card_container">
          <div class="card card1">
            <div class="overlay"></div>
            <div class="content">
              <h4>Newly Opened</h4>
              <span>
                8 places <i class="fa-solid fa-caret-right"></i>
              </span>
            </div>
          </div>

          <div class="card card2">
            <div class="overlay"></div>
            <div class="content">
              <h4>Best of Colombo</h4>
              <span>
                42 places <i class="fa-solid fa-caret-right"></i>
              </span>
            </div>
          </div>

          <div class="card card3">
            <div class="overlay"></div>
            <div class="content">
              <h4>Trending This Weak</h4>
              <span>
                30 places <i class="fa-solid fa-caret-right"></i>
              </span>
            </div>
          </div>

          <div class="card card4">
            <div class="overlay"></div>
            <div class="content">
              <h4>Most Romantic Restaurants</h4>
              <span>
                14 places <i class="fa-solid fa-caret-right"></i>
              </span>
            </div>
          </div>
        </div>
      </section> */}

      {/* ----------------------------------------- */}

      <Localities />
      {/* <section class="localities">
        <div class="locality__container">
          <h1>
            Popular localities in and around <b>Colombo</b>
          </h1>
          <div class="localities_card">
            <div class="panel1">
              <div class="cards">
                <div class="cards_content">
                  <h4>Kolpity</h4>
                  <p>496 places</p>
                </div>
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div class="panel2">
              <div class="cards">
                <div class="cards_content">
                  <h4>Bambalapity</h4>
                  <p>462 places</p>
                </div>
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div class="panel3">
              <div class="cards">
                <div class="cards_content">
                  <h4>Dehiwala</h4>
                  <p>325 places</p>
                </div>
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div class="panel1">
              <div class="cards">
                <div class="cards_content">
                  <h4>Borella</h4>
                  <p>631 places</p>
                </div>
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div class="panel2">
              <div class="cards">
                <div class="cards_content">
                  <h4>Wellawatta</h4>
                  <p>386 places</p>
                </div>
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div class="panel3">
              <div class="cards">
                <div class="cards_content">
                  <h4>Torrington</h4>
                  <p>133 places</p>
                </div>
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div class="panel1">
              <div class="cards">
                <div class="cards_content">
                  <h4>Galle Face</h4>
                  <p>140 places</p>
                </div>
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div class="panel2">
              <div class="cards">
                <div class="cards_content">
                  <h4>Marine Drive</h4>
                  <p>318 places</p>
                </div>
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div class="panel3">
              <div class="cards last_panel">
                <h4>
                  see more <i class="fa-solid fa-angle-down"></i>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ------------------------------------------------ */}

      <GetApp />
      {/* <section class="container get__the_app">
        <div class="semiContainer">
          <div class="left">
            <img src="images/mobileBanner.png" alt="mobileBanner" />
          </div>
          <div class="right">
            <h1>Get the Zomato App</h1>
            <p>
              We will send you a link, open it on your phone to download the app
            </p>
            <div class="radio__buttons_container">
              <div>
                <input type="radio" id="email" name="download_app" />
                <label for="email" style="font-size: 14px">
                  Email
                </label>
              </div>
              <div>
                <input type="radio" id="phone" name="download_app" />
                <label for="email" style="font-size: 14px">
                  Phone
                </label>
              </div>
            </div>
            <div class="input_container">
              <input type="email" placeholder="Email" />
              <button>Share App link</button>
            </div>
            <div class="download__app_container">
              <h5>Download app from</h5>
              <div>
                <img src="images/appleStore.png" alt="appleStore" />
                <img src="images/playStore.png" alt="playStore" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* --------------------------------------------- */}

      <Explore />
      {/* <section class="explore">
        <div class="explore__option">
          <h1 class="explore__option_title">Explore options near me</h1>
          <div class="explore__option_points ">
            <div class="Explore__option_card">
              <div class="explore__option_panel">
                <div class="secret">
                  <h5>Popular cuisines near me</h5>
                  <i class="fa fa-angle-down"></i>
                </div>
              </div>
            </div>
            <div class="Explore__option_card">
              <div class="explore__option_panel">
                <div class="secret">
                  <h5>Popular restaurant types near me</h5>
                  <i class="fa fa-angle-down"></i>
                </div>
              </div>
            </div>
            <div class="Explore__option_card">
              <div class="explore__option_panel secert">
                <div class="secret">
                  <h5>Top Restaurant Chains</h5>
                  <i class="fa fa-angle-down"></i>
                </div>
              </div>
            </div>
            <div class="Explore__option_card">
              <div class="explore__option_panel ">
                <div class="secret">
                  <h5>Cities We Deliver To</h5>
                  <i class="fa fa-angle-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* --------------------------------------------- */}

      <Footer />
      {/* <footer class="container footer">
        <div class="footer_section1">
          <img src="images/logo.png" alt="zomato" />
          <div class="section1__buttonContainer">
            <button>
              <img
                src="https://flagcdn.com/w40/lk.png"
                alt="Sri Lankan Flag"
                style="width: 17px"
              />
              Sri Lanka
            </button>
            <button>
              <i class="fa fa-globe"></i>English
            </button>
          </div>
        </div>
        <div class="navigation_container">
          <div class="link__container">
            <h5>ABOUT ZOMATO</h5>
            <a href="#" class="footer__link">
              Who We Are
            </a>
            <a href="#" class="footer__link">
              Blog
            </a>
            <a href="#" class="footer__link">
              Work With Us
            </a>
            <a href="#" class="footer__link">
              Investor Relations
            </a>
            <a href="#" class="footer__link">
              Report Fraud
            </a>
            <a href="#" class="footer__link">
              Contact Us
            </a>
          </div>

          <div class="link__container">
            <h5>ZOMAVERSE</h5>
            <a href="#" class="footer__link">
              Zomato
            </a>
            <a href="#" class="footer__link">
              Feeding Sri Lanka
            </a>
            <a href="#" class="footer__link">
              Colombo
            </a>
            <a href="#" class="footer__link">
              Zomaland
            </a>
          </div>

          <div class="link__container">
            <h5>FOR RESTAURANTS</h5>
            <a href="#" class="footer__link">
              Partner With Us
            </a>
            <a href="#" class="footer__link">
              Apps For You
            </a>
            <br />
            <h5>FOR ENTERPRISES</h5>
            <a href="#" class="footer__link">
              Zomato For Work
            </a>
          </div>

          <div class="link__container">
            <h5>LEARN MORE</h5>
            <a href="#" class="footer__link">
              Privacy
            </a>
            <a href="#" class="footer__link">
              Security
            </a>
            <a href="#" class="footer__link">
              Terms
            </a>
            <a href="#" class="footer__link">
              Sitemap
            </a>
          </div>

          <div class="link__container">
            <h5>SOCIAL LINKS</h5>
            <div class="social__links_container">
              <button>
                <i class="fa-brands fa-linkedin-in"></i>
              </button>
              <button>
                <i class="fa-brands fa-instagram"></i>
              </button>
              <button>
                <i class="fa-brands fa-twitter"></i>
              </button>
              <button>
                <i class="fa-brands fa-youtube"></i>
              </button>
              <button>
                <i class="fa-brands fa-facebook"></i>
              </button>
            </div>
            <br />
            <img
              src="images/appleStore.png"
              alt="appleStore"
              class="footer__section_logos"
            />
            <img
              src="images/playStore.png"
              alt="playStore"
              class="footer__section_logos"
            />
          </div>
        </div>
        <div class="disclaimer">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2022 © Zomato™ Ltd. All
          rights reserved.
        </div>
      </footer> */}
    </div>
  );
}

export default App;