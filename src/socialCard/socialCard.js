import React from "react";
import data from "../MOCK_DATA.json";
import TopSocial from "./topSocial.js";
import MainSocial from "./mainSocial.js";
import BottomSocial from "./bottomSocial.js";
import "./socialCard.css";

const SocialCard = () => {
    const quote = "Learning React? Start small.";
    const subQuote =
        "Can't pry yourself from the tutorials? The cure is to make tiny little experiment apps";
    const { first_name, date, avatar, likes, retweets } = data[0];

    return (
        <div className="main-container">
            <TopSocial
                quote={quote}
                handle={first_name}
                date={date}
                avatar={avatar}
            />
            <MainSocial quote={quote} avatar={avatar} subQuote={subQuote} />
            <BottomSocial likes={likes} retweets={retweets} />
        </div>
    );
};

export default SocialCard;
