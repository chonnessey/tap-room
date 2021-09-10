import React from 'react';

class KegControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibileOnPage: false,
      masterKegList: [],
      selectedKeg: null
    }
  }
}

export default KegControl;