import React from "react";
import TopSocial from "./topSocial.js";
import MainSocial from "./mainSocial.js";
import BottomSocial from "./bottomSocial.js";
import "./socialCard.css";

const SocialCard = props => {
    const {
        first_name,
        date,
        avatar,
        likes,
        retweets,
        domain_name,
        quote,
        sub_quote,
        comments
    } = props;

    return (
        <div className="main-container">
            <TopSocial
                quote={quote}
                handle={first_name}
                date={date}
                avatar={avatar}
            />
            <MainSocial
                quote={quote}
                avatar={avatar}
                subQuote={sub_quote}
                domain_name={domain_name}
                first_name={first_name}
            />
            <BottomSocial
                likes={likes}
                retweets={retweets}
                comments={comments}
            />
        </div>
    );
};

export default SocialCard;
