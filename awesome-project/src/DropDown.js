import React from 'react';
import './dropdown.css';

const race = [ 'Temperature','Humidity', 'CO', 'LPG', 'Smoke', 'Dust'];


export default class Dropdown extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      haveText: ""
    }
  }

  render() {
    const {isOpen, haveText} = this.state;

    return (
      <div
        className={isOpen ? "dropdown active" : "dropdown"}
        onClick={this.handleClick} >
        <div className="dropdown__text">
          {!haveText ? "Select Sensor" : haveText}
        </div>
        {this.itemList(race)}
      </div>
    )
  }

 handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    
  }

  handleText = (ev) => {
    this.props.sendDataDropDown(this.state.haveText);
    this.setState({
      haveText: ev.currentTarget.textContent
      
    })
    
  }

  itemList = props => {
    
    console.log(this.state.haveText);
    
    const list = props.map((item) => (
      <div
        onClick={this.handleText}
        className="dropdown__item"
        key={item.toString()}>
        {item}
      </div>
    ));

    return (
      <div className="dropdown__items"> { list } </div>
    )
  }

}

