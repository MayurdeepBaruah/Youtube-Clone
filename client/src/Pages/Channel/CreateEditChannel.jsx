import React, { useState } from 'react'
import "./CreateEditChannel.css"
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../api'
import { updateChannelData } from '../../actions/channelUser'
function CreateEditChannel({ setEditCreateChannelBtn }) {

    // const CurrentUser ={
    //     result:{
    //       email : "xyz@gmail.com",
    //       joinedOn: "2222-07-15709:57:23.489Z"
    //     }
    //   }
    const CurrentUser=useSelector(state=>state.currentUserReducer)

      const [name, setname] = useState(CurrentUser?.result.name)
      const [desc, setdesc] = useState(CurrentUser?.result.desc)
      const dispatch=useDispatch();
      const handleSubmit=()=>{
        if(!name)
        {
            alert("Please enter a name")
        }
        else if(!desc)
        {
            alert("Please enter a description")
        }
        else
        {
            dispatch(updateChannelData(CurrentUser?.result._id,{
                name: name,
                desc: desc,
            }));
            setEditCreateChannelBtn(false);
            setTimeout(()=>{
                dispatch(login({email:CurrentUser?.result.email
                }));
            }, 5000);
        }
      }
  return (
    <div className='container_CreateEditChannel'>
        <input type="submit" value={"X"} name="text" className='ibtn_x' onClick={()=>setEditCreateChannelBtn(false)}/>
    <div className='container2_CreateEditChannel'>
        <h1>
            {
                CurrentUser?.result.name ?
                (<> Edit </>) :
                (<> Create </>)
            }Your Channel
        </h1>
        <input type="text" name="text" placeholder='Enter Your Channel Name' className='ibox' value={name} onChange={(e=>
            setname(e.target.value))}/>
        <textarea type="text" rows={15} placeholder={"Enter Channel Description"} className={"ibox"} value={desc} onChange={(e=>
            setdesc(e.target.value))}></textarea>
        <input type="submit" value={"Submit"} className='ibtn' onClick={handleSubmit}/>
    </div>
    </div>
  )
}

export default CreateEditChannel