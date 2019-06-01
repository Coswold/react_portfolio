import React, { Component } from "react";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Main extends Component {
render() {
    return (
      <div>
        <div class="topic bgr">
            <h2>CONNOR OSWOLD</h2>
            <h3>Software Engineer in San Francisco</h3>
            <p>Passionate about open source education, machine learning, and
            computer science. I like to write on Medium about what I learn,
            build applications to help others learn, and contribute to projects
            that will make the world a cooler place.</p>
            <p>If you'd like to learn more, have a look around.</p>
        </div>

        <div class="title fontr">
            <h3><span>Skills and Interests</span></h3>
        </div>

        <div class="title fontr">
            <h3><span>Experiences and Accomplishments</span></h3>
        </div>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2016"
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

      </div>
    );
  }
}

export default Main;
