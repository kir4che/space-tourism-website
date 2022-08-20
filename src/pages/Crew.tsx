import React, { useState } from 'react';

import Header from '../components/Header';
import data from '../data.json';

const Crew: React.FC = () => {
  const [buttonID, setButtonID] = useState(0);

  return (
    <div className='min-h-screen bg-no-repeat bg-cover bg-desktop-crew tablet:bg-tablet-technology tablet:text-center mobile:bg-mobile-technology'>
      <Header />
      <h6 className='absolute text-white mb-28 top-32 left-36 tablet:relative tablet:top-16 tablet:left-0 mobile:top-8 mobile:scale-75'><b className='text-white/30'>02</b>　MEET YOUR CREW</h6>
      <div className='flex items-end justify-around tablet:flex-col tablet:justify-center tablet:items-center mobile:flex-col-reverse mobile:scale-75'>
        <div className='mb-32 mobile:mb-0 mobile:flex mobile:flex-col-reverse'>
          <div className='tablet:scale-90'>
            <h4 className='uppercase text-white/50'>{data.crew[buttonID].role}</h4>
            <h3 className='my-8 uppercase whitespace-nowrap mobile:scale-75'>{data.crew[buttonID].name}</h3>
            <p className='max-w-lg mobile:max-w-2xl'>{data.crew[buttonID].bio}</p>
          </div>
          <nav className='mt-16 space-x-4 tablet:justify-center tablet:mt-4 mobile:-mt-32 mobile:mb-8'>
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
        <img className='max-h-[580px] mt-12 tablet:mt-0 mobile:relative mobile:-top-44 mobile:border-b-2' src={data.crew[buttonID].images.webp} alt={data.crew[buttonID].name} />
      </div>
    </div>
  )
}

export default Crew;