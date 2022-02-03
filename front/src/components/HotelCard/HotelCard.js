import React, { useEffect, useState } from 'react'

const HotelCard = (
  {
    id,
    name,
    stars,
    preview,
    pictureId
  }) => {


  const [review, setReview] = useState({
    score: 0,
    count: 0
  });
  const [price, setPrice] = useState({
    discountPrice: 0,
    startPrice: 0
  });

  useEffect(() => {
    fetch(`http://localhost:9000/reviews/${id}`)
      .then(async res => {
        const result = await res.json()
        setReview({
          score: result.round,
          count: result.count
        })
      })
      .catch(e => console.warn('Error: ', e))
  }, id)

  useEffect(() => {
    fetch(`http://localhost:9000/prices/${id}`)
      .then(async res => {
        const result = await res.json()
        setPrice({
          discountPrice: result.discountPrice,
          startPrice: result.price
        })
      })
      .catch(e => console.warn('Error: ', e))
  }, id)

  function getStarNumberToString(stars) {
    let result = "";
    for (let index = 0; index < stars; index++) {
      result += "*";
    }
    return result;
  }

  return (
    <div id="hotel-card" style={styles.container}>
      <div style={styles.imgContainer}>
        <img style={styles.img}
          src={pictureId}
          alt="Hotel"></img></div>
      <div style={styles.descriptionContainer}>
        <div style={styles.titleContainer}>
          <div style={styles.hotelName}>{name}</div>
          <span>{getStarNumberToString(stars)}</span>
          <div>{review.score} ({review.count})</div>
        </div>
        <span>{preview}</span>
        <div>{price.discountPrice} {price.startPrice}</div>
      </div>
    </div>
  )
}


const styles = {
  container: {
    padding: '12px'
  },
  imgContainer: {
    height: '300px'
  },
  img: {
    width: '100%',
    objectFit: 'cover',
    height: '100%',
    borderRadius: '8px'
  },
  descriptionContainer: {
    marginBottom: '24px',
    fontSize: 'large',
    marginTop: '12px'
  },
  titleContainer: {
    display: 'flex',
    fontWeight: 'bold'
  },
  hotelName: {
    marginRight: '8px'
  }
}

export default HotelCard
