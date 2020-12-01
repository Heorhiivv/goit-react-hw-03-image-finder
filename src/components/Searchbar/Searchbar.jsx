import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {

  state ={
    value: "",
  };

  handleChange = ({target}) => {
    const {name, value} = target;
    this.setState({[name]: value});
    }
    
      handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value)
    this.setState({value: ''})
      }

render () {
  const {value} = this.state

return (
  <header className={css.Searchbar}>
  <form className={css.SearchForm} 
  onSubmit={this.handleSubmit}>
    <button type="submit" className={css.SearchForm_button}>
      <span className={css.SearchForm_button_label}>Search</span>
    </button>

    <input
      className={css.SearchForm_input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={value}
      name="value"
      onChange={this.handleChange}
    />
  </form>
</header>
)
}
}
Searchbar.defaultProps = {
  onSubmit: PropTypes.func.isRequired
}

export default Searchbar;