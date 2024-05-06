import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import GroupsIcon from '@mui/icons-material/Groups';

function Experience() {
  return (
    <div className='experience'>
      {/* Make each experience -- hard coded but want to connect to DB */}
      <VerticalTimeline lineColor='#3e497a'>
        {/* Schooling */}
        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2022 - present '
        iconStyle={{background: "#3e497a", color: "#ffffff"}}
        icon={<SchoolIcon/>}
        >
          <h3 className='vertical-timeline-element-title' >Boston University - Boston, MA</h3>
          <p>Bachelor's Degree in Computer Science, Minor in Data Science</p>
        </VerticalTimelineElement>

        {/* Job Experience */}
        <VerticalTimelineElement 
        className='vertical-timeline-element--work' 
        date='Summer 2023'
        iconStyle={{background: "#e9d35b", color: "#ffffff"}}
        icon={<WorkIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>Machine Learning Intern - AtScale</h3>
          <h4 className='vertical-timeline-element-subtitle'>Boston, MA</h4>
          <p>Led integration research for Snowpark and Databricks’ ML offerings and Refactored AtScale AI-Link codebase, enhancing API accessibility</p>
        </VerticalTimelineElement>

        {/* Club work */}
        <VerticalTimelineElement 
        className='vertical-timeline-element--work' 
        date='January 2023 - Current'
        iconStyle={{background: "#D64550", color: "#ffffff"}}
        icon={<GroupsIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>Lead Developer - Hack4Impact</h3>
          <h4 className='vertical-timeline-element-subtitle'>Boston University</h4>
          <p>Organized a team of 6 and developed Volunteer tracking software for non-profit with 3k+ employees</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--work' 
        date='January 2023 - Current'
        iconStyle={{background: "#D64550", color: "#ffffff"}}
        icon={<GroupsIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>Program Manager</h3>
          <h4 className='vertical-timeline-element-subtitle'>BU Spark!</h4>
          <p>Managed $35k+ budget and assisted discussion on distributing to bolster BU computer science organizations, leading to a 68% increase in council size</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--work' 
        date='January 2023 - Current'
        iconStyle={{background: "#D64550", color: "#ffffff"}}
        icon={<GroupsIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>Director of Development - Hack4Impact</h3>
          <h4 className='vertical-timeline-element-subtitle'>Boston University</h4>
          <p>Lead and organized 10 developers in creating curriculums, projects, and interactive lesson plans of frontend and backend frameworks to 40+ club members on a weekly basis</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--work' 
        date='January 2023 - Current'
        iconStyle={{background: "#D64550", color: "#ffffff"}}
        icon={<GroupsIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>Senior Advisor - PMReady</h3>
          <h4 className='vertical-timeline-element-subtitle'>Boston University</h4>
          <p>Drove club membership from 0 to 30 by organizing professional events and presenting training coursework weekly for the role of Product Manager, covering the Product Life Cycle and Figma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--work' 
        date='May 2024 - June 2024'
        iconStyle={{background: "#D64550", color: "#ffffff"}}
        icon={<WorkIcon/>}
        >
          <h3 className='vertical-timeline-element-title'>Software Engineer Intern</h3>
          <h4 className='vertical-timeline-element-subtitle'>BU Spark!</h4>
          <p>To be determined...</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
      </div>
  )
}

export default Experience