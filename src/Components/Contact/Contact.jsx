import React, { useState } from "react";
import Pstyle from "../Portfolio/Portfolio.module.css";
import Cstyle from "../Contact/Contact.module.css";
export default function Contact() {
  const [text, settext] = useState("");
  const [text1, settext1] = useState("");
  const [text2, settext2] = useState("");
  const [text3, settext3] = useState("");
  return (
    <>
      <section className=" bg-white">
        <div className="container">
          <div className="row">
            <h2
              className={` fw-bolder text-center text-uppercase fs-1 ${Pstyle.title}`}
            >
              contact section
            </h2>
            <div className="star d-flex gap-2 align-items-center justify-content-center mt-2 mb-5">
              <div className={Pstyle.icony}></div>
              <i className={`fa-solid fa-star`}></i>
              <div className={Pstyle.icony}></div>
            </div>

            <div className="allInput mt-5">
              <div className="col-md-6 mx-auto mb-5">
                {text && (
                  <p style={{ marginBottom: "10px", color: "#1abc9c" }}>
                    userName:
                  </p>
                )}
                <input
                  className="form-control"
                  type="text"
                  placeholder="userName"
                  aria-label="default input example"
                  value={text}
                  onChange={(e) => settext(e.target.value)}
                  style={{ padding: "10px", fontSize: "16px" }}
                />
              </div>
              <div className="col-md-6 mx-auto mb-5">
                {text1 && (
                  <p style={{ marginBottom: "10px", color: "#1abc9c" }}>
                    userAge:
                  </p>
                )}
                <input
                  className="form-control"
                  type="text"
                  placeholder="userAge"
                  aria-label="default input example"
                  value={text1}
                  onChange={(e) => settext1(e.target.value)}
                  style={{ padding: "10px", fontSize: "16px" }}
                />
              </div>
              <div className="col-md-6 mx-auto mb-5">
                {text2 && (
                  <p style={{ marginBottom: "10px", color: "#1abc9c" }}>
                    userEmail:
                  </p>
                )}
                <input
                  className="form-control"
                  type="text"
                  placeholder="userEmail"
                  aria-label="default input example"
                  value={text2}
                  onChange={(e) => settext2(e.target.value)}
                  style={{ padding: "10px", fontSize: "16px" }}
                />
              </div>
              <div className="col-md-6 mx-auto mb-5">
                {text3 && (
                  <p style={{ marginBottom: "10px", color: "#1abc9c" }}>
                    userPassword:
                  </p>
                )}
                <input
                  className="form-control"
                  type="text"
                  placeholder="userPassword"
                  aria-label="default input example"
                  value={text3}
                  onChange={(e) => settext3(e.target.value)}
                  style={{ padding: "10px", fontSize: "16px" }}
                />
              </div>
            </div>
            <div className="col-md-6 mx-auto">
              <button
                className={`text-white btn ${Cstyle.btn} ${Cstyle.msBtn}`}
              >
                send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
