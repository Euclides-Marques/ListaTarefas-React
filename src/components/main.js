import React, { Component } from "react";
import './main.css';
import { FaPlus } from 'react-icons/fa';

export default class main extends Component {
  state = {
    novaTarefa: '',
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  render() {
    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form className="form" action="#">
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
