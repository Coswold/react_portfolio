import React, { Component } from "react";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class Main extends Component {
render() {
    return (
      <div>
        <h2>HELLO</h2>
        <p>I'm a software engineer who is passionate about open source education,
            computer science, and helping people find their passion.</p>
        <p>If you'd like to learn more, have a look around.</p>

<Timeline lineColor={'#ddd'}>

    <TimelineItem
      key="001"
      dateText="June 2016"
      dateInnerStyle={{ background: '#61b8ff' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3>Worked as a Systems Analyst</h3>
      <h4>Symetra</h4>
      <p>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
      </p>
    </TimelineItem>

  <TimelineItem
    key="002"
    dateText="May 2016"
    dateInnerStyle={{ background: '#61b8ff' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3>Earned Bachelor's Degree</h3>
    <h4>Washington State University</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>

  <TimelineItem
    key="003"
    dateText="June 2015"
    dateInnerStyle={{ background: '#76bb7f' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3>Studied in Istanbul</h3>
    <h4>Istanbul Aydin University</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
</Timeline>
      </div>
    );
  }
}

export default Main;
