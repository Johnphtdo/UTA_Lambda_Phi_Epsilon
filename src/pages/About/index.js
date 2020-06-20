import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";

function About() {
  return (
    <div>
      <Header
        id="header__home"
        sub="ββ CHAPTER AT THE UNIVERSITY OF TEXAS AT ARLINGTON"
      />
      <section className="section-about">
        <div className="history__navigation">
          <ul className="history__list">
            <li className="history__item">
              <Button
                className="btn_primary btn-history"
                id="btn-national"
                type="button"
                data-toggle="collapse"
                data-target="#about__national"
                aria-expanded="true"
                aria-controls="about__national"
              >
                National
              </Button>
            </li>
            <li className="history__item">
              <Button
                className="btn_primary btn-history collapsed"
                id="btn-regional"
                type="button"
                data-toggle="collapse"
                data-target="#about__regional"
                aria-expanded="true"
                aria-controls="about__regional"
              >
                Regional
              </Button>
            </li>
            <li className="history__item">
              <Button
                className="btn_primary btn-history collapsed"
                id="btn-local"
                data-toggle="collapse"
                data-target="#about__local"
                aria-expanded="true"
                aria-controls="about__local"
              >
                Local
              </Button>
            </li>
          </ul>
        </div>

        <div
          className="about collapse show"
          id="about__national"
          aria-labelledby="btn-national"
          data-parent=".section-about"
        >
          <div className="u-center-text u-margin-bottom-4">
            <h3 className="heading-secondary">
              <span className="heading-secondary--main">
                ABOUT LAMBDA PHI EPSILON
              </span>
              <span className="heading-secondary--sub">
                The world's largest Asian-interest Fraternity
              </span>
            </h3>
          </div>
          <div className="about-us">
            <p>
              Lambda Phi Epsilon was founded on February 25, 1981 by a group of
              nineteen dedicated men led by principal founder Mr. Craig Ishigo.
              The goal of the founders was to transcend the limitations faced by
              traditional Asian-interest organizations on campus. While these
              organizations were often split along lines of national origins,
              the founders sought an establishment that drew its membership
              equally from the different segments of the Asian American
              community. Their vision was that the members would eventually
              become the leaders of their respective ethnic communities, and
              thus, bridge the gaps fragmenting the Asian American community
              through their affiliation with a common organization.
            </p>
            <p>
              The greatest hurdle in reaching this goal of unification was the
              lack of continuity among the memberships inherent in traditional
              campus organizations. At best, student associations provided a
              circle of friends spanning the years of undergraduate study, and
              at worst, a group of familiar strangers meeting periodically at
              social functions. The yearly turnover of most organizations’
              officers made it extremely difficult to pursue any extended
              project as each new officer core set its own agenda. The founders’
              solution to this dilemma was the adoption of a fraternal
              structure. By forming Lambda Phi Epsilon as a new Asian-interest
              fraternity, they aimed to set new standards of excellence for
              Asian American organizations. The brothers not only formed strong
              bonds of brotherhood with each other during their undergraduate
              experience but also made lifelong commitments to the organization
              as alumni even after graduation. While the initial charter was
              comprised of Asian Pacific Americans, the brotherhood was open to
              all who were interested in supporting these goals. Establishing
              Alpha Chapter at UCLA, Mr. Craig Ishigo and Mr. Darryl L. Mu
              signed the charter as President and Vice President, respectively.
            </p>
            <p>
              On May 28th, 1990, the fraternity, now with six chapters total,
              convened on the campus of the University of California, Irvine for
              the first annual National Convention, which to this day has been
              held regularly over Memorial Day weekend. A national governing
              body was established to oversee the development of individual
              chapters and the fraternity as a whole, with Mr. Robert Mimaki of
              Beta Chapter, Mr. Eric Naritomi of Epsilon Chapter, and Mr. Doug
              Nishida of Delta Chapter appointed as National President, Northern
              Governor and Southern Governor, respectively.
            </p>
            <p>
              On September 8th, 1990, Lambda Phi Epsilon reached another
              milestone and became the first and only nationally recognized
              Asian-interest fraternity in the United States with the admission
              to the
              <a
                href="http://www.nicindy.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="history__link"
              >
                National Interfraternity Conference
              </a>
              . In 2004, Lambda Phi Epsilon expanded as an international
              fraternity by chartering its first chapter outside of the United
              States at the University of Toronto. In 2006, Lambda Phi Epsilon
              joined the
              <a
                href="http://www.napa-online.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="history__link"
              >
                National Asian Pacific Islander Desi American Panhellenic
                Association
              </a>
              to increase collaboration and partnership between fellow APIA
              Greek organizations. Today, Lambda Phi Epsilon is widely renown as
              the preeminent international Asian-interest fraternal
              organization, providing outstanding leadership, philanthropy, and
              advocacy in the community.
            </p>
            <p>
              The nineteen Founding Fathers of Lambda Phi Epsilon are: Mr.
              Hunter Chang, Mr. Randy Fujimoto, Mr. John Hanvey, Master Craig
              Ishigo, Mr. Jeff Kaku, Mr. Bobby Kawai, Mr. Dean Kumagawa, Mr. Jim
              Lee, Mr. Bruce Mau, Mr. Ted Mihara, Mr. Neil Miyazaki, Mr. Darryl
              L. Mu, Mr. Kelvin Sakai, Mr. Kevin Shida, Mr. Albert Sun, Mr.
              Weyton Tam, Mr. Jamie Watanabe, Mr. Bennett Wong, Mr. Fred Wong.
            </p>
          </div>
        </div>
        <div
          className="about collapse"
          id="about__regional"
          aria-labelledby="btn-regional"
          data-parent=".section-about"
        >
          <div className="u-center-text u-margin-bottom-4">
            <h3 className="heading-secondary">
              <span className="heading-secondary--main">
                ABOUT THE SOUTHWEST
              </span>
              <span className="heading-secondary--sub">
                The Chapters in Texas and Oklahoma
              </span>
            </h3>
          </div>
          <div className="about-us">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt
              accusamus, delectus nisi consectetur temporibus nesciunt quaerat
              in modi, labore asperiores unde assumenda porro, quia earum
              nostrum nihil libero? Eius inventore explicabo quos nesciunt cum
              ut doloremque accusamus incidunt laudantium tempora doloribus
              dolor, corporis dolorum aut adipisci nam officia praesentium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              voluptates eveniet omnis nulla expedita optio saepe aliquam est,
              consequuntur dolore modi delectus quam vitae distinctio voluptatum
              dignissimos blanditiis corporis assumenda. Optio ipsam sint
              nesciunt modi exercitationem vitae et ad mollitia, aliquam enim
              hic qui, natus perferendis, illum sequi nisi. Nisi.
            </p>
          </div>
        </div>

        <div
          className="about collapse"
          id="about__local"
          aria-labelledby="btn-local"
          data-parent=".section-about"
        >
          <div className="u-center-text u-margin-bottom-4">
            <h3 className="heading-secondary">
              <span className="heading-secondary--main">ABOUT ββ CHAPTER</span>
              <span className="heading-secondary--sub">
                The first and only international Asian-interest fraternity at
                UTA
              </span>
            </h3>
          </div>
          <div className="about-us">
            <p>
              The DFW area has a large Asian American demographic, therefore at
              the University of Texas at Arlington (UTA), there is a large Asian
              American community because many students would commute from the
              surrounding area. The school was inclusive with different student
              organizations, but the Asian American community was still missing
              an Asian interest fraternity or sorority. Nam Doan and Anthony
              Nguyen visited different campuses in search of the best
              organization and was inspired to bring Lambda Phi Epsilon to UTA.
              Thus, the Altruistic Asian Association (AAA) was created on
              January 25th, 2012, as an interest group to charter Lambda Phi
              Epsilon.
            </p>

            <p>
              In late 2012, almost a year of hard work and determination, AAA
              was extended an offer to charter. By April 7th, 2013, after being
              educated by Omar "Sinbad" Baker on how to operate and lead a
              Lambda Phi Epsilon chapter, the following men officially crossed
              as Charter Class: Charlie Danh, John Do, Johnny Do, Nam Doan, Tony
              Ho, Hai Lam, Matthew Lu, Anthony Nguyen, Tommy Nguyen, Joe Tran,
              Lac Tran, and Michael Tran. With their guidance, the chapter
              became a prominent organization and created more interest for
              Greek culture among the Asian American students. By May 26, 2019,
              the chapter received their official letters and became the Beta
              Beta Chapter of Lambda Phi Epsilon.
            </p>

            <p>
              If you want to contact the current leadership, please click
              {/* <!-- Change the email in the href to match your chapter's contact --> */}
              <a
                href="mailto:president.utalambdas@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="history__link"
              >
                here.
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
