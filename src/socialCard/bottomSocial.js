import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRetweet,
    faHeart,
    faComment,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import "./bottomSocial.css";

const BottomSocial = props => {
    const { likes, retweets, comments } = props;
    const [likeState, setLikeState] = useState(false);
    const [retweetState, setRetweetState] = useState(false);
    const likeElement = useRef();
    const retweetElement = useRef();

    const onChange = (state, setState, type) => {
        let elementClass = type.current.classList;
        if (state) {
            elementClass.remove(`${elementClass[0]}-active`);
            setState(false);
        } else {
            elementClass.add(`${elementClass[0]}-active`);
            setState(true);
        }
    };

    return (
        <div className="bottom-social">
            <div className="bottom-wrapper">
                <div className="icon-wrapper">
                    <div>
                        <FontAwesomeIcon icon={faComment} />
                        <span>{comments}</span>
                    </div>
                    <div
                        ref={retweetElement}
                        onClick={() => {
                            onChange(
                                retweetState,
                                setRetweetState,
                                retweetElement
                            );
                        }}
                        className="retweet-container"
                    >
                        <FontAwesomeIcon icon={faRetweet} />
                        <span>{retweets}</span>
                    </div>
                    <div
                        ref={likeElement}
                        onClick={() => {
                            onChange(likeState, setLikeState, likeElement);
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
