import { Component } from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container>
      <footer className="player fixed-bottom">
        <div className="row d-flex align-items-center mr-0">
          {/*Start Preview */}
          <div className="col d-flex flex-row align-items-center ml-3 flex-shrink-0">
            <img
              className="img-fluid pl-3"
              src="/assets/img/player-preview.jpg"
              alt
              style={{ maxWidth: '6vh' }}
            />
            <div className="player-preview-text d-inline-block d-sm-flex flex-column mx-2">
              <span className="text-white">Song For My Father</span>
              <span className="text-muted">Horace Silverman</span>
            </div>
            <div className="ml-3">
              <ion-icon
                className="player-controls mx-1     d-lg-inline-block md hydrated"
                name="heart-outline"
                role="img"
                aria-label="heart outline"
              />
              <ion-icon
                className="player-controls mx-1     d-lg-inline-block md hydrated"
                name="laptop-outline"
                role="img"
                aria-label="laptop outline"
              />
            </div>
          </div>
          {/* End Preview  */}
          {/* Start Playercontrols */}
          <div className="col d-flex flex-column align-items-center">
            <div className="row">
              <div className="player-controls d-flex col mt-2 align-items-center">
                <ion-icon
                  className="mx-2 md hydrated"
                  name="shuffle"
                  role="img"
                  aria-label="shuffle"
                />
                <ion-icon
                  className="mx-2 md hydrated"
                  name="play-skip-back"
                  role="img"
                  aria-label="play skip back"
                />
                <ion-icon
                  className="mx-2 md hydrated"
                  name="play-circle-outline"
                  role="img"
                  aria-label="play circle outline"
                />
                <ion-icon
                  className="mx-2 md hydrated"
                  name="play-skip-back"
                  role="img"
                  aria-label="play skip back"
                />
                <ion-icon
                  className="mx-2 md hydrated"
                  name="repeat"
                  role="img"
                  aria-label="repeat"
                />
              </div>
            </div>
            <div className="player-song-progress row">
              <div className="col d-flex align-items-center">
                <span className="mx-2">0:00</span>
                <hr
                  className="player-progress-divider m-0"
                  size={3}
                  color="var(--sidebar-text-color)"
                />
                <span className="mx-2">7:18</span>
              </div>
            </div>
          </div>
          {/* End Playercontrols */}
          {/* Start Volume */}
          <div className="col player-controls     d-xl-flex justify-content-end align-items-center ">
            <ion-icon
              className="mx-2 md hydrated"
              name="reorder-four-outline"
              role="img"
              aria-label="reorder four outline"
            />
            <ion-icon
              className="mx-2 md hydrated"
              name="laptop-outline"
              role="img"
              aria-label="laptop outline"
            />
            <ion-icon
              className="mx-2 md hydrated"
              name="volume-high-outline"
              role="img"
              aria-label="volume high outline"
            />
            <hr
              className="player-volume-bar m-0 ml-2 mr-4"
              style={{ width: '20%' }}
              size={3}
              color="var(--footer-player-text-color)"
            />
          </div>
          {/* End Volume */}
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
