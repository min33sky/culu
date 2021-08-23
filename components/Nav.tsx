import React from 'react';
import request from '../utils/request';

function Nav() {
  return (
    <div>
      {Object.entries(request).map(([key, { title, url }], index) => (
        <div key={key}>{title}</div>
      ))}
    </div>
  );
}

export default Nav;
