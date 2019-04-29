import React from 'react';

import MessageList from './MessageList';

import MessageForm from './MessageForm';

var lastStateTemp=[];
var lastStateMQ2=[];
export default class MessageContainer extends React.Component {
 
constructor(props){
  super(props);
  lastStateTemp.push(this.props.data);
      lastStateTemp.push(this.props.type);
      console.log(lastStateTemp);
}



  addMessage(message){
    
    const {mqtt} = this.props;
    mqtt.publish('@near/demo', message);
  }

  render(){
    
      

      return (
        <div>
          
          <MessageList data={this.props.data} type={this.props.type} />
         {/* <MessageForm onSubmit={this.addMessage.bind(this)} /> */}
        </div>
      )
    
    
  }
  
   
}

