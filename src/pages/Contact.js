import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <video autoPlay muted loop className="Video">
        <source src="images/Contact.mov" type="video/mp4"></source>
      </video>
      <h1>GET IN TOUCH:</h1>
      <form className="form">
        <div className="group">
          <label>Name</label>
          <textarea
            name="firstname"
            placeholder="Please enter your first and last name "
            required
          ></textarea>
        </div>

        <div className="group">
          <label>Email</label>
          <textarea
            name="email"
            placeholder="Please enter your email"
            required
          ></textarea>
        </div>

        <div className="group">
          <label>Phone Number</label>
          <textarea
            name="number"
            placeholder="Please enter your phone number"
            required
          ></textarea>
        </div>

        <div className="group">
          <label>Message</label>
          <textarea name="message"></textarea>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}
