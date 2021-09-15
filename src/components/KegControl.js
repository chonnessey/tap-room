import React from 'react';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm'
import KegList from './KegList'

class KegControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null
    }
  }

  handleSellingPint = (keg) => {
    let message;
    if (keg.quantity > 0) {
      keg.quantity--;
      this.setState({
        selectedKeg: keg
      })
    } else {
      message = "OUT OF STOCK :("
    }
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList, formVisibleOnPage: false
    })
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => 
        ({formVisibleOnPage: !prevState.formVisibleOnPage}));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingSell={this.handleSellingPint} />
      buttonText = "Return to Keg list"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg list"
    } else {
      currentlyVisibleState = <KegList kegList = {this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add Keg!";
    }

    return (
      <>
        {currentlyVisibleState}
        <button className="btn btn-success" onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
  
}

export default KegControl;