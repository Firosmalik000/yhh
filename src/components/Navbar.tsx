import { useState, useEffect } from 'react';
import LogoImage from '../img/yhhlogo.png';

import { FaTimes } from 'react-icons/fa';
import { IoMenuSharp } from 'react-icons/io5';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for controlling menu visibility

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const classOptionNav = 'cursor-pointer font-semibold';
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-white shadow-lg text-black' : 'bg-blue-600 text-white'}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <img src={LogoImage} className="w-[80px]" alt="Logo" />
        </div>

        <div className="hidden lg:flex items-center gap-x-6">
          <div onClick={() => handleScrollTo('about')} className={classOptionNav}>
            About
          </div>

          <div onClick={() => handleScrollTo('ourbrand')} className={classOptionNav}>
            Our Brand
          </div>
          <div onClick={() => handleScrollTo('productcategory')} className={classOptionNav}>
            ProductCategory
          </div>
          <div onClick={() => handleScrollTo('contact')} className={classOptionNav}>
            Contact Us
          </div>
        </div>

        <button className="lg:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <IoMenuSharp size={30} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-blue-700 text-white flex flex-col items-center justify-center pt-16">
          <div className="absolute top-4 right-4 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            <FaTimes size={30} />
          </div>
          <div className="flex flex-col gap-y-4 text-xl">
            <div onClick={() => handleScrollTo('about')} className="cursor-pointer text-center">
              About
            </div>
            <div onClick={() => handleScrollTo('vision')} className="cursor-pointer text-center">
              vision
            </div>
            <div onClick={() => handleScrollTo('mision')} className="cursor-pointer text-center">
              Mission
            </div>
            <div onClick={() => handleScrollTo('service')} className="cursor-pointer text-center">
              Service
            </div>

            <div onClick={() => handleScrollTo('contact')} className="cursor-pointer text-center">
              Contact Us
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
