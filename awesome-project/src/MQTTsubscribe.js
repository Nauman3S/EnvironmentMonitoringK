import React from 'react';

import MessageList from './MessageList';
import MessageForm from './MessageForm';


export default class MessageContainer extends React.Component {
constructor(props){
  super(props);
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
