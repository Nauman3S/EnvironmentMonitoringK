
import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import './w3.css';

import {Connector} from "mqtt-react";
import _MessageContainer from './MQTTsubscribe.js';
import {subscribe} from 'mqtt-react';
import Clock from "./ClockWidget.js";
import ChartElement from "./ChartsElement";
import Demo from './ConnectedSensors.js';

const MessageContainer = subscribe({topic: 'c/data/d/string'})(_MessageContainer);

class SideBar extends React.Component{
  
  
    state={b1:0,
    b2:0,
  b3:0

    }

  
    btnList=[
      "Device 1",
      "Device 2",
      "Device 3"
      
    ];
    btnCounter=3;
  handleClick(n,bList){
    
    if(n===1){
      this.setState({
        b1: 1
      });
      console.log("button 1 =",this.state.b1);
    }
    else if(n===2){
      this.setState({
        b2: 1
      });
      console.log("button 2 =",this.state.b2);
    }

    else if(n===3){
      this.setState({
        b3: 1
      });
      console.log("button 3 =",this.state.b3);
    }

    else if(n===99){
      this.setState({
        b3: 1
      });
      console.log("button 4-add =",this.state.b3);
      this.btnCounter++;
      this.btnList.push("Device "+this.btnCounter)
      
    }
    console.log("button pressed===",n);
    
  }
 

  render(){

   
    var m=(
      <div>
  
   <div className="w3-sidebar w3-light-grey w3-bar-block w3-animate-opacity" style={{width:'20%'}}>
    <h3 className="w3-bar-item">Devices</h3>

    
    {/* <button onClick={(e)=>this.handleClick(1,e)} className="w3-bar-item w3-button w3-ripple w3-teal">Device 1
    
    </button>
    <button onClick={(e)=>this.handleClick(2,e)} className="w3-bar-item w3-button w3-ripple w3-teal">Device 2</button>
    <button onClick={(e)=>this.handleClick(3,this.btnList,e)}  className="w3-bar-item w3-button w3-ripple w3-teal">Device 3</button >
     */}

    <div>
  {this.btnList.map((ml,i)=>
  <div key={i}>
    <button onClick={(e)=>this.handleClick(i,e)}  className="w3-bar-item w3-button w3-ripple w3-teal">{this.btnList[i]}</button > 
  </div>


  )}
</div>
    
    
      <div style={{position:"absolute", bottom:0, left:"40%"}}>
    
      <button className="w3-button w3-teal" onClick={(e)=>this.handleClick(99,e)}>+</button>
      </div>
    
  </div>
        </div>
    );
    return(m);
  }
}

class MQTTVal extends React.Component{


constructor(props) {
  super(props);

  this.state={
    topic:props.topic,
    message:props.message
  };
  
}

 msgList =[
  "message 1",
  "message 2",
  "message 3"
];
  render(){
    return(

<div>
<h5>
  Topic:{this.state.topic}
</h5>

<h5>
  Message:{this.state.message}
</h5>

<ul>
  {this.msgList.map((ml,i)=>
  <li key={i}>
      {ml}
  </li>


  )}
</ul>

</div>
    );
  }


}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    if (this.state.isToggleOn){
      console.log("toggle on");

    }
    else{
      console.log("toggle off");
    }
  }

  render() {
    return (

<div>
  
      <button className= "w3-btn w3-block w3-teal" onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
      </div>
    );
  }
}
class App extends Component {
  render() {

    return (
     /* <Connector mqttProps="ws://broker.hivemq.com:8000/mqtt" >*/
      <div className="App">
      <SideBar />
      <div style={{marginLeft:'18', marginRight:-130.5}}>
      <div className="w3-container w3-teal">
  <h3>
    <img src={logo} className="App-logo" alt="logo"  style={{height:40}}/>
  Industrial Environment Monitor
  </h3>
</div>
      <div className="w3-container w3-custom-color" style={{"width":'100%'}}>      
      <header className="App-header">

          <div className="w3-row-padding">

          <div className="w3-col s4 w3-center w3-padding-24" >
          <div className="w3-card-4 w3-gray w3-round-large" style={{width:240, height:170 ,position:"relative"}} >
      
        <div style={{width: 120, marginLeft:"auto", marginRight:"auto"}}>
        
          <Connector mqttProps="ws://broker.hivemq.com:8000/mqtt" >
          <MessageContainer  type={"temp"} />
          </Connector>
          </div>
         <div className="w3-container w3-round w3-center w3-light-gray" style={{height:45,width:240,position:"absolute",bottom:0}} >
         
        <h6 style={{position:"absolute", bottom:0}}>{"Temperature Sensor"}</h6>

        </div>
        </div>


          </div>
          
          <div className="w3-col s4 w3-center w3-padding-24">
          <div className="w3-card-4 w3-gray w3-round-large" style={{width:240, height:170 ,position:"relative"}} >
      
      <div style={{width: 120, marginLeft:"auto", marginRight:"auto"}}>
      
          <Connector mqttProps="ws://broker.hivemq.com:8000/mqtt" >
          <MessageContainer  type={"humid"} /> 
          </Connector>
          </div>
          
         <div className="w3-container w3-round w3-center w3-light-gray" style={{height:45,width:240,position:"absolute",bottom:0}} >
         
        <h6 style={{position:"absolute", bottom:0}}>{"Temperature Sensor"}</h6>


           </div>
        </div>


          </div>
          <div className="w3-col s4 w3-center w3-padding-16 w3-right" style={{display:"flex", flexDirection:"row-reverse"}}>
          
          <Clock />
          
          </div>
          
          </div>


          <div className="w3-row-padding">

          <div className="w3-col s4 w3-center w3-padding-16 " >
          <Demo />
          
          </div>
          
          <div className="w3-col s4 w3-center w3-padding-16">
          <div className="w3-card-4 w3-white w3-round-large" style={{width:510 , height: 250, paddingTop:10, position:"relative"}} >
           <Connector mqttProps="ws://broker.hivemq.com:8000/mqtt" > 
           <MessageContainer type={"tempChart"} />  
           </Connector> 
           <div className="w3-container w3-round w3-center w3-light-gray" style={{height:45,width:510,position:"absolute",bottom:0}}>
         
               <h6 style={{position:"absolute", bottom:0}}>Temperature Chart</h6>
       
                </div>
        </div>


          </div>
          
          </div>
          <div>
          {/* <MessageContainer type={"MQChart"} /> */}
          </div>
         {/*  <GaugeElement val={16} def="Temperature Sensor"/> */}
          <br/>
          <div style={{display:"flex", flexDirection:"left"}}>
          <Toggle />
          </div>
        
        {/* <MQTTVal topic="dd" message="msg" /> */}
        <br /><br /><br /><br /><br /><br /><br />
        </header>
        </div>
        </div>
        </div>

//        </Connector>  
      
    );
  }
}

export default App;
