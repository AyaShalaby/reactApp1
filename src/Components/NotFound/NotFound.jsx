import React from "react";
import hstyle from "../Home/Home.module.css";

export default function NotFound() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <h2 className=" text-white fw-bolder text-uppercase fs-1 text-center">
              NotFound Page
            </h2>
            <div className="star d-flex gap-2 align-items-center justify-content-center mt-3">
              <div className={hstyle.icons}></div>
              <i className={`fa-solid fa-star text-white `}></i>
              <div className={hstyle.icons}></div>
            </div>
            <p className="text-center fs-3 text-danger mb-3">
              Are you want to back to website??
            </p>
            <p className="text-center fs-3 text-success">
              Just from navbar sir !
            </p>
          </div>
        </div>
      </section>
    </>
  );
}