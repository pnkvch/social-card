import React from "react";
import "./topSocial.css";

const TopSocial = props => {
  const { handle, date, avatar, quote } = props;

  return (
    <div className="top-container">
      <div>
        <img src={avatar} className="avatar" alt="user avatar" />
      </div>
      <div className="top-section">
        <div>
          <span>{handle}</span>
          <span>@{handle}</span>
          <span>{date}</span>
        </div>
        {quote}
        <br />
        author: <a href={handle}>@{handle}</a>
      </div>
    </div>
  );
};
export default TopSocial;
