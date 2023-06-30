import React from 'react';

export default function FinanceList() {
  return (
    <div>
      <div>
        <button className="more" type="button">
          view more
        </button>
        <div className="details">
          <p>symbol</p>
          <span>name</span>
        </div>
      </div>
    </div>
  );
}
