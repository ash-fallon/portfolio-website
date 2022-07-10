import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const clickHandler = () => setNav(!nav);

  const socials = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/ashfallon',
      colour: 'bg-blue-700',
    },
    {
      name: 'Github',
      icon: FaGithub,
      url: 'https://github.com/ash-fallon',
      colour: 'bg-[#333333]',
    },
    {
      name: 'CV',
      icon: IoDocumentTextOutline,
      url: 'https://drive.google.com/file/d/17_feXxYsw8ZvyOKzacIqIG2LHBzYbkGz/view?usp=sharing',
      colour: 'bg-[#6fc2b0]',
    },
  ];

  const socialsOutput = socials.map((social, index) => {
    return (
      <li
        className={`w-40 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${social.colour}`}
        key={index}
      >
        <a
          className='flex justify-between items-center w-full text-gray-300'
          href={social.url}
          target='_blank'
          rel='noreferrer'
        >
          {social.name} <social.icon size={30} />
        </a>
      </li>
    );
  });

  return (
    <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      {/* Logo */}
      <div className='text-2xl text-pink-600'>{`<Ash Fallon />`}</div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
        <li className='py-6 text-4xl'>
          <Link onClick={clickHandler} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={clickHandler} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={clickHandler} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link
            onClick={clickHandler}
            to='projects'
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link
            onClick={clickHandler}
            to='contact'
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>{socialsOutput}</ul>
      </div>
    </div>
  );
};

export default Navbar;
