import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <section className="contact-section">
        <div className="con-container ">
          <div className="con-text-flex ">
            <h1 className="contact-heading"></h1>

            <p>Your feedback matters; get in touch today!</p>
          </div>
          <div className="con-input-width">
            <div className="con-flex">
              <div
                data-aos="zoom-in-right"
                data-aos-duration="3000"
                className="con-input-box"
              >
                <div className="con-input ">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" />
                </div>
              </div>
              <div
                data-aos="zoom-in-left"
                data-aos-duration="3000"
                className="con-input-box "
              >
                <div className="con-input  ">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" />
                </div>
              </div>
              <div
                data-aos="zoom-in-right"
                data-aos-duration="3000"
                className="con-input-textbox "
              >
                <div className="con-input ">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" />
                </div>
              </div>
              <div
                data-aos="zoom-in-up"
                data-aos-duration="3000"
                className="con-input-textbox "
              >
                <button className="btn ">Send</button>
              </div>
              <div className="border-line">
                <p>amnarafeeq68@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
