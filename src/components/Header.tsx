import { Link, useLocation } from 'react-router-dom';

import Sidebar from "./Sidebar";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className='relative flex items-center justify-between pt-6'>
      <Link to="/"><img className='h-12 pl-6 mobile:h-9' src='../assets/shared/logo.svg' alt='logo' /></Link>
      <hr className='absolute w-3/4 left-36 opacity-40 tablet:hidden' />
      <nav className='py-6 space-x-8 text-white shadow px-28 bg-white/5 backdrop-blur-md tablet:px-16 tablet:space-x-4 mobile:hidden'>
        <Link to="/" className={`nav-btn ${location.pathname === '/' ? 'nav-active-btn' : ''}`}>
          <b className='tablet:hidden'>00</b> Home
        </Link>
        <Link to="/destination" className={`nav-btn ${location.pathname === '/destination' ? 'nav-active-btn' : ''}`}>
          <b className='tablet:hidden'>01</b> Destination
        </Link>
        <Link to="/crew" className={`nav-btn ${location.pathname === '/crew' ? 'nav-active-btn' : ''}`}>
          <b className='tablet:hidden'>02</b> Crew
        </Link>
        <Link to="/technology" className={`nav-btn ${location.pathname === '/technology' ? 'nav-active-btn' : ''}`}>
          <b className='tablet:hidden'>03</b> Technology
        </Link>
      </nav >
      <div className='hidden mobile:inline'>
        <Sidebar />
      </div>
    </header>
  );
}

export default Header;
