/* global window */
import $ from 'jquery';

import mockjax from 'jquery-mockjax';

// API Mock
export default function setMock() {
  mockjax($, window);
  $.mockjax({
    url: '/api/feeds',
    proxy: '../scripts/_api/feeds.json',
    // status: 500,
    responseTime: 200
  });
}
