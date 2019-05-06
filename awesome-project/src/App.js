
import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import './w3.css';


import {Connector} from "mqtt-react";
import _MessageContainer from './MQTTsubscribe.js';
import _MessageContainerMQ2 from './MQTTSubscribeMQ2';
import _MessageContainerDust from './MQTTSubscribeDust';
import {subscribe} from 'mqtt-react';
import Clock from "./ClockWidget.js";
//import ChartElement from "./ChartsElement";
import Demo from './ConnectedSensors.js';
import Dropdown from './DropDown.js';
import TextBox from './TextBox';


const MessageContainer = subscribe({topic: 'c/data/dht22/string'})(_MessageContainer);
const MessageContainerMQ2 = subscribe({topic: 'c/data/mq2/string'})(_MessageContainerMQ2);
const MessageContainerDust = subscribe({topic: 'c/data/dust/string'})(_MessageContainerDust);
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

/* class MQTTVal extends React.Component{


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


} */
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
  constructor(props){
    super(props);
    this.state={dropDown:'', TextBox:''}
    this.getData=this.getData.bind(this);
    this.getDataDropDown=this.getDataDropDown.bind(this);
  }
  getData(val){
    // do not forget to bind getData in constructor
  //  console.log(val);
    this.setState({TextBox:val});
    console.log(this.state.TextBox);
}

getDataDropDown(val1){
  //console.log(val);
  this.setState({dropDown:val1});
  console.log(this.state.dropDown);
  console.log(this.state.TextBox);
  

}
  
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
          </div>
         

         <div className="w3-row">
  <div className="w3-col s3 w3-green w3-center">
  <p>Environment Monitoring</p>
  </div>
  <div className="w3-col s9  w3-center">
  <div className="w3-col s4  w3-padding-16">
          <div className="w3-card-4 w3-white w3-round-large" style={{width:510 , height: 250, paddingTop:10, position:"relative"}} >
           <Connector mqttProps="ws://broker.hivemq.com:8000/mqtt" > 
           <MessageContainerMQ2 type={"MQChart"} />  
           </Connector> 
           <div className="w3-container w3-round w3-center w3-light-gray" style={{height:45,width:510,position:"absolute",bottom:0}}>
         
               <h6 style={{position:"absolute", bottom:0}}>Temperature Chart</h6>
       
                </div>
        </div>


          </div>
          
  </div>
</div>


<div className="w3-row-padding">

<div className="w3-col s4 w3-center w3-padding-24">
<div className="w3-card-4 w3-white w3-round-large" style={{width:510 , height: 250, paddingTop:10, position:"relative"}} >
 <Connector mqttProps="ws://broker.hivemq.com:8000/mqtt" > 
 <MessageContainerDust type={"Dust"} />  
 </Connector> 
 
 <div className="w3-container w3-round w3-center w3-light-gray" style={{height:45,width:510,position:"absolute",bottom:0}}>

     <h6 style={{position:"absolute", bottom:0}}>Dust Concentration Chart mg/m^3</h6>

      </div>
</div>


</div>
<div className="w3-col s4 w3-center w3-padding-24" style={{position:"relative", left:300}} >
<div className="w3-card-4 w3-white w3-round-large" style={{width:350 , height: 270, paddingTop:1 }} >
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.526315931757!2d74.39356211453925!3d31.482214056176435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905fd16e335c7%3A0x75e43af25cc8cf44!2sZong+Franchise+DHA!5e0!3m2!1sen!2s!4v1556618380951!5m2!1sen!2s" width="300" height="250" frameBorder="0" style={{border:0 , position:"absolute", left:35}} allowFullScreen></iframe>
{/* <Demo /> */}
</div>
<div className="w3-container w3-round w3-center w3-light-gray" style={{height:45,width:350,position:"absolute",bottom:0}}>

     <h6 style={{position:"absolute", bottom:0}}>Location of EM Node</h6>

      </div>
</div>



</div>

<div>
</div>








          <br/>
          <div style={{display:"flex", flexDirection:"left"}}>
          <Toggle />
          
          <TextBox sendDataTextBox={this.getData}/>
          
          <Dropdown sendDataDropDown={this.getDataDropDown}/>
          
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
