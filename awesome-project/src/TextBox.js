
import React from 'react';
import './w3.css';
export default class TextBox extends React.Component {

    
  constructor(props) {
    super(props);
    this.state = {value: ''};
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  

  handleChange(event) {
    
    this.setState({value: event.target.value});
    this.props.sendDataTextBox(this.state.value);
    
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
       


        <div className="w3-card-4 w3-round-large">

        <div className="w3-container w3-green ">
          <h3>Alarm</h3>
        </div>

      <form className="w3-container w3-light-gray  w3-round" onSubmit={this.handleSubmit}>
        <h5>
          If value greater than:
          <input type="text" className="w3-input w3-round-large" value={this.state.value} onChange={this.handleChange} />
        </h5>
        {/* <input type="submit" className="w3-button w3-teal w3-round" value="Submit" /> */}
      </form>
      </div>
    );
  }
}
