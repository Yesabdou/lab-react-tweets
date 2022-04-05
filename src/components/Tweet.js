import React from "react";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  console.log("tweet infos ");

  console.log(props.tweet);

  return (
    <div className="tweet">
      <img src={props.tweet.user.image} className="profile" alt="profile" />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />

          <Timestamp time={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
