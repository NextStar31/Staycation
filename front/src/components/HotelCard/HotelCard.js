import React from 'react';

import Description from '../Description/description';
import Image from '../Image/image';

const HotelCard = (
  {
    name,
    stars,
    preview,
    pictureId,
    reviewScore,
    reviewCount,
    startPrice,
    discountPrice
  }) => {
  return (
    <div id="hotel-card" style={styles.container}>
      <div style={styles.box}>
        <Image pictureId={pictureId}></Image>
        <Description
          name={name}
          stars={stars}
          preview={preview}
          startPrice={startPrice}
          discountPrice={discountPrice}
          reviewScore={reviewScore}
          reviewCount={reviewCount}>
        </Description>
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: '50%'
  },
  box: {
    padding: '12px'
  }
};

export default HotelCard;
