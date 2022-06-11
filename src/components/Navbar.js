import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const clickHandler = () => setNav(!nav);

  const socials = [
    { name: 'LinkedIn', icon: FaLinkedin, url: '/', colour: 'bg-blue-700' },
    { name: 'Github', icon: FaGithub, url: '/', colour: 'bg-[#333333]' },
    { name: 'Email', icon: HiOutlineMail, url: '/', colour: 'bg-[#6fc2b0]' },
    {
      name: 'CV',
      icon: BsFillPersonLinesFill,
      url: '/',
      colour: 'bg-[#565f69]',
    },
  ];

  const socialsOutput = socials.map(social => {
    return (
      <li
        className={`w-40 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${social.colour}`}
      >
        <a
          className='flex justify-between items-center w-full text-gray-300'
          href={social.url}
        >
          {social.name} <social.icon size={30} />
        </a>
      </li>
    );
  });

  return (
    <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      {/* Logo */}
      <div className='text-2xl text-pink-500'>{`<Ash Fallon />`}</div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger menu */}
      <div onClick={clickHandler} className='md:hidden z-10'>
        {!nav && <FaBars />}
        {nav && <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>{socialsOutput}</ul>
      </div>
    </div>
  );
};

export default Navbar;
