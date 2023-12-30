import React from "react";
import { FaEdit, FaUpload } from "react-icons/fa";
import "./DescribeChannel.css";
import { useSelector } from "react-redux";

function DescribeChannel({ setEditCreateChannelBtn, Cid, setvidUploadPage }) {
  const Channel = useSelector((state) => state.channelReducers);
  const CurrentChannel = Channel.filter((c) => c._id === Cid)[0];
  const CurrentUser = useSelector((state) => state.currentUserReducer);

  //  console.log(CurrentChannel)
  return (
    <div className="container3_channel">
      <div className="channel_logo_channel">
        <b>{CurrentChannel?.name.charAt(0).toUpperCase()}</b>
      </div>
      <div className="description_channel">
        <b>{CurrentChannel?.name}</b>
        <p>{CurrentChannel?.desc}</p>
      </div>
      {CurrentUser?.result._id === CurrentChannel?._id && (
        <>
          <p
            className="editbtn_channel"
            onClick={() => {
              setEditCreateChannelBtn(true);
            }}
          >
            <FaEdit />
            <b>Edit channel</b>
          </p>
        <p className="uploadbtn_channel" onClick={()=>{setvidUploadPage(true)}}>
            <FaUpload />
            <b>Upload video</b>
          </p>
        </>
      )}
    </div>
  );
}

export default DescribeChannel;
