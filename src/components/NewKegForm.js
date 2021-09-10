import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, id: v4()})
  }

  return (
    <>
      <form onSubmit={handleNewKegFormSubmission}>
        <div className="form-group">
          <input 
            className="form-control"
            name='name' 
            type="text" 
            placeholder="Name your Beer!" />
        </div>
        <div className="form-group">
          <input 
            className="form-control"
            name='brand' 
            type="text" 
            placeholder="What Brand of Beer is it?" />
        </div>
        <div className="form-group">
          <input 
            className="form-control"
            name='price' 
            type="text" 
            placeholder="Price" />
        </div>
        <div className="form-group">
          <input 
            className="form-control"
            name='alcoholContent' 
            type="text" 
            placeholder="Alcohol Content" />
        </div>
        <button className="btn-primary">Submit</button>
      </form>
    </>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;