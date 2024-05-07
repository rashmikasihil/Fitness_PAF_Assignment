import React from "react";
import "./Header.css";

// import profileImage from "../../images/profile-1.jpg";
import profile from '../../images/profile-16.jpg'
import logo from '../../images/social.png'
export default function Header({ authenticated, onLogout, currentUser }) {
  return (
    <nav>
      <div className="container">
        <div style={{display:'flex', }}>
          <img src={logo} alt='logo' className="logo" />

          <h2  style={{paddingLeft:10}} className="logo">shar<span style={{ color: 'red', fontWeight: 'bold', fontSize: 40 }}>E</span>net</h2>
        </div>
        {/* <div className="search-bar">
          <i className="uil uil-search" />
          <input
            type="search"
            placeholder="search for Creators, Inspirations and Projects"
          />
        </div> */}
        <div className="create">
          {/* <label className="btn btn-primary" htmlFor="create-post">
            Create
          </label> */}
          <div className="profile-photo">
            <img src={profile} alt="profile1" />

          </div>
          <li>
            <a style={{ color: '#ffff' }} onClick={onLogout}>
              logout
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}
