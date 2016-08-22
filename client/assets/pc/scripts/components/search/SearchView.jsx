import React from 'react';

import BaseView from '../base/BaseView';


export default class SearchView extends BaseView {
  componentDidMount() {
    this.props.changePage(this.props.searchs.page);
    this.props.search(this.props.params.term);
  }
  componentDidUpdate(prevProps) {
    if (typeof this.props.params.term === 'undefined') {
      return false;
    } else if (this.props.params.term !== prevProps.params.term) {
      this.props.search(this.props.params.term);
    }
    return false;
  }
  render() {
    return (
      <div className="app">
        {this.getHeaderEl()}
        <div className="pageView">
          <h2 className="pageView__head">Search</h2>
          {this.getMasonryEl(this.props.searchs)}
          {this.getModalEl()}
          {this.props.app.isLoading ? this.getLoaderEl() : null}
        </div>
      </div>
		);
  }
}
