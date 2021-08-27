import React from "react";
import Navbar from "../Components/Navbar";
import "./ProfileScreen.css";
import NetflixAvatar from "../Assets/NetflixAvatar.png";
import { auth } from "../firebase";
import PlansScreen from "./PlansScreen";

const ProfileScreen = ({ user }) => {
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit profile</h1>
        <div className="profileScreen__info">
          <img src={NetflixAvatar} alt="avatar" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>

              <PlansScreen user={user} />

              <button
                className="profileScreen__signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
