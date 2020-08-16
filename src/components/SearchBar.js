import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (<form onSubmit={this.onFormSubmit}>
            <input value={this.state.term} type='text' onChange={this.onInputChange} />
            <button type='submit' disabled={`${!this.state.term ? 'disabled' : ''}`}>Search</button>

        </form>);
    }
}

export default SearchBar;