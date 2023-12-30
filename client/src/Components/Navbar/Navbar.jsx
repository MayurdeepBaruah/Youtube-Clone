import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "./youtube.ico"
import Searchbar from './Searchbar/Searchbar'
import { RiVideoAddLine } from "react-icons/ri"
import { IoMdNotificationsOutline } from 'react-icons/io'
import {BiUserCircle} from "react-icons/bi"
import { Link } from 'react-router-dom'
import { GoogleLogin } from "react-google-login"
import { gapi } from "gapi-script"
import { useDispatch, useSelector } from "react-redux"
import { login } from '../../actions/auth'
import Auth from '../../Pages/Auth/Auth'
function Navbar({toggleDrawer, setEditCreateChannelBtn}) {

 const [AuthBtn, setAuthBtn] = useState(false) 
    //const CurrentUser=null;
  //  const CurrentUser ={
  //    result:{
  //      email : "xyz@gmail.com",
  //      joinedOn: "2222-07-15709:57:23.489Z"
  //    }
  //  }
  const CurrentUser=useSelector(state=>state.currentUserReducer)
  //console.log(CurrentUser)
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId : "285123701288-atou7p2lb4hefuml2k8rrb2uanejb96r.apps.googleusercontent.com",
        scope : "email"
      })
    }
    gapi.load("client:auth2",start);
  },[]);
  const dispatch=useDispatch();
  const onSuccess=(response)=>{
    const Email= response?.profileObj.email;
    //console.log(Email);
    dispatch(login({email:Email}))
  }
  const onFailure=(response)=>{
    console.log("Failed",response)
  }

  return (
    <>
    <div className="Container_Navbar">
        <div className="Burger_logo_navbar">
          <div className="Burger" onClick={()=>toggleDrawer()}>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <Link to={"/"} className='logo_div_Navbar'>
            <img src={logo} alt="" />
            <p className='logo_title_navbar'>Youtube</p>
          </Link>
        </div>
        <Searchbar/>
        <RiVideoAddLine size={22} className={"vid_bell_Navbar"}/>
        <div className="apps_Box">
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
        </div>
          <IoMdNotificationsOutline size={22} className='Mic_SearchBar'/>
          <div className="Auth_cont_Navbar">
            {CurrentUser ? (
              <>
                <div className='Channel_logo_App' onClick={()=>setAuthBtn(true)}>
                  <p className='fstChar_logo_App'>
                {
                CurrentUser?.result.name?
                (
                  <>
                    {CurrentUser?.result.name.charAt(0).toUpperCase()}
                  </>
                ):
                (
                  <>
                  {CurrentUser?.result.email.charAt(0).toUpperCase()}
                  </>
                )
              }
              </p>
              </div>
              </>
            ):
            <>
            <GoogleLogin clientId={"285123701288-atou7p2lb4hefuml2k8rrb2uanejb96r.apps.googleusercontent.com"} onSuccess={onSuccess} onFailure={onFailure} render={(renderProps)=> (

                <p onClick={renderProps.onClick} className="Auth_Btn">
                <BiUserCircle  size={22}/>
                <b>Sign In</b>
              </p>
            )}/>
            </>
            }
          </div>
    </div>
    {
      AuthBtn &&
      <Auth User={CurrentUser} setAuthBtn={setAuthBtn} setEditCreateChannelBtn={setEditCreateChannelBtn}/>
    }
    </>
  )
  
}

export default Navbar