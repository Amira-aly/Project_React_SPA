import { Component } from "react";
import { NavLink, Link } from 'react-router-dom';

class Footer extends Component {
  render() {
      return (
          <footer id="contact">
            <ul>
              <div id="icon-container">
                <Link exact to="/">
                  <div className="icon">
                    <li><i className="fab fa-twitter"></i></li>
                  </div>
                </Link>
                <Link  exact to="/">
                  <div className="icon">
                    <li><i className="fab fa-instagram"></i></li>
                  </div>
                </Link>
                <Link  exact to="/">
                  <div className="icon">
                    <li><i className="fab fa-facebook-f"></i></li>
                  </div>
                </Link>
                <Link  exact to="/">
                  <div className="icon">
                    <li><i className="far fa-envelope"></i></li>
                  </div>
                </Link>
                <Link  exact to="/">
                  <div className="icon">
                    <li><i className="fab fa-free-code-camp"></i></li>
                  </div>
                </Link>
              </div>
            </ul>
            <p>&copy; 2020-2021, Animal House</p>
          </footer>
        );
    }
  }
  export default Footer;