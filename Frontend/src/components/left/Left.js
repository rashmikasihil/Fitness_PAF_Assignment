import React, { useState, useEffect } from "react";
import "./Left.css";
// import profilepic from "../../images/profile-1.jpg";
import profile from '../../images/profile-16.jpg'
import { Link ,useLocation } from "react-router-dom";
export default function Left() {

   // State to track the active menu item
   const [activeMenuItem, setActiveMenuItem] = useState("/");
   const location = useLocation(); // Get the current location
   // Function to update active menu item
   const handleMenuItemClick = (path) => {
     setActiveMenuItem(path);
   }
   useEffect(() => {
    // Set the active menu item based on the current pathname
    setActiveMenuItem(location.pathname);
}, [location]); // Depend on location to re-run this effect


  return (
    <div style={{backgroundColor:'#3f3e3e'}} className="left">
      <a href="" className="profile">
        <div className="profile-photo">
          <img src={profile} alt="profile-picture" />
        </div>
        <div className="handle">
          <h4>Amily Fern</h4>
          <p className="text-muted">@fern</p>
        </div>
      </a>
      {/*sidebar*/}
      <div className="sidebar">
         {/* Menu items with onClick event to update active state */}
        <a  className={`menu-item ${activeMenuItem === "/" ? "active" : ""}`}
          >
          <span>
            <i className="uil uil-home" />{" "}
          </span>
          <Link   className='link' to="/">
            <h3>Home</h3>
          </Link>
        </a>
        
        <a className={`menu-item ${activeMenuItem === "/workoutplan" ? "active" : ""}`}
           >
          <span>
            <i className="uil uil-compass" />{" "}
          </span>
          <Link  className='link' to="/workoutplan">
            <h3>Workout Plan</h3>
          </Link>
        </a>
       
        <a className={`menu-item ${activeMenuItem === "/workoutstatus" ? "active" : ""}`}
           id="notifications">
          <span>
            <i className="uil uil-bell">
              {/* <small className="notification-count">6+</small> */}
            </i>{" "}
          </span>
          <Link   className='link' to="/workoutstatus">
            <h3>Workout Staus</h3>
          </Link>
          {/*notification popup*/}
          <div className="notifications-popup">
            <div>
              <div className="profile-photo">
                <img src="./images/profile-2.jpg" alt="profile-picture" />
              </div>
              <div className="notification-body">
                <b>Siddhartha Sharma</b> accepted your friend Request.
                <small className="text-muted">2 Days Ago</small>
              </div>
            </div>
            <div>
              <div className="profile-photo">
                <img src="./images/profile-3.jpg" alt="profile-picture" />
              </div>
              <div className="notification-body">
                <b>John Doe</b> commented On your post.
                <small className="text-muted">2 Days Ago</small>
              </div>
            </div>
            <div>
              <div className="profile-photo">
                <img src="./images/profile-2.jpg" alt="profile-picture" />
              </div>
              <div className="notification-body">
                <b>keke benjamin</b> Accepted your Friend Request.
                <small className="text-muted">2 Days Ago</small>
              </div>
            </div>
            <div>
              <div className="profile-photo">
                <img src="./images/profile-2.jpg" alt="profile-picture" />
              </div>
              <div className="notification-body">
                <b>keke benjamin</b> Accepted your Friend Request.
                <small className="text-muted">2 Days Ago</small>
              </div>
            </div>
            <div>
              <div className="profile-photo">
                <img src="./images/profile-2.jpg" alt="profile-picture" />
              </div>
              <div className="notification-body">
                <b>keke benjamin</b> Accepted your Friend Request.
                <small className="text-muted">2 Days Ago</small>
              </div>
            </div>
            <div>
              <div className="profile-photo">
                <img src="./images/profile-2.jpg" alt="profile-picture" />
              </div>
              <div className="notification-body">
                <b>keke benjamin</b> Accepted your Friend Request.
                <small className="text-muted">2 Days Ago</small>
              </div>
            </div>
          </div>
        </a>
        <a className={`menu-item ${activeMenuItem === "/mealplan" ? "active" : ""}`}
            id="messages-notifications">
          <span>
            <i className="uil uil-envelope">
              {" "}
              {/* <small className="notification-count">5+</small> */}
            </i>{" "}
          </span>
          <Link  className='link' to="/mealplan">
            <h3>Meal plan</h3>
          </Link>
        </a>
        <a className="menu-item">
          <span>
            <i className="uil uil-bookmark" />{" "}
          </span>
          <h3>BookMarks</h3>
        </a>
        <a className="menu-item">
          <span>
            <i className="uil uil-chart-line" />{" "}
          </span>
          <h3>Analytics</h3>
        </a>
        <a className="menu-item">
          <span>
            <i className="uil uil-palette" />{" "}
          </span>
          <h3>Theme</h3>
        </a>
        <a className="menu-item">
          <span>
            <i className="uil uil-setting" />{" "}
          </span>
          <h3>Settings</h3>
        </a>
      </div>
    </div>
  );
}
