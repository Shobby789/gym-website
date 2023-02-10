import "./Trainers.css";
import trainer from "./images/1.png";
import luis from "./images/luis.jpg";
import lawrence from "./images/lawrence.jpg";
import trainer1 from "./images/trainer1.jpg";

import React from "react";

export default function Trainers() {
  return (
    <>
      <div className="container-fluid w-100% expertTrainer">
        <h3 className="text-dark mt-5 text-uppercase fw-bolder">
          our <span id="p">trainers</span>
        </h3>
        {/* <div>
          <img src={trainer} alt="menu not found" className="menuIcon" />
        </div> */}
        <p>
          Training Studio is free CSS template for gyms and fitness centers. You
          are <br />
          allowed to use this layout for your business website.
        </p>

        <div className="trainer d-flex justify-content-evenly" id="trainer">
          {/* card 1 */}
          <div className="cards shadow p-3 mb-5 bg-body rounded mt-5 card1">
            <img src={trainer1} alt="Luis Trainer" />
            <p className="specialization">Strenght Trainer</p>
            <p className="names">
              <strong>Bret D. Bowers</strong>
            </p>
            <p>
              Bitters cliche tattooed 8-bit distillery mustache. Keytar
              succulents gluten-free vegan church-key pour-over seitan flannel.
            </p>
          </div>

          {/* card 2 */}
          <div className="cards shadow p-3 mb-5 bg-body rounded mt-5 card2">
            <img src={lawrence} alt="Luis Trainer" />
            <p className="specialization">Muscle Trainer</p>
            <p className="names">
              <strong>Bret D. Bowers</strong>
            </p>
            <p>
              Bitters cliche tattooed 8-bit distillery mustache. Keytar
              succulents gluten-free vegan church-key pour-over seitan flannel.
            </p>
          </div>

          {/* card 3 */}
          <div className="cards shadow p-3 mb-5 bg-body rounded mt-5 card3">
            <img src={luis} alt="Luis Trainer" />
            <p className="specialization">Power Trainer</p>
            <p className="names">
              <strong>Bret D. Bowers</strong>
            </p>
            <p>
              Bitters cliche tattooed 8-bit distillery mustache. Keytar
              succulents gluten-free vegan church-key pour-over seitan flannel.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
