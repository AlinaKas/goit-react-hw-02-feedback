import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  //   show = () => this.setState({ visible: true });
  //   hide = () => this.setState({ visible: false });

  render() {
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          //   onClick={this.show}
          onClick={this.toggle}
        >
          {/* Показать */}
          {this.state.visible ? "Скрыть" : "Показать"}
        </button>

        {/* <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.hide}
        > Скрыть
        </button> */}

        {/* {visible ? "Скрыть" : "Показать"} */}
        {this.state.visible && (
          <div className="Dropdown__menu">Выпадающее меню</div>
        )}

        {/* {visible && <div className="Dropdown__menu">Выпадающее меню</div>} */}
      </div>
    );
  }
}

export default Dropdown;
