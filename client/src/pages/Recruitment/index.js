import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";

function Recruitment() {
  return (
    <div>
      <Header id="header__recruitment" sub="BECOME A LEADER AMONG MEN" />
      <section className="section-recruitment u-margin-bottom-4">
        <div className="row">
          <div className="col-1-of-2">
            <div className="u-center-textR">
              <h3 className="heading-secondary ">
                <span className="heading-secondary--main">
                  Why Join Lambda Phi Epsilon?
                </span>
              </h3>
            </div>
            <div className="about-recruitment">
              <p>
                Lambda Phi Epsilon is an organization that will challenge every
                aspect of your college life. The road to becoming a brother of
                Lambda Phi Epsilon is not easy as it requires drive and
                dedication towards achieving the organization’s various goals,
                but the rewards are well worth it. New members enter into a
                brotherhood that is rich in tradition and strong in its bonds
                while learning how to become a leader in their schools, their
                communities, and the real world. It takes a certain type of man
                to become a Lambda—someone who wants to become a leader among
                men.
              </p>
              <p>Perhaps that's you!</p>
              <p>
                Many brothers have said that the reason they joined Lambda Phi
                Epsilon was because they could see and feel a sense of
                brotherhood among the existing members that they could not find
                elsewhere. However, the brotherhood extends far beyond the reach
                of a single school. With chapters across the country, brothers
                have a chance to network with others from all over, bringing
                with it many new opportunities and friendships. Membership does
                not end with the undergraduate years. Numerous alumni
                associations exist all across the country, bringing both newly
                graduated brothers and those with more experience in the real
                world to continue their contribution to society.
              </p>
              <p>
                Lambda Phi Epsilon not only seeks to bring together a diverse
                group of men who share common interests, concerns, backgrounds,
                and cultures, but those who show the confidence of a leader.
                This leadership is pivotal in achieving the goals of the
                fraternity, which include servicing the community through
                various philanthropies, increasing Asian awareness, promoting
                academic scholarship, and strengthening the Asian American voice
                in the community. Each brother has a vital role in making these
                goals attainable, and the principles that they learn are passed
                down to new members in hopes that they will become the next
                generation of leaders among men.
              </p>
              <p>Want to become a Leader Among Men?</p>
              <span className="heading-secondary--sub u-center-text">
                {/* <!-- Change the email in the href to match your chapter's contact --> */}
                <a
                  href="mailto:secretary.utalambdas@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact our Rush Coordinator"
                >
                  <Button className="btn_primary contact-link">
                    Contact Us
                  </Button>
                </a>
              </span>
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="u-center-textR">
              <h3 className="heading-secondary">
                <span className="heading-secondary--main">
                  Frequently Asked Questions
                </span>
              </h3>
            </div>
            <div className="accordion" id="accordionRecruitment">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <Button
                      className="btn btn-link u-justify-text"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is Rush?
                    </Button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionRecruitment"
                >
                  <div className="card-body">
                    Rush is a period at the beginning of the school quarter or
                    semester when anyone interested in Greek life can attend
                    events set up by a local chapter to meet its members and
                    learn more about their organization. Rush usually lasts
                    about 1-2 weeks, with events held every day that showcase
                    various aspects of the fraternity.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <Button
                      className="btn btn-link collapsed u-justify-text"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What is a bid?
                    </Button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionRecruitment"
                >
                  <div className="card-body">
                    A bid is an invitation to enter the pledge process and
                    continue on the path of becoming a brother. Bids are given
                    at the end of recruitment to potential recruits who the
                    brothers feel would be a good fit to our fraternity. You are
                    not obligated to accept a bid if given one; recruitment is
                    completely non-committal.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <Button
                      className="btn btn-link collapsed u-justify-text"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Do I have to join if I attend rush events?
                    </Button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionRecruitment"
                >
                  <div className="card-body">
                    No. Recruitment is simply an opportunity for you to
                    introduce yourself and meet the brothers. So have fun, enjoy
                    yourself, and allow us to show you what our brotherhood can
                    offer you. All recruitment events are free. All costs are
                    funded by Lambda Phi Epsilon. Rides to all distant events
                    are provided as well.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFour">
                  <h2 className="mb-0">
                    <Button
                      className="btn btn-link collapsed u-justify-text"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Is there a GPA Requirement?
                    </Button>
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionRecruitment"
                >
                  <div className="card-body">
                    Academic achievement is our highest priority. Only students
                    with a cumulative GPA of 2.75 or higher will be considered
                    for a bid. This nonnegotiable standard is enforced by the
                    University of Texas at Arlington.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFive">
                  <h2 className="mb-0">
                    <Button
                      className="btn btn-link collapsed u-justify-text"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Will joining Fraternity impact my education?
                    </Button>
                  </h2>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#accordionRecruitment"
                >
                  <div className="card-body">
                    While you are encouraged to learn more about the Greek
                    system, we want you to remember why you are at school in the
                    first place. Lambda Phi Epsilon’s first and foremost purpose
                    is to promote academic achievement and this priority is
                    stressed even to current members. Like any worthwhile
                    undertaking, joining a fraternity will most likely require
                    some time and effort. Managing school and joining a
                    fraternity is definitely possible, though, and part of
                    becoming a Lambda is learning how to handle these challenges
                    and become a responsible, well-rounded individual that
                    optimizes time management. The active members of the
                    fraternity are students as well, and they will be committed
                    to ensuring your academic success. Be sure to find the right
                    balance to have a rewarding college life both academically
                    and socially.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingSix">
                  <h2 className="mb-0">
                    <Button
                      className="btn btn-link collapsed u-justify-text"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      What type of person are you looking for?
                    </Button>
                  </h2>
                </div>
                <div
                  id="collapseSix"
                  className="collapse"
                  aria-labelledby="headingSix"
                  data-parent="#accordionRecruitment"
                >
                  <div className="card-body">
                    The diversity of our fraternity is due to the individual
                    personalities that make up the house. However, our motto,
                    “Leaders Among Men,” applies to each and every brother. We
                    are looking for the leaders among the crowd, who will
                    ultimately become the faces of our fraternity. We are not
                    looking for quitters or students who cannot commit a
                    significant amount of time to the new member education
                    process.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingSeven">
                  <h2 className="mb-0">
                    <Button
                      className="btn btn-link collapsed u-justify-text"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      Do I have to be Asian to join?
                    </Button>
                  </h2>
                </div>
                <div
                  id="collapseSeven"
                  className="collapse"
                  aria-labelledby="headingSeven"
                  data-parent="#accordionRecruitment"
                >
                  <div className="card-body">
                    No. Lambda Phi Epsilon is an Asian interest fraternity that
                    focuses on the promotion of Asian American awareness, but
                    members of every ethnicity, race, religion, and creed are
                    accepted.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingEight">
                  <h2 className="mb-0">
                    <Button
                      className="btn btn-link collapsed u-justify-text"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      What is the new member education process?
                    </Button>
                  </h2>
                </div>
                <div
                  id="collapseEight"
                  className="collapse"
                  aria-labelledby="headingEight"
                  data-parent="#accordionRecruitment"
                >
                  <div className="card-body">
                    If, at the end of recruitment, you are extended a bid and
                    you accept the opportunity to complete the new member
                    education process of Lambda Phi Epsilon, the possibilities
                    are endless. Stressing skills such as leadership,
                    communication, organization, and punctuality, the
                    fraternity’s education process will help you develop close
                    bonds of brotherhood with men from all walks of life. These
                    abilities have proven highly useful to brothers well outside
                    the bounds of the fraternity. With an alumni network
                    stretching from Tokyo to London, and with chapters at over
                    50 top universities, you will meet brothers with whom you
                    have an instant bond because of the ideals and experiences
                    instilled during pledging. Simply put, Lambdas is an
                    experience that can greatly enrich your time at The
                    University of Texas at Arlington. Don’t be fooled by the
                    stereotypes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Recruitment;
