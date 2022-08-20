import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

const Home: React.FC = () => {
  return <>
    <div className='min-h-screen bg-cover bg-desktop-home tablet:bg-tablet-home mobile:bg-mobile-home'>
      <Header />
      <div className='flex items-end justify-around mt-40 tablet:flex-col tablet:justify-center tablet:items-center tablet:h-screen tablet:mt-0 tablet:text-center mobile:mt-2 mobile:scale-75'>
        <div>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className='my-20'>SPACE</h1>
          <p className='max-w-md tablet:max-w-xl'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <Link to="/destination" >
          <button className='explore-btn'><h4>EXPLORE</h4></button>
        </Link>
      </div>
    </div>
  </>
}

export default Home;
