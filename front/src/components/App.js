import React, { useEffect, useState } from 'react';

import Header from './Header';
import HotelCard from './HotelCard/hotelCard';

const App = () => {

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/hotels')
      .then(async res => {
        const result = await res.json();
        setHotels(result);
      })
      .catch(e => console.warn('Error: ', e))
  }, [])


  return (<div className='app'>
    <Header />
    <div className='app__body'>
      <div style={styles.container}>
        {hotels && hotels.map((hotel, index) => (
            <HotelCard {...hotel} key={index}></HotelCard>
        ))}
      </div>
    </div>
  </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // fill rows left to right
    padding: '2% 9%'
  }
};

export default App;
