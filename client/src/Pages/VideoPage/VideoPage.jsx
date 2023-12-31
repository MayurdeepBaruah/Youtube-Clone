import React, { useEffect } from "react";
// import vid from "../../Components/Video/vid.mp4"
import "./VideoPage.css";
import LikeWatchLaterSaveBtns from "./LikeWatchLaterSaveBtns";
import Comments from "../../Components/Comments/Comments";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { addToHistory } from "../../actions/History";
import { viewVideo } from "../../actions/video";
function VideoPage() {
  const { vid } = useParams();
  //console.log(vid);
  const vids = useSelector((state) => state.videoReducer);
  //console.log(vids);
  const vv = vids?.data?.filter((q) => q?._id === vid)[0];
  // const Channel = useSelector((state) => state.channelReducers);
  const CurrentUser = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  const handleHistory = () => {
    dispatch(
      addToHistory({
        videoId: vid,
        Viewer: CurrentUser?.result._id,
      })
    );
  };
  const handleViews=()=>{
    dispatch( viewVideo({
      id: vid
    }))
  }
  useEffect(() => {
    if (CurrentUser) {
      handleHistory();
    }
    handleViews();
  }, []);
  return (
    <>
      <div className="container_videoPage">
        <div className="container2_videoPage">
          <div className="video_display_screen_videoPage">
            <video
              src={`http://localhost:5500/${vv?.filePath}`}
              className={"video_ShowVideo_videoPage"}
              controls
              autoPlay
            ></video>
            <div className="video_details_videoPage">
              <div className="video_btns_title_videoPage_cont">
                <p className="video_title_videoPage">{vv?.videoTitle}</p>
                <div className="views_date_btns_videoPage">
                  <div className="views_videoPage">
                    {vv?.Views} views <div className="dot"></div>Uploaded{" "}
                    {moment(vid.updatedAt).fromNow()}
                  </div>
                </div>
                <LikeWatchLaterSaveBtns vv={vv} vid={vid} />
              </div>
              <Link
                to={`/channel/${vv?.videoChannel}`}
                className="channel_details_videoPage"
              >
                <b className="channel_logo_videoPage">
                  <p>{vv?.Uploader.charAt(0).toUpperCase()}</p>
                </b>
                <p className="channel_name_videoPage">{vv?.Uploader}</p>
              </Link>
              <div className="comments_videoPage">
                <h2>
                  <u>Comments</u>
                </h2>
                <Comments videoId={vv?._id}/>
              </div>
            </div>
          </div>
          <div className="moreVideoBar">More Video</div>
        </div>
      </div>
    </>
  );
}

export default VideoPage;
