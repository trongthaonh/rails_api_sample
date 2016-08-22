import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/';
import MypageView from '../components/mypage/MypageView';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MypageView);
