import React, { Component } from "react";
import './main.css';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

export default class main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [
        'Fazer Café',
        'Beber Água',
        'Estudar',
      ],
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  render() {
    const { novaTarefa, tarefas } = this.state;

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

        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit className="edit" />
                <FaTrash className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
