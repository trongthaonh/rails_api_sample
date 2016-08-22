import React from 'react';

export default function getLoaderEl() {
  return (
    <div className="js-loader">
      <div className="loader">
        <div className="js-loader-wrapper">
          <div className="js-loader-throbbers_page">
            <ul className="js-loader-throbbers_list">
              <li><div className="js-loader-throbber js-loader-throbber_large"></div></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
