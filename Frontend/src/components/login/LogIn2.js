import React, { useEffect, useReducer } from "react";
import "./LogIn2.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import backImage1 from "./../../images/img/loginBG.jpg";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import { ACCESS_TOKEN, GOOGLE_AUTH_URL, USER_EMAIL, USER_ID, USER_NAME } from "../../constants";
import { login } from "../../util/APIUtils";

import { toast } from "react-toastify";

function LogIn2({ authenticated }) {
  const [state, setState] = useReducer(
    (prevState, newState) => {
      return { ...prevState, ...newState };
    },
    {
      username: "",
      password: "",
    }
  );
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (event) => {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    setState({
      [inputName]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const loginRequest = Object.assign({}, state);

    login(loginRequest)
      .then((response) => {
        console.log("auth is: "+authenticated)
        localStorage.setItem(ACCESS_TOKEN, response.token);
        localStorage.setItem(USER_NAME, response.username)
        localStorage.setItem(USER_EMAIL, response.email)
        localStorage.setItem(USER_ID, response.id)
        toast("You're successfully logged in!", { type: "success" });
        console.log("login succuess!");
        console.log(response.token);
        navigate("/");
      })
      .catch((error) => {
        toast(
          console.log("login failed!")(error && error.message) ||
            "Oops! Something went wrong. Please try again!",
          { type: "error" }
        );
      });
  };

  useEffect(() => {
    setTimeout(() => {
      if (location.state?.error) {
        toast(location.state.error, { type: "error" });
      }

      navigate(location.pathname, { replace: true, state: {} });
    }, 100);
  }, [location.pathname, location.state?.error, navigate]);

  // if (authenticated) {
  //   return (
  //     <Navigate
  //       to={{
  //         pathname: "/",
  //         state: { from: location },
  //       }}
  //     />
  //   );
  // }

  return (
    <MDBContainer fluid style={{backgroundColor:'white'}} className=" p-3">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img src={backImage1} class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col="4" md="6">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn style={{backgroundColor:'#1CDFB9', borderColor:'#1CDFB9'}} floating size="md" tag="a" className="me-2">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn  style={{backgroundColor:'#1CDFB9', borderColor:'#1CDFB9'}}  floating size="md" tag="a" className="me-2">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn  style={{backgroundColor:'#1CDFB9', borderColor:'#1CDFB9'}}  floating size="md" tag="a" className="me-2">
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <form onSubmit={handleSubmit}>
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="formControlLg"
              type="text"
              name="username"
              placeholder="User Name"
              value={state.username}
              onChange={handleInputChange}
              required
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg"
              type="password"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleInputChange}
              required
              size="lg"
            />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <div className="text-center text-md-start mt-4 pt-2">
              <MDBBtn  style={{backgroundColor:'#1CDFB9', borderColor:'#1CDFB9'}}  type="submit" className="mb-0 px-5" size="lg">
                Login
              </MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account? <Link to="/signup">Sign Up!</Link>
              </p>
            </div>
          </form>
        </MDBCol>
      </MDBRow>

      <div style={{backgroundColor:'#1CDFB9'}} className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 ">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2024. All rights reserved.
        </div>

        <div>
          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="facebook-f" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="twitter" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="google" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="linkedin-in" size="md" />
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
}

export default LogIn2;
