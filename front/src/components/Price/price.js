import React from 'react';

const Price = ({ value, ui }) => {
    return (<div className={[ui]}>{value} €</div>);
}

export default Price;
