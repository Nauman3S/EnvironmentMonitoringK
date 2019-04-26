import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export  class GaugeElement extends React.Component {
    constructor(props) {
        super(props);
        this.state={val:this.props.val}

    }

    render() {
        return (
        <div className="w3-card-4 w3-gray w3-round-large" style={{width:240}} >
      
        <div style={{width: 120, marginLeft:"auto", marginRight:"auto"}}>
        <CircularProgressbar percentage={this.props.val} text={`${this.props.val}%`}/>
        </div>
         <div className="w3-container w3-round w3-center w3-light-gray">
         
        <h6>{this.props.def}</h6>

           </div>
        </div>

        );

    }


}