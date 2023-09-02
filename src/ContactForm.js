import React from "react";
import './components/style.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

const ContactForm = () => {
  return (
    <>
    <Header/>
      <section className="form-section">
        <div className="container">
          <form className="contact-form">
          <h2 className="mb-5">Contact Us</h2>
          <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
               placeholder="enter your email"
               required
              />
            </div>

            <div className="mb-3">
              <input
                type="phone"
                className="form-control"
                id="phone-num"
               placeholder="enter your contact number"
               required
              />
            </div>

            <div className="mb-5">
              <textarea className="form-control" id="msg" placeholder="message"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>


      <Footer/>
    </>
  );
};

export default ContactForm;
