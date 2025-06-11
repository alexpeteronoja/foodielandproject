import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import facebookIcon from '../assets/facebook-f-brands.svg';
import twitterIcon from '../assets/x-twitter-brands.svg';
import instagramIcon from '../assets/instagram-brands.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  return (
    <>
      <nav className="nav-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-[24px] lobster-style">
              <Link to="/">
                Foodieland<span className=" text-[#FF7426]">.</span>
              </Link>
            </div>

            {/* Hamburger Button (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Navigation Links (Desktop) */}

            <div className="hidden md:flex items-center space-x-6 text-base">
              <Link
                to="/"
                className={` hover:text-blue-500 ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
              <Link
                to="/recipe"
                className={`hover:text-blue-500 ${location.pathname === '/recipe' ? 'active' : ''}`}
              >
                Recipes
              </Link>
              <Link
                to="/blog"
                className={`hover:text-blue-500 ${location.pathname === '/blog' ? 'active' : ''}`}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className={`hover:text-blue-500 ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </div>

            <div className="hidden md:flex space-x-13">
              <img
                className="w-[15px] cursor-pointer"
                src={facebookIcon}
                alt=""
              />
              <img
                className="w-[15px] cursor-pointer"
                src={twitterIcon}
                alt=""
              />
              <img
                className="w-[15px] cursor-pointer"
                src={instagramIcon}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <div>
              <Link to="/" className="block hover:text-blue-500">
                Home
              </Link>
              <Link to="/recipe" className="block hover:text-blue-500">
                Recipes
              </Link>
              <Link
                to="/blog"
                className="block hover:text-blue-500"
                // state={{ scrollTo: 'project-section' }}
                // className="block hover:text-blue-500"
              >
                Blog
              </Link>

              <Link to="/contact" className="block hover:text-blue-500">
                Contact
              </Link>
            </div>

            <div className="flex justify-center space-x-15">
              <img
                className="w-[15px] cursor-pointer"
                src={facebookIcon}
                alt=""
              />
              <img
                className="w-[15px] cursor-pointer"
                src={twitterIcon}
                alt=""
              />
              <img
                className="w-[15px] cursor-pointer"
                src={instagramIcon}
                alt=""
              />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
