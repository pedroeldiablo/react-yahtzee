import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numbersAsWords: ["one", "two", "three", "four", "five", "six"],
    val: 6
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.idx)
  }
  render() {
   const { numbersAsWords, locked, val, disabled, rolling } = this.props;

    let classes = `Die fas fa-3x fa-dice-${ numbersAsWords[val - 1 ]} `;
    if (locked) {
      classes += "Die-locked ";
    }
    if (rolling) {
      classes += "Die-rolling ";
    }
    
    return (
      <i
        className={classes}
        onClick={this.handleClick}
        disabled={disabled}
      />
    
    );
  }
}

export default Die;
