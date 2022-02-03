import React from 'react';

import Review from '../Review/review';
import Pricing from '../Pricing/pricing';

import './description.scss';

const Description = (
  {
    name,
    stars,
    preview,
    startPrice,
    discountPrice,
    reviewScore,
    reviewCount
  }) => {

  function getStarNumberToString(stars) {
    let result = "";
    for (let index = 0; index < stars; index++) {
      result += "*";
    }
    return result;
  }

  return (
    <div className='descriptionContainer'>
      <div className='titleContainer'>
        <div className='title'>
          <div className='hotelName'>{name}</div>
          <span>{getStarNumberToString(stars)}</span>
        </div>
        <Review reviewScore={reviewScore} reviewCount={reviewCount}></Review>
      </div>
      <span>{preview}</span>
      <Pricing startPrice={startPrice} discountPrice={discountPrice}></Pricing>
    </div>
  );
}

export default Description;
