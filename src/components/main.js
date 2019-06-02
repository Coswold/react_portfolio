import React, { Component } from "react";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import '../flip_cards.css';
import moto from "../motorcycle-64.png";
import coffee from "../coffee-7-64.png";
import note from "../note-64.png";
import book from "../book-64.png";
import air from "../airplane-takeoff-64.png";

class Main extends Component {
render() {
    return (
      <div>
        <div class="topic bgr">
            <h2>CONNOR OSWOLD</h2>
            <h3>Software Engineer in San Francisco</h3>
            <p>I'm passionate about open source education, machine learning, and
            computer science. I like to write on Medium about what I learn,
            build applications to help others learn, and contribute to projects
            that will make the world a cooler place.</p>
            <p>If you'd like to learn more, have a look around, or go directly to
            the project page if you're interested in what I'm working on.</p>
        </div>

        <div class="title fontr padding">
            <h3><span>Experiences and Accomplishments</span></h3>
        </div>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date="June 2016"
            iconStyle={{ background: '#43C0F6', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Systems Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Symetra</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: '#F5CE28', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: '#DE1738', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: '#F81B84', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
            <p>
              Strategy, Social Media
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
            <p>
              Creative Direction, User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            // icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>
              Creative Direction, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            // icon={<StarIcon />}
          />
        </VerticalTimeline>

        <div class="title fontr">
            <h3><span>Skills and Tools</span></h3>
        </div>

        <div class="title fontr padding">
            <h3><span>Other Interests</span></h3>
        </div>

        <div class="contain">

            <div class="flip-row">

              <div class="flip-column">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img class="image-center" src={coffee} />
                    </div>
                    <div class="flip-card-back">
                      <p class="vertical-center">Anytime, anywhere.</p>
                    </div>
                  </div>
                </div>
               </div>

                <div class="flip-column">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img class="image-center" src={air} />
                    </div>
                    <div class="flip-card-back">
                      <p class="vertical-center">Exploring new cities and trying new foods.</p>
                    </div>
                  </div>
                </div>
               </div>

               <div class="flip-column">
               <div class="flip-card">
                 <div class="flip-card-inner">
                   <div class="flip-card-front">
                     <img class="image-center" src={moto} />
                   </div>
                   <div class="flip-card-back">
                     <p class="vertical-center">License: &#10003;
                     Motorcycle: X</p>
                   </div>
                 </div>
               </div>
              </div>

              <div class="flip-column">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img class="image-center" src={note} />
                  </div>
                  <div class="flip-card-back">
                    <p class="vertical-center">Live music and learning to play
                    the drums.</p>
                  </div>
                </div>
              </div>
             </div>

             <div class="flip-column">
             <div class="flip-card">
               <div class="flip-card-inner">
                 <div class="flip-card-front">
                   <img class="image-center" src={book} />
                 </div>
                 <div class="flip-card-back">
                   <p class="vertical-center">Sci-fi, fantasy, and philosophy.</p>
                 </div>
               </div>
             </div>
            </div>

            </div>

        </div>

      </div>
    );
  }
}

export default Main;
