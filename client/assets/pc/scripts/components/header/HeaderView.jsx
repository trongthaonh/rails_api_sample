import React from 'react';

import SearchView from './SearchView';


export default class HeaderView extends React.Component {
  constructor(props) {
    super(props);
    this.onLinkToHome = this.onLinkToHome.bind(this);
    this.onLinkToMypage = this.onLinkToMypage.bind(this);
    this.onLinkToSearch = this.onLinkToSearch.bind(this);
  }
  onLinkToHome() {
    this.props.onLinkToHome(this.props);
  }
  onLinkToMypage() {
    this.props.onLinkToMypage(this.props);
  }
  onLinkToSearch(state) {
    this.props.onLinkToSearch(state);
  }
  render() {
    return (
      <div className="header">
        <header>
          <h1 className="header__title"><a href="/">MUUUSY</a></h1>
          <div className="header__searchArea">
            <SearchView _onLinkToSearch={this.onLinkToSearch} term={this.props.term} />
          </div>
          <nav className="header__gNav">
            <ul className="header__gNavList">
              <li><a onClick={this.onLinkToHome}><i className="fa fa-home"></i></a></li>
              <li><a><i className="fa fa-bell"></i></a></li>
              <li className="header__navUser">
                <a onClick={this.onLinkToMypage}>
                  <img src="/img/common/user/testusr.jpg" alt="" />
									<span className="header__caption">user</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

HeaderView.propTypes = {
  term: React.PropTypes.string,
  onLinkToHome: React.PropTypes.func.isRequired,
  onLinkToMypage: React.PropTypes.func.isRequired,
  onLinkToSearch: React.PropTypes.func.isRequired,
};
