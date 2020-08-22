import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div class="tweetBox">
      <form action="">
        <div class="tweetBox__input">
          <Avatar src="https://www.abrielequdsi.com/static/img/foto_prib/13.jpg" />
          <input placeholder="What's happening?" type="text" />
        </div>

        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
