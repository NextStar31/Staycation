import React from 'react';

import Price from '../Price/price';
import './pricing.scss';

const Pricing = ({ startPrice, discountPrice }) => {

    function calculateDiscountPercentage() {
        return Math.round((startPrice - discountPrice) / startPrice * 100);
    }

    return (
        <>
            {startPrice > 0 &&
                <div className='pricing-container'>
                    <Price value={discountPrice} ui={'discountPrice'}></Price>
                    <Price value={startPrice} ui={'startPrice'}></Price>
                    <div className='discountPercent'>-{calculateDiscountPercentage()}%</div>
                </div>
            }
        </>
    );
}

export default Pricing;
