import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="container">
        <footer class="mainfooter" role="contentinfo">
          <div className="container">
            <div class="footer-middle">
              <div class="container">
                <div class="row">
                  {/* C-1 */}
                  <div class="col-md-4 col-sm-6">
                    <h4 className="h4header">Dev co's EmailScrapper</h4>
                    <ul class="social-network social-circle">
                      <li>
                        <a href="#" class="icoFacebook" title="Facebook">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="icoLinkedin" title="Linkedin">
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="icoLinkedin" title="Linkedin">
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-2 col-sm-6">
                    {/* <!--Column2--> */}
                    <div class="footer-pad">
                      <h4 className="h4header">Product</h4>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#">Pricing</a>
                        </li>
                        <li>
                          <a href="#">Feature</a>
                        </li>
                        <li>
                          <a href="#">FAQ</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-6">
                    {/* <!--Column3--> */}
                    <div class="footer-pad">
                      <h4 className="h4header">Company</h4>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#">Terms</a>
                        </li>
                        <li>
                          <a href="#">Privacy</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6">
                    {/* <!--Column1--> */}
                    <div class="footer-pad">
                      <h4 className="h4header">Prospect on LinkedIn</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consec tetur adipisicing
                        elit, sed do eiusmod tempor incididuntut consec tetur
                        adipisicing elit,Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
