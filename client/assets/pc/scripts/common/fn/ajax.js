import $ from 'jquery';

export default function ajax(URL, TYPE, DATA_TYPE, DATA) {
  return new Promise((resolve, reject) => {
    if (TYPE === 'GET' && DATA) {
      URL = URL + '?' + $.param(DATA);
      DATA = '';
    }
    $.ajax({
      url: URL,
      type: TYPE,
      dataType: DATA_TYPE || '',
      data: DATA || ''
    }).then((res) => {
      resolve(res);
    }, (err) => {
      console.error(err);
      reject(err);
    });
  });
}
