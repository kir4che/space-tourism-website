import React, { useState } from 'react';

import Header from '../components/Header';
import data from '../data.json';

const Technology: React.FC = () => {
  const [buttonID, setButtonID] = useState(0);

  return (
    <div className='min-h-screen bg-no-repeat bg-cover bg-desktop-technology tablet:h-full tablet:bg-tablet-technology tablet:text-center mobile:bg-mobile-technology'>
      <Header />
      <h6 className='absolute mb-24 text-white top-32 left-36 tablet:relative tablet:top-16 tablet:left-0 tablet:-mb-16 mobile:top-8 mobile:-mb-48 mobile:scale-75'><b className='text-white/30'>03</b>　SPACE LAUNCH 101</h6>
      <div className='flex justify-around items-center mt-28 tablet:flex-col-reverse tablet:scale-90 mobile:scale-[.65]'>
        <div className='flex tablet:flex-col'>
          <nav className='flex flex-col mr-6 space-y-8 tablet:flex-row tablet:justify-center tablet:my-12 tablet:space-x-6 tablet:space-y-0 mobile:scale-90'>
            <button
              className={`tech-btn ${buttonID === 0 ? 'tech-active-btn' : ''}`}
              onClick={() => setButtonID(0)}
            >1</button>
            <button
              className={`tech-btn ${buttonID === 1 ? 'tech-active-btn' : ''}`}
              onClick={() => setButtonID(1)}
            >2</button>
            <button
              className={`tech-btn ${buttonID === 2 ? 'tech-active-btn' : ''}`}
              onClick={() => setButtonID(2)}
            >3</button>
          </nav>
          <div>
            <p>THE TERMINOLOGY...</p>
            <h3 className='my-8 uppercase whitespace-nowrap'>{data.technology[buttonID].name}</h3>
            <p className='max-w-lg tablet:max-w-2xl'>{data.technology[buttonID].description}</p>
          </div>
        </div>
        <img className='w-[28vw] tablet:w-[80vw]' src={data.technology[buttonID].images.portrait} alt={data.technology[buttonID].name} />
      </div>
    </div>
  )
}

export default Technology;