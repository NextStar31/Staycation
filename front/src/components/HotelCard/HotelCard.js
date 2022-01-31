import React from 'react';

const HotelCard = (
  {
    id,
    name,
    stars,
    preview,
    pictureId
  }) => {

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
        </div>
        <span>{preview}</span>
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
