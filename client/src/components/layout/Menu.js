import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  return (
    <menu>
      <h1>AuthZ</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/sign-up">Register</Link>
          </li>
        </ul>
      </nav>
    </menu>
  );
}
