import './ClockWidgetCSS.css';
import React, { Component } from 'react';


export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      hoursDeg: "",
      minsDeg: "",
      secsDeg: "",
      hours: "",
      mins: "",
      seconds: ""
    };
    this.setDate = this.setDate.bind(this);
  }

  componentDidMount() {
    setInterval(this.setDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.setDate);
  }

  setDate() {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const second = date.getSeconds();

    this.setState({
      hoursDeg: hour / 12 * 360 + min / 60 * 30 + 90,
      minsDeg: min / 60 * 360 + second / 60 * 6 + 90,
      secsDeg: second / 60 * 360 + 90,
      hours: hour,
      mins: min,
      seconds: second
    });
  }

  render() {
    return (
      <div className="clock">
        <ClockFace {...this.state} />
      </div>
    );
  }
}

const ClockFace = props => {
  return (
    <div className="clock-face">
      <HourHand hour={props.hoursDeg} />
      <MinuteHand mins={props.minsDeg} />
      <SecondHand seconds={props.secsDeg} />
      <Digital {...props} />
    </div>
  );
};

const HourHand = props =>
  <div className="hand" style={{ transform: `rotate(${props.hour}deg)` }} />;

const MinuteHand = props =>
  <div className="hand" style={{ transform: `rotate(${props.mins}deg)` }} />;

const SecondHand = props =>
  <div className="hand" style={{ transform: `rotate(${props.seconds}deg)` }} />;

const Digital = ({ hours, mins, seconds }) =>
  <div className="digits">{`${hours}:${mins}:${seconds}`}</div>;


