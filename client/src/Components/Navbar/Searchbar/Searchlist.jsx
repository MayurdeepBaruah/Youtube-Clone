import React from 'react'
import "./Searchlist.css" 
import { FaSearch } from 'react-icons/fa'
function Searchlist({TitleArray, setsearchQuery}) {
  return (
    <>
      <div className="Container_Searchlist">
        {
            TitleArray.map(m=>
            {
                return <p key={m} className="titleitem" onClick={e=>setsearchQuery(m)}>
                        <FaSearch/>
                                {m}
                        </p>

            }
        )}
        </div>  
    </>
  )
}

export default Searchlist