import React, { useState } from 'react';

import Header from '../components/Header';
import data from '../data.json';

const Destination: React.FC = () => {
  const [planet, setPlanet] = useState<'moon' | 'mars' | 'europa' | 'titan'>('moon');
  const [planetID, setPlanetID] = useState(0);

  return (
    <div className='relative h-screen	bg-desktop-destination bg-fixed bg-no-repeat bg-cover tablet:h-full tablet:bg-tablet-destination tablet:text-center mobile:bg-mobile-destination'>
      <Header />
      <h6 className='absolute top-32 left-36 text-white tablet:relative tablet:left-0 tablet:-mt-20 tablet:-mb-64 mobile:left-0 mobile:-mt-24 mobile:-mb-80 mobile:scale-75'><b className='text-white/30'>01</b>　PICK YOUR DESTINATION</h6>
      <div className='flex justify-around items-end tablet:flex-col tablet:justify-center tablet:items-center tablet:mx-0 tablet:mt-56 tablet:scale-90 mobile:scale-75'>
        <img className='mt-28 tablet:scale-75' src={data.destinations[planetID].images.webp} alt={data.destinations[planetID].name} />
        <div>
          <nav className='space-x-6'>
            <button
              className={`dest-btn ${planet === 'moon' ? 'dest-active-btn' : ''}`}
              onClick={() => {
                setPlanet('moon')
                setPlanetID(0)
              }}
            >
              MOON
            </button>
            <button
              className={`dest-btn ${planet === 'mars' ? 'dest-active-btn' : ''}`}
              onClick={() => {
                setPlanet('mars')
                setPlanetID(1)
              }}
            >
              MARS
            </button>
            <button
              className={`dest-btn ${planet === 'europa' ? 'dest-active-btn' : ''}`}
              onClick={() => {
                setPlanet('europa')
                setPlanetID(2)
              }}
            >
              EUROPA
            </button>
            <button
              className={`dest-btn ${planet === 'titan' ? 'dest-active-btn' : ''}`}
              onClick={() => {
                setPlanet('titan')
                setPlanetID(3)
              }}
            >
              TITAN
            </button>
          </nav>
          <h2 className='mt-20 uppercase'>{data.destinations[planetID].name}</h2>
          <p className='max-w-md my-12 mobile:max-w-xl'>{data.destinations[planetID].description}</p>
          <hr className='opacity-25' />
          <div className='flex mt-8 space-x-20 tablet:justify-around tablet:mb-12 mobile:flex-col mobile:space-x-0 mobile:space-y-8 mobile:-mb-20'>
            <div>
              <p>AVG. DISTANCE</p>
              <h5 className='text-white'>{data.destinations[planetID].distance}</h5>
            </div>
            <div>
              <p>Est. travel time</p>
              <h5 className='text-white'>{data.destinations[planetID].travel}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination;