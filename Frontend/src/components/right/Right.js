import React from "react";
import "./Right.css";
import profile from '../../images/profile-14.jpg'
import profile1 from '../../images/profile-11.jpg'

export default function Right() {
  return (
    <div style={{backgroundColor:'#3f3e3e'}}  className="right">
      <div className="messages">
        <div className="heading">
          <h4>Messages</h4>
          <i className="uil uil-edit" />
        </div>
        <div className="search-bar">
          <i className="uil uil-search" />
          <div className="strech">
            <input
              type="search"
              placeholder="search messages"
              id="message-search"
              className="resizedTextbox"
            />
          </div>
        </div>
        {/*category*/}
        <div className="category">
          <h6 className="active">Primary</h6>
          <h6>General</h6>
          <h6 className="message-requests">Requests(7)</h6>
        </div>
        <div className="message">
          <div className="profile-photo">
            <img src={profile1} alt="" />
            <div className="active" />
          </div>
          <div className="message-body">
            <h5>Siddhartha Sharma</h5>
            <p className="text-bold">just woke up </p>
          </div>
        </div>
      </div>
      {/*end of message*/}
      {/*-Friend Reuqests*/}
      {/* <div className="friend-requests">

        <div className="request">

          <div className="info">
            <h4 style={{ color: 'black' }}>Requests</h4>
            <div style={{display:'flex'}}> */}
      {/* <div className="profile-photo ">
                <img src={''} style={{borderRadius:'50%'}} />
              </div> */}
      {/* <div style={{paddingLeft:10, alignContent:'center'}}> */}
      {/* <h5>Bred Thomas</h5>
                <p className="text-muted"> 8 Mutual Friends</p> */}
      {/* </div>
            </div> */}

      {/* </div> */}
      {/* <div className="action">
            <button className="btn btn-primary">Accept</button>
            <button className="btn">Decline</button>
          </div> */}
      {/* <i className="uil uil-placeholder" /> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
