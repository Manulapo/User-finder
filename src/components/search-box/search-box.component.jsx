import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        className={this.props.className}
        placeholder="Search Users"
        onChange={this.props.onChangeHandler}
        value={this.props.value}
      />
    );
  }
}

export default SearchBox