import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3 className="keg-header">{props.name}</h3>
        <h5>Brewery - {props.brand}</h5>
        <p>Price - ${props.price}</p>
        <p>ABV - {props.alcoholContent}%</p>
      </div>
    </>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;