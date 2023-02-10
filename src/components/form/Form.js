import "./Form.css";

import React from "react";

export default function Form() {
  return (
    <div className="container-fluid w-100% formSection">
      <form action="noaction.php" className="suggestionForm w-50 float-right">
        <div className="mt-5">
          <input type="text" placeholder="Your Name*" id="name" />
          <input type="email" placeholder="Your Email*" id="email" />
        </div>
        <div className="mt-3">
          <input type="text" placeholder="Subject*" id="subjectArea" />
        </div>
        <div className="mt-3">
          <textarea
            name="msg"
            id="message"
            cols="30"
            rows="6"
            placeholder="Message*"
          ></textarea>
        </div>
        <button className="text-uppercase text-white p-2">send message</button>
      </form>
    </div>
  );
}
