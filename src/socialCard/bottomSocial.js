import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRetweet,
    faHeart,
    faComment,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import "./bottomSocial.css";

const BottomSocial = props => {
    const { likes, retweets } = props;
    const [likeState, setLikeState] = useState(false);
    const [retweetState, setRetweetState] = useState(false);

    const onChange = (state, setState, type) => {
        if (state) {
            document
                .querySelector(`.${type}-container`)
                .classList.remove(`${type}-active`);
            setState(false);
        } else {
            document
                .querySelector(`.${type}-container`)
                .classList.add(`${type}-active`);
            setState(true);
        }
    };

    return (
        <div className="bottom-social">
            <div className="bottom-wrapper">
                <div className="icon-wrapper">
                    <div>
                        <FontAwesomeIcon icon={faComment} />
                        <span>2</span>
                    </div>
                    <div
                        onClick={() => {
                            onChange(retweetState, setRetweetState, `retweet`);
                        }}
                        className="retweet-container"
                    >
                        <FontAwesomeIcon icon={faRetweet} />
                        <span>{retweets}</span>
                    </div>
                    <div
                        onClick={() => {
                            onChange(likeState, setLikeState, `like`);
                        }}
                        className="like-container"
                    >
                        <FontAwesomeIcon icon={faHeart} />
                        <span>{likes}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BottomSocial;
