import React from "react";
import { UserAuth } from "../context/AuthContext";
import "./SigninStyle.css";

const Signin = () => {
  const { user, facebookSignIn, logOut } = UserAuth();
  const handleFacebookSignin = async () => {
    try {
      await facebookSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const renderButton = () => {
    if (user) {
      return (
        <div className="btn">
          <button className="btn btn-primary" style={{ height: 47, width: 400, fontWeight: "bold" }} onClick={logOut} >
            Logout
          </button>
          <hr />
        </div>
      );
    } else {
      return (
        <div className="btn">
          <button className="btn btn-primary" style={{ height: 47, width: 400, fontWeight: "bold" }} onClick={handleFacebookSignin}>
            Login with Facebook
          </button>
          <hr />
        </div>
      );
    }
  };

  return (
    <div className="facebook-container">
      <h2 className="text">Firebase Auth</h2>
      <div>
        <p className="user-email">Welcome: {user && user.email}</p>
      </div>
      <div className="text_btn">       
        {renderButton()}
      </div>
    </div>
  );
};

export default Signin;
