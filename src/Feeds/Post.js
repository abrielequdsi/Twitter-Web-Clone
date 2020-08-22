import React from "react";
import "./Post.css";
import { Avatar, Button } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div class="post__avatar">
        <Avatar src="https://www.abrielequdsi.com/static/img/foto_prib/13.jpg" />
      </div>
      <div class="post__body">
        <div class="post__header">
          <div class="post__headerText">
            <h3>
              Abriele Qudsi{" "}
              <span>
                <VerifiedUserIcon className="post__badge" />
              </span>
            </h3>
          </div>
          <div class="post__headerDescription">
            <p>I challange you to build a Twitter Clone with React x Django</p>
          </div>
        </div>
        <img
          src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
          alt=""
        />
        <div class="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
