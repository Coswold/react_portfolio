import React, { Component } from "react";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SkillBar from 'react-skillbars';

import '../flip_cards.css';

const skills = [
    {
      "type": "Python",
      "level": 85,
    },
    {
      "type": "Node.js",
      "level": 80,
    },
    {
      "type": "Flask",
      "level": 70,
    },
    {
      "type": "React",
      "level": 45,
    },
    {
      "type": "C",
      "level": 35,
    }
];
const colors = {
    "bar": "00c07f",
    "title": {
        "text": "#fff",
        "background": "#282828"
    },
    "bar": {
      "hue": 200,
      "saturation": 100,
      "level": {
        "minimum": 10,
        "maximum": 100
      }
    }
}

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
            <p>If you'd like to learn more, have a look around.</p>
        </div>

        <div class="title fontr padding">
            <h3><span>Curriculum Vitae</span></h3>
        </div>

        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            // date="June 2016"
            iconStyle={{ background: '#00c07f', color: '#fff' }}
            icon={<FontAwesomeIcon icon="graduation-cap" size='lg' color='white' />}
          >
            <h3 className="vertical-timeline-element-title">Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Make School @
            Dominican University</h4>
            <p>
              CS Fundamentals, Data Science, Full-Stack Web
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date="June 2016"
            iconStyle={{ background: '#00c07f', color: '#fff' }}
            icon={<FontAwesomeIcon icon="briefcase" size='lg' color='white' />}
          >
            <h3 className="vertical-timeline-element-title">Systems Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Symetra</h4>
            <p>
              Developed ServiceNow Request Forms, Documentation, ITIL
              Certification
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            // date="2006 - 2008"
            iconStyle={{ background: '#00c07f', color: '#fff' }}
            icon={<FontAwesomeIcon icon="graduation-cap" size='lg' color='white' />}
          >
            <h3 className="vertical-timeline-element-title">BA, Management
            Information Systems</h3>
            <h4 className="vertical-timeline-element-subtitle">Washington State
            University</h4>
            <p>
              Associated Students of WSU Executive Committee, Selected for the Boeing Mentorship
              Program, Member of the Sigma Phi Epsilon Fraternity, GO COUGS!
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date="November 2014"
            iconStyle={{ background: '#00c07f', color: '#fff' }}
            icon={<FontAwesomeIcon icon="briefcase" size='lg' color='white' />}
          >
            <h3 className="vertical-timeline-element-title">Co-Founder</h3>
            <h4 className="vertical-timeline-element-subtitle">Geonectar</h4>
            <p>
              Resourced Manufacturing Techniques, Market Research, Non-Profit
              Partners, Marketing Plans, Prototyping
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date="November 2014"
            iconStyle={{ background: '#00c07f', color: '#fff' }}
            icon={<FontAwesomeIcon icon="briefcase" size='lg' color='white' />}
          >
            <h3 className="vertical-timeline-element-title">Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Studio DEC Design</h4>
            <p>
              Interested in Design and Architecture, Introduced to Architecture
              Practices
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            // date="2014"
            iconStyle={{ background: '#00c07f', color: '#fff' }}
            icon={<FontAwesomeIcon icon="graduation-cap" size='lg' color='white' />}
          >
            <h3 className="vertical-timeline-element-title">Leadership Course</h3>
            <h4 className="vertical-timeline-element-subtitle">Istanbul Aydin University</h4>
            <p>
              Leadership Topics, Established Relationships With Students
              From Over 10 Different Countries, Explored Turkish Culture
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            // date="2011"
            iconStyle={{ background: '#00c07f', color: '#fff' }}
            icon={<FontAwesomeIcon icon="graduation-cap" size='lg' color='white' />}
          >
            <h3 className="vertical-timeline-element-title">Early Life</h3>
            <h4 className="vertical-timeline-element-subtitle">Exploration</h4>
            <p>
              Various College Classes, Trying New Activities, Desire to Explore
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: '#282828', color: '#fff' }}
            icon={<FontAwesomeIcon icon="star" size='lg' color='white' />}
          />
        </VerticalTimeline>

        <div class="title fontr padding-after">
            <h3><span>Skills and Tools</span></h3>
        </div>

        <SkillBar skills={skills} animationDelay={500} colors={colors} />

        <div class="title fontr padding">
            <h3><span>Other Interests</span></h3>
        </div>

        <div class="contain">

            <div class="flip-row">

              <div class="flip-column">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                    <div class="image-center">
                        <FontAwesomeIcon icon="coffee" size='5x' color='white' />
                    </div>
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
                    <div class="image-center">
                        <FontAwesomeIcon icon="plane-departure" size='5x' color='white' />
                    </div>
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
                    <div class="image-center">
                        <FontAwesomeIcon icon="motorcycle" size='5x' color='white' />
                    </div>
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
                  <div class="image-center">
                      <FontAwesomeIcon icon="music" size='5x' color='white' />
                  </div>
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
                 <div class="image-center">
                     <FontAwesomeIcon icon="book" size='5x' color='white' />
                 </div>
                 </div>
                 <div class="flip-card-back">
                   <p class="vertical-center">Sci-fi, fantasy, and philosophy.</p>
                 </div>
               </div>
             </div>
            </div>

            <div class="flip-column">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                <div class="image-center">
                    <FontAwesomeIcon icon="table-tennis" size='5x' color='white' />
                </div>
                </div>
                <div class="flip-card-back">
                  <p class="vertical-center">Always up for a good game of
                  ping-pong.</p>
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
