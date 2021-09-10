import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg } = props;

  return (
    <>
      <h1>Keg Deets</h1>
      <h3>{keg.name} - {keg.brand}</h3>
      <p>{keg.price}</p>
      <p>{keg.alcoholContent}%</p>
    </>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail;