import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import menuIcon from '../assets/menu.svg';

export default function Navbar() {
  const [isShow, setShow] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShow(!isShow);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShow(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="font-figtree font-bold text-slate-100 fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out py-6">
      <img
        src={menuIcon}
        alt="menu-icon"
        className="hover:opacity-50 md:hidden bg-slate-200 bg-opacity-20 p-3 rounded-full float-right me-5 backdrop-blur-md cursor-pointer"
        onClick={toggleMenu}
      />
      <div
        className={`${
          isShow ? 'block' : 'hidden'
        } md:block absolute md:static container md:mx-auto flex items-center md:justify-center p-10 md:px-11 md:py-3 bg-slate-200 md:w-fit bg-opacity-20 md:rounded-full backdrop-blur-md z-[-10] top-0`}
      >
        <ul className="md:items-center md:gap-6 md:flex text-3xl md:text-sm">
          <li>
            <a href="#home" className="hover:text-cyan-400 block md:inline my-5">
              Home
            </a>
          </li>
          <li>
            <a href="#workExperience" className="hover:text-cyan-400 block md:inline my-5">
              Work Experiences
            </a>
          </li>
          <li>
            <button onClick={() => navigate('/blog')}>
              <a href="javascript:void(0)" className="hover:text-cyan-400 block md:inline my-5">
                Blog
              </a>
            </button>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 block md:inline my-5">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
