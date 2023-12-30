import React, { useState } from "react";
import "./Comments.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, editComment } from "../../actions/comments";
import moment from "moment";
function DisplayComments({
  commentBody,
  userCommented,
  cid,
  userId,
  commentOn,
}) {
  const [cmtBody, setcmtBody] = useState("");
  const [cmtId, setcmtId] = useState("");
  const [Edit, setEdit] = useState(false);
  const CurrentUser = useSelector((state) => state?.currentUserReducer);

  const handleEdit = (ctid, ctbdy) => {
    setEdit(true);
    setcmtId(ctid);
    setcmtBody(ctbdy);
  };
  const dispatch = useDispatch();
  const handleOnSubmit = (a) => {
    a.preventDefault();
    if (!cmtBody) {
      alert("Type your comment");
    } else {
      dispatch(
        editComment({
          id: cmtId,
          CommentBody: cmtBody,
        })
      );
      setcmtBody("");
    }
    setEdit(false);
  };
  const handleDel=(id)=>{
    dispatch(deleteComment(id))
  }
  return (
    <>
      {Edit ? (
        <>
          <form
            action=""
            className="comments_sub_form_comments"
            onSubmit={handleOnSubmit}
          >
            <input
              type="text"
              onChange={(e) => setcmtBody(e.target.value)}
              placeholder="Edit Comment..."
              className="comment_ibox"
              value={cmtBody}
            />
            <input
              type="submit"
              className="comment_add_btn_comments"
              value="Change"
            />
          </form>
        </>
      ) : (
        <>
          <p className="comment_body">{commentBody}</p>
        </>
      )}
      <p className="UserCommented">
        {userCommented} commented {moment(commentOn).fromNow()}
      </p>
      {CurrentUser?.result._id === userId && (
        <p className="EditDel_DisplayComment">
          <i onClick={() => handleEdit(cid, commentBody)}>Edit</i>
          <i onClick={()=> handleDel(cid)}>Delete</i>
        </p>
      )}
    </>
  );
}

export default DisplayComments;
