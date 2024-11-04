import React, {useState} from 'react'
import Logo from '../../assets/Logo.png'
import DarkMode from './DarkMode';
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';

export const Navlinks = [
  {
    id: 1,
    name: 'Home',
    link: '#home'
  },
  {
    id: 2,
    name: 'About Us',
    link: '#about'
  },
  {
    id: 3,
    name: 'Services',
    link: '#service'
  },
  {
    id: 6,
    name: 'Blog',
    link: '#blog'
  },
  {
    id: 4,
    name: 'Testimonials',
    link: '#testimonial'
  },
  {
    id: 5,
    name: 'Contact',
    link: '#contact'
  },
];

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className='fixed z-10 shadow-md w-full bg-dark-400/10 bg-white dark:bg-black dark:text-white px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='sm:flex items-center gap-3 font-semibold text-gray-500 group'>
            <img src={Logo} alt="" className='w-24'/>
          </div>
          <nav className='hidden md:block'>
            <ul className='flex items-center gap-8'>
              { 
                Navlinks.map(({id, name, link})=>{
                  return <li key={id} className='py-4'>
                    <a href={link} className='inlineblock text-lg font-semibold hover:text-accent transition-all duration-0.8'>
                      {name}
                    </a>
                  </li>
                })
              }
              {/* implementing dark mode feature */}
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view */}
          <div className='flex items-center gap-4 md:hidden py-4'>
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer transition-all' size={30}/>
            ):(
              <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer transition-all' size={30}/>
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu= {showMenu} />
      </div>
  )
}

export default Navbar