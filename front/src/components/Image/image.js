import React from 'react';

const Image = ({ pictureId }) => {
    return (
        <div id="hotel-img" style={styles.imgContainer}>
            <img style={styles.img}
                src={pictureId}
                alt="Hotel"></img>
        </div>
    );
}

const styles = {
    imgContainer: {
        height: '300px'
    },
    img: {
        width: '100%',
        objectFit: 'cover',
        height: '100%',
        borderRadius: '8px'
    }
};

export default Image;
