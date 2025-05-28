"use client";
import React from "react";
import "./user_block.css";
import { login, logout } from "@/services/auth/auth";

interface UserBlockProps {
  isLoggedIn: boolean;
  username?: string;
}

export const UserBlock: React.FC<UserBlockProps> = ({
  isLoggedIn,
  username,
}) => {
  if (!isLoggedIn) {
    return (
      <button className="userblock-button" onClick={login}>
        Log In
      </button>
    );
  }
  return (
    <div className="userblock-logged">
      <span className="userblock-name">{username}</span>
      <button className="userblock-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
