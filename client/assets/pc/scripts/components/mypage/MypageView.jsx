import React from 'react';

import BaseView from '../base/BaseView';


export default class MypageView extends BaseView {
  componentDidMount() {
    this.props.changePage(this.props.favs.page);
    this.props.fetchFavs();
  }
  render() {
    return (
      <div className="app">
        {this.getHeaderEl()}
        <div className="pageView">
          <div className="pageView__profView">
            <img className="pageView__profImg" src="/img/common/user/testusr.jpg" alt="" />
            <h2 className="pageView__head">user</h2>
          </div>
          <h2 className="pageView__head"><i className="fa fa-heart"></i> Favorites</h2>
          {this.getMasonryEl(this.props.favs)}
          {this.getModalEl()}
          {this.props.app.isLoading ? this.getLoaderEl() : null}
        </div>
      </div>
    );
  }
}
