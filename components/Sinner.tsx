import React from 'react';

function Sinner() {
  return (
    <div>
      <div className="absolute top-0 right-0 mt-2 mr-2">
        <svg
          className="w-16 h-16 bg-transparent border-2 border-red-500 border-opacity-50 rounded-full animate-spin"
          style={{ borderRightColor: 'white', borderTopColor: 'white' }}
          viewBox="0 0 24 24"
        ></svg>
      </div>
    </div>
  );
}

export default Sinner;
