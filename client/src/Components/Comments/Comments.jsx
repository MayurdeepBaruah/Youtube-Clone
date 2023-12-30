import React, { useState } from "react";
import "./Comments.css";
import DisplayComments from "./DisplayComments";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../actions/comments";
function Comments({ videoId }) {
  const [commentText, setcommentText] = useState("");
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const CommentsList = useSelector((s) => s.commentReducer);
  const dispatch = useDispatch();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (CurrentUser){

      if (!commentText) {
        alert("Please type your comment !");
      } else {
        dispatch(
          postComment({
            videoId: videoId,
            userId: CurrentUser?.result._id,
            commentBody: commentText,
            userCommented: CurrentUser?.result.name,
          })
          );
          setcommentText("");
        }
      }else{
        alert("Please login to post your comment !")
      }
    }
  // const CommentsList = [
  //   {
  //     _id: "1",
  //     commentBody: "Hello",
  //     userCommented: "abc",
  //   },
  //   {
  //     _id: "2",
  //     commentBody: "Hiii",
  //     userCommented: "Cye",
  //   },
  // ];
  return (
    <>
      <form
        action=""
        className="comments_sub_form_comments"
        onSubmit={handleOnSubmit}
      >
        <input
          type="text"
          onChange={(e) => setcommentText(e.target.value)}
          placeholder="Add Comment..."
          className="comment_ibox"
          value={commentText}
        />
        <input type="submit" value="Add" className="comment_add_btn_comments" />
      </form>
      <div className="display_comment_container">
        {CommentsList?.data
          ?.filter((q) => videoId === q?.videoId)
          .reverse()
          .map((m) => {
            return (
              <DisplayComments
                commentBody={m.commentBody}
                userCommented={m.userCommented}
                commentOn={m.commentOn}
                userId={m.userId}
                cid={m._id}
                key={m._id}
              />
            );
          })}
      </div>
    </>
  );
}

export default Comments;
