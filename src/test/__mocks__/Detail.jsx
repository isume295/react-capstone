import React from 'react';

export default function Detail() {
  return (
    <div>
      <button type="button"><a to="/">back</a></button>
      <div className="detail-container">
        <div>
          <span className="title">Company Name: </span>
          <span>company name</span>
        </div>
        <div>
          <span className="title">Currency: </span>
          <span>currency</span>
        </div>
        <div>
          <span className="title">Exchange: </span>
          <span>exchange</span>
        </div>
        <div>
          <span className="title">Sector: </span>
          <span>sector</span>
        </div>
        <div>
          <span className="title">Country: </span>
          <span>country</span>
        </div>
        <div>
          <span className="title">CEO: </span>
          <span>ceo</span>
        </div>
        <div>
          <span className="title">Industry: </span>
          <span>industry</span>
        </div>
        <div>
          <span className="title">Changes: </span>
          <span>changes</span>
        </div>
        <div>
          <span className="title">Price: </span>
          <span>price</span>
        </div>
      </div>
    </div>
  );
}
