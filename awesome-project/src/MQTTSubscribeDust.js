import React from 'react';


import MessageListDust from './MessageListDust';



var lastStateTemp=[];
var lastStateMQ2=[];
export default class MessageContainerDust extends React.Component {
 
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
          
          <MessageListDust data={this.props.data} type={this.props.type} />
         {/* <MessageForm onSubmit={this.addMessage.bind(this)} /> */}
        </div>
      )
    
    
  }
  
   
}

