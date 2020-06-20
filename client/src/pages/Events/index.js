import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";

const Events = () => {
  return (
    <div>
      <Header
        id="header__events"
        sub="EVENTS HOSTED BY ββ CHAPTER"
      />
      <section className="section-events">
        <div className="u-center-text u-margin-bottom-4">
          <h3 className="heading-secondary">
            <span className="heading-secondary--main">Upcoming Events</span>
            <span className="heading-secondary--sub">
              {/* <!-- Change the email in the href to match your chapter's contact --> */}
              <a
                href="mailto:secretary.utalambdas@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Contact Our Event Coordinator"
              >
                <Button className="btn_primary event-link">
                  Want to host your next event with us?
                </Button>
              </a>
            </span>
          </h3>
        </div>
        {/* <!-- Change each img src to match what you have in the img/events folder. Path is /public/img/events/<file_name> --> */}
        <div className="row">
          <div className="col-1-of-4">
            <div className="event-box cardBox">
              <img
                src="https://via.placeholder.com/300.jpg"
                alt=""
                className="event-box__img"
              />
              <h3 className="event-box__heading">Event 1</h3>
              <p className="event-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="event-box cardBox">
              <img
                src="https://via.placeholder.com/300.jpg"
                alt=""
                className="event-box__img"
              />
              <h3 className="event-box__heading">Event 2</h3>
              <p className="event-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="event-box cardBox">
              <img
                src="https://via.placeholder.com/300.jpg"
                alt=""
                className="event-box__img"
              />
              <h3 className="event-box__heading">Event 3</h3>
              <p className="event-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="event-box cardBox">
              <img
                src="https://via.placeholder.com/300.jpg"
                alt=""
                className="event-box__img"
              />
              <h3 className="event-box__heading">Event 4</h3>
              <p className="event-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
        </div>
        <div className="u-center-text u-margin-bottom-4">
          <h3 className="heading-secondary">
            <span className="heading-secondary--main">Past Events</span>
          </h3>
        </div>
        <div className="row">
          <div className="col-1-of-4">
            <div className="event-box cardBox">
              <img
                src="https://via.placeholder.com/300.jpg"
                alt=""
                className="event-box__img"
              />
              <h3 className="event-box__heading">Event 1</h3>
              <p className="event-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="event-box cardBox">
              <img
                src="https://via.placeholder.com/300.jpg"
                alt=""
                className="event-box__img"
              />
              <h3 className="event-box__heading">Event 2</h3>
              <p className="event-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="event-box cardBox">
              <img
                src="https://via.placeholder.com/300.jpg"
                alt=""
                className="event-box__img"
              />
              <h3 className="event-box__heading">Event 3</h3>
              <p className="event-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="event-box cardBox">
              <img
                src="https://via.placeholder.com/300.jpg"
                alt=""
                className="event-box__img"
              />
              <h3 className="event-box__heading">Event 4</h3>
              <p className="event-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1-of-4">
            <div className="event-box cardBox">
              <img
                src="https://via.placeholder.com/300.jpg"
                alt=""
                className="event-box__img"
              />
              <h3 className="event-box__heading">Event 5</h3>
              <p className="event-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="event-box cardBox">
              <img
                src="https://via.placeholder.com/300.jpg"
                alt=""
                className="event-box__img"
              />
              <h3 className="event-box__heading">Event 6</h3>
              <p className="event-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="event-box cardBox">
              <img
                src="https://via.placeholder.com/300.jpg"
                alt=""
                className="event-box__img"
              />
              <h3 className="event-box__heading">Event 7</h3>
              <p className="event-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="event-box cardBox">
              <img
                src="https://via.placeholder.com/300.jpg"
                alt=""
                className="event-box__img"
              />
              <h3 className="event-box__heading">Event 8</h3>
              <p className="event-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
