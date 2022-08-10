import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

const Home: React.FC = () => {
  return <>
    <div className='h-screen	bg-desktop-home bg-fixed bg-no-repeat bg-cover tablet:h-full tablet:bg-tablet-home tablet:bg-center mobile:h-screen mobile:bg-mobile-home mobile:bg-bottom'>
      <Header />
      <div className='flex justify-around items-end mt-40 tablet:flex-col tablet:justify-center tablet:items-center tablet:mt-12 tablet:text-center mobile:-mt-8 mobile:scale-75'>
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