import "./TweetBox.css";
import React, { useState, useEffect } from "react";
import { Avatar, Button } from "@material-ui/core";
import db from "../Backend/firebase";
import FlipMove from "react-flip-move";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Abriele Qudsi",
      username: "abrielequdsi ",
      image: tweetImage,
      verified: true,
      text: tweetMessage,
      avatar: "https://www.abrielequdsi.com/static/img/foto_prib/13.jpg",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div class="tweetBox">
      <form action="submit" onSubmit={sendTweet}>
        <div class="tweetBox__input">
          <Avatar src="https://www.abrielequdsi.com/static/img/foto_prib/13.jpg" />
          <input
            placeholder="What's happening?"
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>

        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
