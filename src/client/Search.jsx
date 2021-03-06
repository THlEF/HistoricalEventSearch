import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: '',
    };

    this.updateForm = this.updateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateForm(e) {
    this.setState({
      form: e.target.value,
    });
  }

  handleSubmit(e) {
    const { form } = this.state;

    e.preventDefault();
    this.props.updateSearchText(form);
    this.props.requestEvents();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search Form: 
          <input type='text' value={this.state.form} onChange={this.updateForm}></input>
        </label>
      </form>
    );
  }
}

export default Search;
