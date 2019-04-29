import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export  class GaugeElement extends React.Component {
  
    constructor(props) {
        super(props);
        this.state={val:this.props.val};
        this.state={sign:this.props.sign};
    }
  

    render() {
        return (
        
        <CircularProgressbar percentage={this.props.val} text={`${this.props.val}${this.state.sign}`}/>
        

        );

    }


}