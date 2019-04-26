import React from 'react';
import { subscribe } from 'mqtt-react';

export class PostMessage extends React.Component {

    sendMessage(e) {
        e.preventDefault();
        //MQTT client is passed on
        const { mqtt } = this.props;
        mqtt.publish('sensor/temp', 'My Message');
    }
    

    render() {
        return (
            <button className= "w3-btn w3-teal" onClick={this.sendMessage.bind(this)}>
                Send Message
            </button>
        );
    }
}

export default subscribe({
    topic: 'sensor'
})(PostMessage)