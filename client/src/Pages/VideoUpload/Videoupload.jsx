import React, { useState } from "react";
import "./Videoupload.css";
import { useDispatch, useSelector } from "react-redux";
import { uploadVideo } from "../../actions/video";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
function Videoupload({ setvidUploadPage }) {
  
  const CurrentUser = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  const [title, settitle] = useState("");
  const [videoFile, setvideoFile] = useState("");
  const handlesetvideoFile = (e) => {
    setvideoFile(e.target.files[0]);
  };
  const [progress, setprogress] = useState(0);
  const fileOptions = {
    onUploadProgress: (progressEvent)=>{
      const {loaded, total}=progressEvent;
      const percentage= Math.floor(((loaded/1000)*100)/(total/1000))
      setprogress(percentage)
      if(percentage===100){
        setTimeout(function(){},3000)
        setvidUploadPage(false)
      }
    }
  };
  const uploadvideofile = () => {
    if (!title) {
      alert("Please enter a title of the video");
    } else if (!videoFile) {
      alert("Please attach a video file");
    } else if (videoFile.size > 10000000) {
      alert("Please attach video file less than 1 KB");
    } else {
      const fileData = new FormData();
      fileData.append("file", videoFile);
      fileData.append("title", title);
      fileData.append("channel", CurrentUser?.result._id);
      fileData.append("uploader", CurrentUser?.result.name);
      //console.log(videoFile)
      dispatch(
        uploadVideo({
          fileData: fileData,
          fileOptions: fileOptions,
        })
      );
    }
  }
    return (
      <div className="container_vidUpload">
        <input type="submit" value={"X"} name="text" className="ibtn_x" onClick={()=>{setvidUploadPage(false)}}/>
        <div className="container2_vidUpload">
          <div className="ibox_div_vidUpload">
            <input
              onChange={(e) => {
                settitle(e.target.value);
              }}
              type="text"
              className="ibox_vidUpload"
              maxLength={30}
              placeholder="Enter title of your video"
            />
            <label htmlFor="file" className="ibox_vidUpload btn_vidUpload">
              <input
                type="file"
                name="file"
                className="ibox_vidUpload"
                style={{ fontSize: "1rem" }}
                onChange={(e) => {handlesetvideoFile(e)}}
              />
            </label>
          </div>
          <div className="ibox_div_vidUpload">
            <input
              onClick={() => {uploadvideofile()}}
              type="submit"
              value="Upload"
              className="ibox_vidUpload btn_vidUpload"
            />
          </div>
          <div className="loader ibox_div_vidUpload">
            <CircularProgressbar
              value={progress}
              text={`${progress}`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "20px",
                pathTransitionDuration: 0.5,
                pathColor: `rgba(255, 255, 255,${progress/100}`,
                textColor: "#f88",
                trailColor: "#adff2f",
                backgroundColor: "#3e98c7"
              })}
            />
          </div>
        </div>
      </div>
    );
  };


export default Videoupload;
