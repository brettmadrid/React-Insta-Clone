import React from "react";
import IGLogo from "../../assets/iglogo.png";
import PropTypes from "prop-types";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram" />
        <img alt="instagram logo" src={IGLogo} className="logo-image" />
      </div>
      <div className="input-wrapper">
        <input 
          className="input-field-search" 
          type="text" 
          placeholder=" Search" 
          onKeyUp={props.searchPosts} 
        />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchPosts: PropTypes.func
}

export default SearchBar;