import React, { Component } from "react";
import './main.css';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

export default class main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
  };

  handleSubimit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) != -1) return

    const novasTarefas = [...tarefas];

    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
    })
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  handleEdit = (e, index) => {
    console.log(index);
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    })
  }

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form onSubmit={this.handleSubimit} className="form" action="#">
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
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit
                  onClick={(e) => this.handleEdit(e,index)}
                  className="edit" />
                <FaTrash
                  onClick={(e) => this.handleDelete(e,index)}
                  className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
