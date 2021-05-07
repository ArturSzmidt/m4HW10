import { Component } from 'react';
import { Container, Button } from 'react-bootstrap';

const NavSide = () => (
  <Container>
    <div>
      <div className="sidebar col-12 col-sm-1 col-md-2 d-flex flex-column sticky-top">
        <ul className="sidebar-top-nav navbar-nav text-light ml-2">
          {/* smartphone small screen collapse */}
          <li className="nav-item mt-4">
            <div className="d-flex flex-row align-items-center">
              {/* <img
                  className="img-fluid d-sm-none d-md-block"
                  src="/assets/img/spotify-1-logo-black-and-white.png"
                  alt
                  style={{ maxHeight: 40 }}
                /> */}
              <div className="sidebar-dropdown-trigger ml-auto d-inline-block d-sm-none">
                <button className="navbar-toggler">
                  <Button name="menu-outline" />
                </button>
                <div className="sidebar-dropdown fixed-top">
                  <div className="p-4">
                    <div className="mt-3" onclick="showHomepage()">
                      <Button name="home-outline" />
                      <span className="ml-lg-3 ml-1 d-sm-none d-md-inline-block d-lg-inline-block">
                        Home
                      </span>
                    </div>
                    <div className="mt-3" onclick="showSearch()">
                      <Button name="search-outline" />
                      <span className="ml-lg-3 ml-1 d-sm-none d-md-inline-block d-lg-inline-block">
                        Search
                      </span>
                    </div>
                    <div className="mt-3">
                      <Button
                        className="player-controls"
                        name="library-outline"
                      />
                      <span className="ml-lg-3 ml-1 d-sm-none d-md-inline-block d-lg-inline-block">
                        Your Libary
                      </span>
                    </div>
                    <div className="sidebar-footer ">
                      <hr
                        className="sidebar-devider"
                        style={{ width: '100%' }}
                        size={3}
                        color="var(--sidebar-text-color)"
                      />
                      <div className="mt-3">
                        <Button name="arrow-down-circle-outline" />
                        <span className="ml-lg-3 ml-1 d-sm-none d-md-inline-block d-lg-inline-block">
                          Install App
                        </span>
                      </div>
                      <div className="mt-3">
                        {/* <img
                            className="rounded-circle"
                            src="/assets/img/DSC09736cut.jpg"
                            alt
                            style={{ width: 29 }}
                          /> */}
                        <span className="ml-lg-1 ml-1 text-white d-sm-none d-md-inline-block d-lg-inline-block">
                          Blank text
                        </span>
                      </div>
                    </div>
                    <div className="sidebar-footer-with-buttons">
                      <div className="mt-3">
                        <div className="d-flex">
                          <button className="sidebar-button btn rounded-pill flex-grow-1">
                            SIGN UP
                          </button>
                        </div>
                      </div>
                      <div className="mt-3">
                        <a
                          className="sidebar-button btn rounded-pill flex-grow-1 d-block"
                          href="login.html"
                        >
                          LOGIN
                        </a>
                      </div>
                      <div className="mt-3 d-flex justify-content-center">
                        <span className="sidebar-footer-disclaimer">
                          Cookie | Privacy | Policy
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <img
                className="img-fluid  d-sm-block d-m "
                src="/assets/img/spotify_logo_whit_wt.png"
                alt
                style={{ maxHeight: 40 }}
              /> */}
          </li>
          {/* end smartphone small screen collapse */}
          {/* standard sidebar items */}
          <li className="nav-item mt-3  d-sm-inline active">
            <div onclick="showHomepage()">
              <Button name="home-outline" />
              <span className="ml-lg-3 ml-1 d-sm-none d-md-inline-block d-lg-inline-block">
                Home
              </span>
            </div>
          </li>
          <li className="nav-item mt-3  d-sm-inline">
            <div onclick="showSearch()">
              <Button name="search-outline" />
              <span className="ml-lg-3 ml-1 d-sm-none d-md-inline-block d-lg-inline-block">
                Search
              </span>
            </div>
          </li>
          <li className="nav-item mt-3  d-sm-inline">
            <div>
              <Button className="player-controls" name="library-outline" />
              <span className="ml-lg-3 ml-1 d-sm-none d-md-inline-block d-lg-inline-block">
                Your Libary
              </span>
            </div>
          </li>
          {/* end standard sidebar items */}
        </ul>
        {/*start sidebar footer account */}
        <div className="sidebar-footer mt-sm-auto mb-4 ml-2 ">
          <ul className="navbar-nav mt-0 mt-sm-auto mb-4 ml-2  d-sm-inline">
            <li className="nav-item mt-3">
              <div>
                <Button name="arrow-down-circle-outline" />
                <span className="ml-lg-3 ml-1 d-sm-none d-md-inline-block d-lg-inline-block">
                  Install App
                </span>
              </div>
            </li>
            <li className="nav-item">
              <hr
                className="sidebar-devider"
                style={{ width: '100%' }}
                size={3}
                color="var(--sidebar-text-color)"
              />
            </li>
            <li className="nav-item">
              <div>
                {/* <img
                    className="rounded-circle"
                    src={require("/assets/img/DSC09736cut.jpg")}
                    alt
                    style={{ width: 29 }}
                  /> */}
                <span className="ml-lg-1 ml-1 text-white d-sm-none d-md-inline-block d-lg-inline-block">
                  Blank text
                </span>
              </div>
            </li>
          </ul>
        </div>
        {/* end sidebar footer account  */}
        {/* Start foot sidebar with button */}
        <div className="sidebar-footer-with-buttons mt-sm-auto mb-4 ml-2">
          <ul className="navbar-nav mt-sm-auto mb-4 ml-2  d-sm-none d-md-inline">
            <li className="nav-item my-2">
              <div className="d-flex">
                <button className="sidebar-button btn rounded-pill flex-grow-1">
                  SIGN UP
                </button>
              </div>
            </li>
            <li className="nav-item d-flex my-2">
              <a
                className="sidebar-button btn rounded-pill flex-grow-1"
                href="login.html"
              >
                LOGIN
              </a>
            </li>
            <li className="nav-item d-flex justify-content-center">
              <div>
                <span className="sidebar-footer-disclaimer">
                  Cookie | Privacy | Policy
                </span>
              </div>
            </li>
          </ul>
        </div>
        {/* End foot sidebar with button */}
      </div>
    </div>
  </Container>
);

export default NavSide;
