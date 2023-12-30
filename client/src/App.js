import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Allroutes from "./Components/Allroutes";
import DrawerSidebar from "./Components/LeftSideBar/DrawerSidebar";
import { useEffect, useState } from "react";
import CreateEditChannel from "./Pages/Channel/CreateEditChannel";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchAllChannels } from "./actions/channelUser";
import Videoupload from "./Pages/VideoUpload/Videoupload";
import { getAllVideo } from "./actions/video";
import { getAlllikedVideo } from "./actions/likedVideo";
import { getAllwatchLater } from "./actions/watchLater";
import { getAllHistory } from "./actions/History";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllChannels());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
  }, [dispatch]);

  const [toggleDrawerSidebar, settoggleDrawerSidebar] = useState({
    display: "none",
  });
  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      settoggleDrawerSidebar({ display: "flex" });
    } else {
      settoggleDrawerSidebar({ display: "none" });
    }
  };
  const [vidUploadPage, setvidUploadPage] = useState(false);
  const [EditCreateChannelBtn, setEditCreateChannelBtn] = useState(false);
  return (
    <Router>
      {vidUploadPage && <Videoupload setvidUploadPage={setvidUploadPage} />}
      {EditCreateChannelBtn && (
        <CreateEditChannel setEditCreateChannelBtn={setEditCreateChannelBtn} />
      )}
      <Navbar
        setEditCreateChannelBtn={setEditCreateChannelBtn}
        toggleDrawer={toggleDrawer}
      />
      {
        <DrawerSidebar
          toggleDrawer={toggleDrawer}
          toggleDrawerSidebar={toggleDrawerSidebar}
        />
      }
      <Allroutes
        setvidUploadPage={setvidUploadPage}
        setEditCreateChannelBtn={setEditCreateChannelBtn}
      />
    </Router>
  );
}

export default App;
