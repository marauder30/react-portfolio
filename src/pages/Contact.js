import React from "react";

const Contact = () => (
  <div>
    <form>
      <div className="row justify-content-center">
        <div className="col-xs-4">
          <div className="form-group">
            <label for="name">Your Name</label>
            <input type="input" className="form-control" id="name" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xs-4">
          <div className="form-group">
            <label for="email">Email Address</label>
            <input type="email" className="form-control" id="email" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xs-4">
          <div className="form-group">
            <label for="message">Message</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default Contact;
