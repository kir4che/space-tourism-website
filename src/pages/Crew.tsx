import React, { useState } from 'react';

import Header from '../components/Header';
import data from '../data.json';

const Crew: React.FC = () => {
  const [buttonID, setButtonID] = useState(0);

  return (
    <div className='h-screen bg-desktop-crew bg-fixed bg-left-top bg-no-repeat bg-cover tablet:h-full tablet:text-center tablet:bg-tablet-technology mobile:bg-mobile-technology'>
      <Header />
      <h6 className='absolute top-32 left-36 mb-24 text-white tablet:relative tablet:top-12 tablet:left-0 mobile:top-8 mobile:scale-75'><b className='text-white/30'>02</b>　MEET YOUR CREW</h6>
      <div className='flex justify-around items-end tablet:flex-col tablet:justify-center tablet:items-center mobile:flex-col-reverse mobile:scale-75'>
        <div className='mb-32 mobile:mb-0 mobile:flex mobile:flex-col-reverse'>
          <div className='tablet:scale-90'>
            <h4 className='text-white/50 uppercase'>{data.crew[buttonID].role}</h4>
            <h3 className='my-8 whitespace-nowrap uppercase mobile:scale-75'>{data.crew[buttonID].name}</h3>
            <p className='max-w-lg mobile:max-w-2xl'>{data.crew[buttonID].bio}</p>
          </div>
          <nav className='mt-16 space-x-4 tablet:justify-center tablet:mt-4 mobile:-mt-12 mobile:mb-8'>
            <button
              className={`crew-btn ${buttonID === 0 ? 'crew-active-btn' : ''}`}
              onClick={() => setButtonID(0)}
            ></button>
            <button
              className={`crew-btn ${buttonID === 1 ? 'crew-active-btn' : ''}`}
              onClick={() => setButtonID(1)}
            ></button>
            <button
              className={`crew-btn ${buttonID === 2 ? 'crew-active-btn' : ''}`}
              onClick={() => setButtonID(2)}
            ></button>
            <button
              className={`crew-btn ${buttonID === 3 ? 'crew-active-btn' : ''}`}
              onClick={() => setButtonID(3)}
            ></button>
          </nav>
        </div>
        <img className='h-[560px] mt-12 tablet:-mt-40 tablet:-mb-16 tablet:scale-75 mobile:relative mobile:-top-16 mobile:border-b-2' src={data.crew[buttonID].images.webp} alt={data.crew[buttonID].name} />
      </div>
    </div>
  )
}

export default Crew;