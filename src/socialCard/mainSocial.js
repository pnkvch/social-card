import React from "react";
import "./mainSocial.css";

const MainSocial = props => {
    const { quote, avatar, subQuote, domain_name, first_name } = props;

    const createColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    return (
        <div className="main-social">
            <div className="link-wrapper">
                <a href={`https://${domain_name}`}>
                    <div
                        style={{ backgroundColor: createColor }}
                        className="link-inside-top"
                    >
                        <div className="image-wrapper">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <h3>{quote}</h3>
                        <div className="author-wrapper">
                            <div>
                                <span style={{ color: createColor }}>
                                    {first_name}
                                </span>
                                <img src={avatar} alt="avatar" />
                            </div>
                        </div>
                    </div>
                    <div className="link-inside-bottom">
                        <span>{quote}</span>
                        <span>{subQuote}</span>
                        <span>{domain_name}</span>
                    </div>
                </a>
            </div>
        </div>
    );
};
export default MainSocial;
