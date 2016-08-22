import React from 'react';

import BaseView from '../base/BaseView';
import setMock from '../../_api/mock';
setMock();


export default class FeedView extends BaseView {
  componentDidMount() {
    this.props.changePage(this.props.feeds.page);
    this.props.fetchFeeds();
  }
  render() {
    return (
      <div className="app">
        {this.getHeaderEl()}
        <div className="pageView">
          {this.getMasonryEl(this.props.feeds)}
          {this.getModalEl()}
          {this.props.app.isLoading ? this.getLoaderEl() : null}
        </div>
      </div>
		);
  }
}
