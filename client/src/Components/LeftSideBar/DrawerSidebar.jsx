import React from 'react'
import "./LeftSideBar.css"
import { AiFillLike, AiFillPlaySquare, AiOutlineHome } from 'react-icons/ai'
import { MdOutlineExplore, MdOutlineVideoLibrary, MdOutlineWatchLater, MdSubscriptions } from 'react-icons/md'
import shorts from "./shorts.png"
import { FaHistory } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
function DrawerSidebar({toggleDrawer, toggleDrawerSidebar}) {
  return (
    <div className='container_DrawerLeftSidebar' style={toggleDrawerSidebar}>
        <div className='container2_DrawerLeftSidebar'>
            <div className="Drawer_leftsidebar">
                <NavLink to={"/"} className="icon_sidebar_div">
                    <p>
                        <AiOutlineHome size={22} className={"icon_sidebar"} style={{margin: "auto 0.7rem"}}/>
                        <div className="text_sidebar_icon">Home</div>
                    </p>
                </NavLink>
                <div className="icon_sidebar_div">
                    <p>
                        <MdOutlineExplore size={22} className={"icon_sidebar"} style={{margin: "auto 0.7rem"}}/>
                        <div className="text_sidebar_icon">Explore</div>
                    </p>
                </div>
                <div className="icon_sidebar_div">
                    <p>
                        <img src={shorts} width={22} className={"icon_sidebar"} style={{margin: "auto 0.7rem"}}/>
                        <div className="text_sidebar_icon">Shorts</div>
                    </p>
                </div>
                <div className="icon_sidebar_div">
                    <p>
                        <MdSubscriptions width={22} className={"icon_sidebar"} style={{margin: "auto 0.7rem"}}/>
                        <div className="text_sidebar_icon">Subscriptions</div>
                    </p>
                </div>
            </div>
            <div className="libraryBtn_Drawerleftsidebar">
                <NavLink to={"/library"} className="icon_sidebar_div">
                    <p>
                        <MdOutlineVideoLibrary width={22} className={"icon_sidebar"} style={{margin: "auto 0.7rem"}}/>
                        <div className="text_sidebar_icon">Library
                        </div>
                    </p>
                </NavLink>
                <NavLink to={"/WatchHistory"} className="icon_sidebar_div">
                    <p>
                        <FaHistory width={22} className={"icon_sidebar"} style={{margin: "auto 0.7rem"}}/>
                        <div className="text_sidebar_icon">History
                        </div>
                    </p>
                </NavLink>
                <NavLink to={"/YourVideos"} className="icon_sidebar_div">
                    <p>
                        <AiFillPlaySquare size={22} className={"icon_sidebar"} style={{margin: "auto 0.7rem"}}/>
                        <div className="text_sidebar_icon">Your Videos
                        </div>
                    </p>
                </NavLink>
                <NavLink to={"/WatchLater"} className="icon_sidebar_div">
                    <p>
                        <MdOutlineWatchLater size={22} className={"icon_sidebar"} style={{margin: "auto 0.7rem"}}/>
                        <div className="text_sidebar_icon">Watch Later
                        </div>
                    </p>
                </NavLink>
                <NavLink to={"/LikedVideos"} className="icon_sidebar_div">
                    <p>
                        <AiFillLike size={22} className={"icon_sidebar"} style={{margin: "auto 0.7rem"}}/>
                        <div className="text_sidebar_icon">Liked Videos
                        </div>
                    </p>
                </NavLink>
            </div>
            <div className="subscription_lsdbar">
                <h3>Your Subscription</h3>
                <div className="channel_lsdbar">
                    <p>C</p>
                    <div>Channel</div>
                </div>
                <div className="channel_lsdbar">
                    <p>C</p>
                    <div>Channel</div>
                </div>
                <div className="channel_lsdbar">
                    <p>C</p>
                    <div>Channel</div>
                </div>
                <div className="channel_lsdbar">
                    <p>C</p>
                    <div>Channel</div>
                </div>
            </div>
        </div>
        <div className='container3_DrawerLeftSidebar' onClick={()=>toggleDrawer()}>

        </div>
    </div>    
  )
}

export default DrawerSidebar