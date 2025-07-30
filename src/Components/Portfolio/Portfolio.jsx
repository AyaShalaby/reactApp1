import React, { useState } from "react";
import photo1 from "../../assets/poert1.png";
import photo2 from "../../assets/port2.png";
import photo3 from "../../assets/port3.png";
import Pstyle from "../Portfolio/Portfolio.module.css";
export default function Portfolio() {
  const [photos, setphotos] = useState([
    { count: 1, photo: photo1 },
    { count: 2, photo: photo2 },
    { count: 3, photo: photo3 },
    { count: 4, photo: photo1 },
    { count: 5, photo: photo2 },
    { count: 6, photo: photo3 },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <section className="bg-white">
        <div className="container">
          <div className="row g-5">
            <h2
              className={` fw-bolder text-center text-uppercase fs-1 ${Pstyle.title}`}
            >
              portfolio component
            </h2>
            <div className="star d-flex gap-2 align-items-center justify-content-center mt-2 mb-3">
              <div className={`${Pstyle.icony}`}></div>
              <i className={`fa-solid fa-star`}></i>
              <div className={`${Pstyle.icony}`}></div>
            </div>

            {photos.map((item, index) => {
              return (
                <div key={index} className="col-md-6 col-lg-4">
                  <div
                    className={`${Pstyle.image} position-relative`}
                    onClick={() => handleClick(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={item.photo}
                      className=" w-100 rounded-2"
                      alt="..."
                    />
                    {activeIndex === index && (
                      <div
                        className={`${Pstyle.layer} d-flex justify-content-center align-items-center position-absolute`}
                      >
                        <i className="fa-solid fa-plus fs-1  text-white"></i>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            
          </div>
        </div>
      </section>
    </>
  );
}