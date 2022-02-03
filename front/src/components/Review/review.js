import React from 'react';

const Review = ({ reviewScore, reviewCount}) => {
    return (<>
        {reviewCount > 0 &&
            <div id="review-container" style={styles.reviewContainer}>
                <div>{reviewScore} ({reviewCount})</div>
            </div>
        }
    </>
    );
}

const styles = {
    reviewContainer: {
        fontSize: 'medium',
        color: '#A2A2A2'
    }
};

export default Review;
