// import { nominalTypeHack } from "prop-types";
import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  render() {
    // const { activeOptionIdx } = this.state;
    // const { options } = this.props;
    // const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        {/* <p>Выбран цвет:{label}</p> */}
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              //   className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              //   onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
