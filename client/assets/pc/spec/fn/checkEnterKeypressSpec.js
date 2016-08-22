var checkEnterKeyPress = require('../../scripts/components/common/fn/checkEnterKeypress');

describe('checkEnterKeyPress', function () {
  it ('keydown keyCode=13', function () {
    var e = {
      type: 'keydown',
      which: 13
    };
    var result = checkEnterKeyPress(e);
    assert(result === true);
  });
  it ('keyup keyCode 13', function () {
    var e = {
      type: 'keyup',
      which: 13
    };
    var result = checkEnterKeyPress(e);
    assert(result === false);
  });
  it ('keypress keyCode=13', function () {
    var e = {
      type: 'keypress',
      which: 13
    };
    var result = checkEnterKeyPress(e);
    assert(result === true);
  });
  it ('keydown keyCode=229', function () {
    var e = {
      type: 'keydown',
      which: 229
    };
    var result = checkEnterKeyPress(e);
    assert(result === false);
  });
  it ('keyup keyCode=229', function () {
    var e = {
      type: 'keyup',
      which: 229
    };
    var result = checkEnterKeyPress(e);
    assert(result === false);
  });
  it ('keypress keyCode=229', function () {
    var e = {
      type: 'keypress',
      which: 229
    };
    var result = checkEnterKeyPress(e);
    assert(result === false);
  });
  it ('keydown keyCode=1', function () {
    var e = {
      type: 'keydown',
      which: 1
    };
    var result = checkEnterKeyPress(e);
    assert(result === false);
  });
  it ('keyup keyCode=1', function () {
    var e = {
      type: 'keyup',
      which: 1
    };
    var result = checkEnterKeyPress(e);
    assert(result === false);
  });
  it ('keypress keyCode=1', function () {
    var e = {
      type: 'keypress',
      which: 1
    };
    var result = checkEnterKeyPress(e);
    assert(result === false);
  });
});
