import React from "react";
import appointment from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <section
      className="mx-auto"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="text-center">
        <h4 className="text-xl text-primary font-bold">Contact Us</h4>
        <h2 className="text-4xl text-white">Stay connected with us</h2>
      </div>

      <div className="p-10">
        <input
          type="text"
          placeholder="Email Address"
          className="m-8 input w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          placeholder="Subject"
          className="ml-8 mb-8 input w-full max-w-xs"
        />
        <br />
        <textarea
          className="ml-8 textarea"
          placeholder="Your message"
        ></textarea>
      </div>
    </section>
  );
};

export default ContactUs;
