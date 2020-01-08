import React from "react";
import "./topSocial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const TopSocial = props => {
    const { handle, date, avatar, quote } = props;
    const month = Number(date.slice(3, 5)) - 1;
    const day = Number(date.slice(0, 2));

    const monthShortNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    return (
        <div className="top-container">
            <div className="left-wrapper">
                <div>
                    <img src={avatar} className="avatar" alt="user avatar" />
                </div>
                <div className="top-section">
                    <div>
                        <span>{handle}</span>
                        <span>@{handle}</span>
                        <span>•</span>
                        <span>{monthShortNames[month] + " " + day}</span>
                    </div>
                    {quote}
                    <br />
                    author: <a href={handle}>@{handle}</a>
                </div>
            </div>
            <FontAwesomeIcon style={{ opacity: 0.3 }} icon={faChevronDown} />
        </div>
    );
};
export default TopSocial;
