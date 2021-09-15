import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg } = props;

  return (
    <>
      <h2>Keg Deets</h2>
      <h3>{keg.name}</h3>
      <h4>{keg.brand}</h4>
      <p>Price - ${keg.price}</p>
      <p>ABV - {keg.alcoholContent}%</p>
      <p>Pint Quantity - {keg.quantity}: <button className="btn-sm btn-primary">Buy Pint</button></p>
    </>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail;