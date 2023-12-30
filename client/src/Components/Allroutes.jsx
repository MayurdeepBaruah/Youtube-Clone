import React from "react";
import Home from "../Pages/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Library from "../Pages/Library/Library";
import YourVideos from "../Pages/YourVideos/YourVideos";
import WatchHistory from "../Pages/History/WatchHistory";
import WatchLater from "../Pages/WatchLater/WatchLater";
import LikedVideos from "../Pages/LikedVideos/LikedVideos";
import VideoPage from "../Pages/VideoPage/VideoPage";
import Channel from "../Pages/Channel/Channel";
import Search from "../Pages/Search/Search";

function Allroutes({ setEditCreateChannelBtn, setvidUploadPage }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/library" element={<Library />} />
      <Route path="/WatchHistory" element={<WatchHistory />} />
      <Route path="/WatchLater" element={<WatchLater />} />
      <Route path="/LikedVideos" element={<LikedVideos />} />
      <Route path="/YourVideos" element={<YourVideos />} />
      <Route path="/VideoPage/:vid" element={<VideoPage />} />
      <Route path="/search/:searchQuery" element={<Search />} />
      <Route
        path="/Channel/:Cid"
        element={
          <Channel
            setvidUploadPage={setvidUploadPage}
            setEditCreateChannelBtn={setEditCreateChannelBtn}
          />
        }
      />
    </Routes>
  );
}

export default Allroutes;
