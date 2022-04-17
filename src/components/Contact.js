import { Component } from "react";


class Contact extends Component {
  render() {
      return (
        <div className="container-fluid pt-5  " id="con" >
            <div className="d-flex flex-column text-center mb-5 pt-5">
                <h4 className="text-secondary mb-3">Contact Us</h4>
                <h1 className="display-4 m-0">Contact For <span className="text-info">Animal House</span></h1>
            </div> 

            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 mb-5">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div className="control-group">
                                <input type="text" className="form-control p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control p-4" rows="6" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-info py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-12 mb-n2 p-0">
                    <img id="img" src="img/map.png" />
                </div>
            </div>
        </div>
       );
    }
  }
  export default Contact;