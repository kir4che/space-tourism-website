import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation();

  return (
    <Menu
      customBurgerIcon={<img src='../assets/shared/icon-hamburger.svg' alt='' />}
      customCrossIcon={<img src='../assets/shared/icon-close.svg' alt='' />}
      right
      isOpen={false}
      onStateChange={() => setIsMenuOpen(!isMenuOpen)}>
      <Link to="/"><b>00</b> Home</Link>
      <Link to="/destination"><b>01</b> Destination</Link>
      <Link to="/crew"><b>02</b> Crew</Link>
      <Link to="/technology"><b>03</b> Technology</Link>
    </Menu>
  );
}
// hidden mobile:inline mobile: pr - 6
export default Sidebar;