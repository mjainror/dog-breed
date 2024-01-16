import React from "react";
import { Link } from "react-router-dom";
import Breed from "../components/Breed";

export default () => (
  <div className="vw-100 vh-100 mt-5 align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color main-container">
        <h1 className="display-4">Dog Breeds</h1>
        <p className="lead">
          Find out the dogs by their breed name.
        </p>
        <hr className="my-4" />
        <Breed />
      </div>
    </div>
  </div>
);
