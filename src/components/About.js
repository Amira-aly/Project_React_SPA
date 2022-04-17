import { Component } from "react";
import { NavLink, Link } from 'react-router-dom';


class About extends Component {
  render() {
      return (
        <div className="container py-4  ">
            <div className="row py-5">
                <div className="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
                    <h4 className="text-secondary mb-3">About Us</h4>
                    <h1 className="display-4 mb-4"><span className="text-info">Animal</span>  <span className="text-secondary">House</span></h1>
                    <h5 className="text-muted mb-3">Many countries may deliberately establish natural reserves that they prepare in particular in order to protect animals.</h5>
                    <p className="mb-4">Especially those that are subject to extinction due to the significant decrease in their numbers, as a result of overgrazing or many wrong practices that cause their death, sometimes in large numbers that cannot be counted, and this is the result of the neglect of many Those who deliberately throw waste and exhaust in agricultural areas or animal environments, so that dirt rots and turns into toxic substances that spread in vast areas, including what is confined and withers underground, and therefore we have prepared a house for animals</p>
                    <Link exact to="/" className="btn btn-info mt-3 px-4">Learn More</Link>
                </div>

                <div className="col-lg-5">
                    <div className="row px-3">
                        <div className="col-8 p-0">
                            <img className="img-fluid w-100" src="img/catss.jpg"  />
                        </div>                          
                    </div>
                </div>
            </div>
        </div>
        );
    }
  }
  export default About;