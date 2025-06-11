import { Link } from 'react-router-dom';
import facebookIcon from '../assets/facebook-f-brands.svg';
import twitterIcon from '../assets/x-twitter-brands.svg';
import instagramIcon from '../assets/instagram-brands.svg';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="mx-5 lg:mx-[80px]">
        <div className="grid sm:grid-cols-2 mb-12">
          <div>
            <div className="text-2xl lobster-style text-center sm:text-start mb-4">
              Foodieland
            </div>
            <div className="text-center sm:text-start">
              Lorem ipsum dolor sit amet, consectetuipisicing elit,{' '}
            </div>
          </div>

          <div className="flex space-x-4 font-medium justify-center sm:justify-end mt-4 md:mt-0">
            <div>
              <a href="/">Home</a>
            </div>
            <div>
              <Link
                to="/recipe"
                className="hover:text-blue-500"
                onClick={handleClick}
              >
                Recipes
              </Link>
            </div>
            <div>
              <Link
                to="/blog"
                className="hover:text-blue-500"
                onClick={handleClick}
              >
                Blog
              </Link>
            </div>
            <div>
              <Link
                to="/contact"
                className="hover:text-blue-500"
                onClick={handleClick}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <hr className="mb-10 border-[#0000001A]" />

        <div className="flex flex-col md:flex-row items-center md:justify-between mb-12">
          <div className="md:order-1"></div>
          <div className="order-2 md:order-2">
            © {year} Flowbase. Powered by Webflow
          </div>

          <div className="order-1 md:order-3 flex space-x-13 mb-6 md:mb-0">
            <a href="">
              <img
                className="w-[15px] cursor-pointer"
                src={facebookIcon}
                alt=""
              />
            </a>

            <a href="">
              {' '}
              <img
                className="w-[15px] cursor-pointer"
                src={twitterIcon}
                alt=""
              />{' '}
            </a>

            <a href="">
              <img
                className="w-[15px] cursor-pointer"
                src={instagramIcon}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
