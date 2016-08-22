var errorHandling = require('../../scripts/components/common/utils/errorHandling.js');

describe('errorHandling', function () {
  var resData = {
    apiStatus: 'success',
    message: 'errorHandlingSpec'
  };
  it ('set 200 success responseJSON', function () {
    var data = {
      status: 200,
      responseText: JSON.stringify(resData),
      responseJSON: resData
    };
    var result = errorHandling.getResponse(data);
    assert(result.status === 'success');
    assert(result.res.message === 'errorHandlingSpec');
  });
  it ('set 200 success responseText', function () {
    var data = {
      status: 200,
      responseText: JSON.stringify(resData)
    };
    var result = errorHandling.getResponse(data);
    assert(result.status === 'success');
    assert(result.res.message === 'errorHandlingSpec');
  });
  it ('set 200 error responseJSON', function () {
    resData.apiStatus = 'error';
    var data = {
      status: 200,
      responseText: JSON.stringify(resData),
      responseJSON: resData
    };
    var result = errorHandling.getResponse(data);
    assert(result.status === 'serverError');
    assert(result.res.message === 'errorHandlingSpec');
  });
  it ('set 400 networkError', function () {
    var data = {
      status: 400,
      responseText: JSON.stringify(resData)
    };
    var result = errorHandling.getResponse(data);
    assert(result.status === 'networkError');
    assert(result.res.message === 'errorHandlingSpec');
  });
});
