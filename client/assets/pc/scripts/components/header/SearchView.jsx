import React from 'react';

import checkEnterKeyPress from '../../common/fn/checkEnterKeypress';


export default class SearchView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: this.props.term };
    this.enterKeyPress = this.enterKeyPress.bind(this);
    this.onLinkToSearch = this.onLinkToSearch.bind(this);
    this.changeTerm = this.changeTerm.bind(this);
  }
  onLinkToSearch() {
    if (typeof this.state.term !== 'undefined') {
      this.props._onLinkToSearch(this.state);
    }
  }
  enterKeyPress(e) {
    if (checkEnterKeyPress(e) && typeof this.state.term !== 'undefined') {
      this.props._onLinkToSearch(this.state);
    }
  }
  changeTerm(e) {
    this.setState({ term: e.target.value });
  }
  render() {
    return (
      <div>
        <i className="fa fa-search header__searchIcon"></i>
        <input
          type="text"
          className="header__searchText js-searchText"
          placeholder="Search Album"
          value={this.state.term || ''}
          onChange={this.changeTerm}
          onKeyDown={this.enterKeyPress}
        />
        <input
          type="button"
          className="header__searchTrigger js-searchTrigger"
          value="Search"
          onClick={this.onLinkToSearch}
        />
      </div>
		);
  }
}

SearchView.propTypes = {
  term: React.PropTypes.string,
  _onLinkToSearch: React.PropTypes.func.isRequired,
};
