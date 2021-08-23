import React from 'react';

function Spinner2() {
  return (
    <div>
      <div className="relative flex items-center justify-center h-20 bg-indigo-500">
        <div className="w-5 h-5 duration-300 border-2 border-white rounded animate-spin ease"></div>
      </div>
    </div>
  );
}

export default Spinner2;
