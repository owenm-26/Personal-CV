import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import GroupsIcon from '@mui/icons-material/Groups';

function Experience() {
  return (
    <div className="experience">
      {/* Make each experience -- hard coded but want to connect to DB */}
      <VerticalTimeline lineColor="#3e497a">
        {/* Schooling */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2025 "
          iconStyle={{ background: "#3e497a", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Boston University - Boston, MA
          </h3>
          <p>Bachelor's Degree in Computer Science</p>
        </VerticalTimelineElement>

        {/* Job Experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Summer 2023"
          iconStyle={{ background: "#e9d35b", color: "#ffffff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Machine Learning Intern - AtScale
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
          <p>
            Led integration research for Snowpark and Databricks’ ML offerings
            and Refactored AtScale AI-Link codebase, enhancing API accessibility
          </p>
        </VerticalTimelineElement>

        {/* Club work */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="September 2023 - February 2024"
          iconStyle={{ background: "#D64550", color: "#ffffff" }}
          icon={<GroupsIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lead Developer - Hack4Impact
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Boston University
          </h4>
          <p>
            Organized a team of 6 and developed Volunteer tracking software for
            non-profit with 3k+ employees
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2023 - December 2024"
          iconStyle={{ background: "#D64550", color: "#ffffff" }}
          icon={<GroupsIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Program Manager of Finance
          </h3>
          <h4 className="vertical-timeline-element-subtitle">BU Spark!</h4>
          <p>
            Managed $35k+ budget and assisted discussion on distributing to
            bolster BU computer science organizations, leading to a 68% increase
            in council size
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2023 - May 2024"
          iconStyle={{ background: "#D64550", color: "#ffffff" }}
          icon={<GroupsIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Director of Development - Hack4Impact
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Boston University
          </h4>
          <p>
            Lead and organized 10 developers in creating curriculums, projects,
            and interactive lesson plans of frontend and backend frameworks to
            40+ club members on a weekly basis
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="December 2023 - Decemeber 2024"
          iconStyle={{ background: "#D64550", color: "#ffffff" }}
          icon={<GroupsIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Advisor - PMReady
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Boston University
          </h4>
          <p>
            Drove club membership from 0 to 30 by organizing professional events
            and presenting training coursework weekly for the role of Product
            Manager, covering the Product Life Cycle and Figma
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2024 - May 2024"
          iconStyle={{ background: "#e9d35b", color: "#ffffff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hubert H. Humphrey Fellowship
          </h4>
          <p>
            Designed and developed financial tracking web app complete with user
            authentication and interactive dashboards to serve as capstone
            project for 10 month international fellowship
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2024 - December 2024"
          iconStyle={{ background: "#D64550", color: "#ffffff" }}
          icon={<GroupsIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Program Manager of Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">BU Spark!</h4>
          <p>
            Led creation of workshops covering wide collection of technologies
            in Computer Science, from APIs and Machine Learning to
            Containerization and Flutter
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2023 - Present"
          iconStyle={{ background: "#D64550", color: "#ffffff" }}
          icon={<GroupsIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Director of Impact - Hack4Impact
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Boston University
          </h4>
          <p>
          Managed 4 internship teams simultaneously, providing technical advice and ensuring non-profit clients' deadlines are met
          and doubled the size of the program and completely redesigned team structure and timelines to parallel industry and ensure 
          best practices
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2024 - Present"
          iconStyle={{ background: "#e9d35b", color: "#ffffff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">BU Spark!</h4>
          <p>
            Architected and implemented BU Community Service Center portal with
            Next.js + PostgreSQL to serve 17k students, automating service
            applications, event publishing, and hour logging while aggregating
            data for admins.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="December 2024 - Present"
          iconStyle={{ background: "#e9d35b", color: "#ffffff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Cybersecurity Teacher Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Boston University</h4>
          <p>
            Solely responsible for teaching class emerging technologies in Cybersecurity 
            and implementing infrastructure such as Containers in the Cloud and 
            doing so in a cost effective way 
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience