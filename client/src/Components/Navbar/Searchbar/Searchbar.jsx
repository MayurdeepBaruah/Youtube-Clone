import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import Searchlist from "./Searchlist";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Searchbar() {
  const [searchQuery, setsearchQuery] = useState("");
  const [searchListA, setsearchList] = useState(false);
  const titleArray=useSelector(s=>s.videoReducer)?.data?.filter(q=>q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())).map(m=>m?.videoTitle)
  // const titleArray = ["video1", "video2", "Animation video", "Movies"].filter(
  //   (q) => q.toUpperCase().includes(searchQuery)
  // );
  return (
    <>
      <div className="SearchBar_Container">
        <div className="SearchBar_Container2">
          <div className="search_div">
            <input
              type="text"
              className="iBox_SearchBar"
              placeholder="Search"
              onChange={(e) => setsearchQuery(e.target.value)}
              onClick={(e) => setsearchList(true)}
            />
            <Link to={`/search/${searchQuery}`}>
              <FaSearch
              className="searchIcon_SearchBar"
              onClick={(e) => setsearchList(false)}
              />
            </Link>
            <BsMicFill className="Mic_SearchBar" />
            {searchQuery && searchListA && (
              <Searchlist
                TitleArray={titleArray}
                setsearchQuery={setsearchQuery}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
