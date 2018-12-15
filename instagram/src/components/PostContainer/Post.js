import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";
import Message from "./Message";
import Comments from "../CommentSection/Comments";
import moment from 'moment';

const Post = props => {
  let time = moment();
  let tStamp = props.post.timestamp;
  tStamp = moment(tStamp.split("th").pop()).format('MMMM DD YYYY, hh:mm:ss a');
  tStamp = moment(tStamp);
  let displayTime = tStamp.fromNow();
  if (!tStamp.isValid()) {
    console.log(tStamp);
  } else {
    console.log(displayTime);
  }
  
  

 

  return (
    <div className="postContainer">
      <div className="topContainer">
        <img
          className="companyLogo"
          src={props.post.thumbnailUrl}
          alt="Company Logo"
        />
        {props.post.username}
      </div>
      <div className="imgContainer">
        <img className="postImg" src={props.post.imageUrl} alt="Post" />
      </div>
      <div className="bottomContainer">
        <div className="contentContainer">
          <div className="iconContainer">
            <i className="far fa-heart" />
            <i className="far fa-comment" />
          </div>
          <div className="likes">
            <p>{props.post.likes} likes</p>
          </div>
          <div className="messContainer">
            <div>
              {props.post.comments.map(message => (
                <Message key={message.text} message={message} />
              ))}
            </div>
            <div className='timeStamp'>
              <span className="time-stamp">{displayTime}</span>  
            </div>
          </div>
          <div className="commentsContainer">
            <Comments createComment={displayTime}/>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  })
};

export default Post;
