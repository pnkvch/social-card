import React from "react";
import "./App.css";
import SocialCard from "./socialCard/socialCard";
import data from "./MOCK_DATA.json";

function App() {
    return (
        <div className="App">
            {data.map((item, index) => {
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
                } = data[index];

                return (
                    <SocialCard
                        key={item.id}
                        first_name={first_name}
                        date={date}
                        avatar={avatar}
                        likes={likes}
                        retweets={retweets}
                        domain_name={domain_name}
                        quote={quote}
                        sub_quote={sub_quote}
                        comments={comments}
                    />
                );
            })}
        </div>
    );
}

export default App;
