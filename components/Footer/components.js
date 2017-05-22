import React from 'react'
import Link from 'next/link'

import { Collapse } from 'reactstrap';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-wrapper">
      <footer className="visible">
          <div className="container">
              <div className="row">
                  <div className="col-sm-4 col-md-4 footer-list-container">
                      <div className="footer-heading">ABOUT<span className="icon-plus circle inverted"></span></div>
                      <ul className="footer-list">
                          <li><a className="about-trustpilot-link-js" href="/about">About</a></li>
                          <li><a href="https://jobs.trustpilot.com">Jobs</a></li>
                              <li><a href="/contact">Contact</a></li>
                                              <li><a href="http://blog.trustpilot.com">Blog</a></li>
                          <li><a href="http://press.trustpilot.com">Press</a></li>
                      </ul>
                  </div>
                  <div className="col-sm-4 col-md-4 footer-list-container">
                      <div className="footer-heading">COMMUNITY<span className="icon-plus circle inverted"></span></div>
                      <ul className="footer-list">
                          <li><a href="/trust">Trust in reviews</a></li>
                          <li><a href="https://support.trustpilot.com">Support Center</a></li>
                          <li><a href="/users/connect?redirect=%2F" className="login-link login-link-js">Log in</a></li>
                          <li><a href="/users/connect?signup=True" rel="nofollow">Sign up</a></li>
                          <li><a href="https://chrome.google.com/webstore/detail/trustpilot/meagmjlgkihmljnchdjagbcgfclobkho" target="_blank">Chrome App</a></li>
                      </ul>
                  </div>
                  <div className="col-sm-4 col-md-4 footer-list-container">
                      <div className="footer-heading">BUSINESSES<span className="icon-plus circle inverted"></span></div>
                      <ul className="footer-list">
                          <li><a href="https://us.business.trustpilot.com">Trustpilot Business</a></li>
                          <li><a href="https://us.business.trustpilot.com/solutions">Products</a></li>
                          <li><a href="https://us.business.trustpilot.com/plans-pricing">Plans &amp; Pricing</a></li>
                          <li><a href="https://en-us.b2b.trustpilot.com/login" rel="nofollow">Business Login</a></li>
                      </ul>
                  </div>
              </div>

              <div className="row">
                  <div className="col-sm-12 col-md-12 footer-social-media-container">
                      <label className="footer-heading-follow small-margin">Follow us on</label>
                      <ul>
                          <li><a href="https://www.facebook.com/Trustpilot/" target="_blank" title="Facebook" className="icon-facebook circle hoover"></a></li>
                          <li><a href="https://twitter.com/Trustpilot" target="_blank" title="Twitter" className="icon-twitter circle hoover"></a></li>
                          <li><a href="https://www.linkedin.com/company/trustpilot" target="_blank" title="LinkedIn" className="icon-linkedin circle hoover"></a></li>
                          <li><a href="https://plus.google.com/+TrustpilotReviews" target="_blank" title="Google plus" className="icon-google circle hoover"></a></li>
                          <li><a href="https://www.pinterest.com/trustpilot/" target="_blank" title="Pinterest" className="icon-pinterest circle hoover"></a></li>
                          <li><a href="https://www.youtube.com/user/trustpilot" target="_blank" title="Youtube" className="icon-youtube circle hoover"></a></li>
                      </ul>
                  </div>

                  <div className="col-sm-12 col-md-12 footer-legal-links">
                      <a href="http://legal.trustpilot.com/end-user-privacy-terms">Privacy Policy</a>
                      <span className="link-divider">|</span>
                      <a href="http://legal.trustpilot.com/end-user-terms-and-conditions">Terms &amp; Conditions</a>
                      <span className="link-divider">|</span>
                      <a href="http://legal.trustpilot.com/user-guidelines">User Guidelines</a>
                  </div>

                  <div className="col-sm-12 col-md-12 footer-copyright-text">
                      © 2017 Trustpilot, Inc. All rights reserved.
                  </div>

              </div>

          </div>
          <a href="/end-of-the-line" rel="nofollow" className="badguys-link-js concealed-dot">...</a>
      </footer>
      <style jsx>{`
        .footer-wrapper {
          background-color: #292929;
        }
        .footer-heading {
          text-align: left;
          cursor: default;
          height: 20px;
          margin: 60px 0 20px;
          padding: 0;
          color: #fff;
        }
        .footer-list-container {
          margin: 0 auto;
        }
        .footer-list{
          text-align: left;
          padding: 0px;
        }
        .footer-heading-follow {
          color: #fff;
        }
      `}
      </style>
      </div>
    );
  }
}