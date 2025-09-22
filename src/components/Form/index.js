import React from "react";
import PropTypes from "prop-types";
import { FaPlus } from 'react-icons/fa';
import './form.css';

export default function Form({ handleSubimit, handleChange, novaTarefa }) {
  return (
    <form onSubmit={handleSubimit} className="form" action="#">
      <input
        onChange={handleChange}
        type="text"
        value={novaTarefa}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  )
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubimit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
