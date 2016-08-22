import React from 'react';

import HeaderView from './HeaderView';


export default function getHeaderEl() {
  const linkToHome = () => {
    this.context.router.push('/');
  };
  const linkToMypage = () => {
    this.context.router.push('mypage');
  };
  const linkToSearch = (state) => {
    this.context.router.push('search/' + state.term);
  };
  return (
    <HeaderView
      term={this.props.params.term}
      onLinkToHome={linkToHome}
      onLinkToMypage={linkToMypage}
      onLinkToSearch={linkToSearch}
    />
  );
}
