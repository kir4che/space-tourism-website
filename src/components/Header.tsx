import { Link, useLocation,  } from 'react-router-dom';

import Sidebar from "./Sidebar";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className='relative flex justify-between items-center pt-6'>
      <Link to="/"><img className='h-12 pl-6 mobile:h-9' src='../assets/shared/logo.svg' alt='logo' /></Link>
      <hr className='absolute left-36 w-3/4 opacity-40 tablet:hidden' />
      <nav className='px-28 py-6 space-x-8 bg-white/5 backdrop-blur-md shadow text-white tablet:px-16 tablet:space-x-4 mobile:hidden'>
        <Link to="/" className={`nav-btn ${location.pathname === '/home' ? 'nav-active-btn' : ''}`}>
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
