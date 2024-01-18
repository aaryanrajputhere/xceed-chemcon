import React from "react";
import EventsStyle from "./Events.module.css";

export default function Events() {
  return (
    <div className={EventsStyle.container}>
      <h1>Technical Sessions</h1>
      <p>
        Technical Sessions will focus on the theme of the Congress and the
        following broad themes will be covered with interaction through Plenary
        Sessions, Invited Lectures, Paper Presentations and Poster Sessions.
        There will be three best paper awards each in Oral and Poster
        presentations in each session. Award will be given to the top two papers
        presented in each session in both Oral and Poster presentations. The
        following topics but not limited to are to be covered:
      </p>
      <div className={EventsStyle.listContainer}>
        <ul>
          <li>Chemical Process Safety Management</li>
          <li>Novel Separation Techniques</li>
          <li>Sustainable Development</li>
          <li>Energy and Environmental Policy Issues</li>
          <li>Nanotechnology</li>
          <li>Chemical and Fertilizer Technology</li>
          <li>Chemical Engineering in the New Century</li>
          <li>Membrane Separation Processes</li>
          <li>Biochemical and Bioprocessing</li>
          <li>Process Intensification</li>
          <li>Waste Water Treatment</li>
        </ul>
        <ul>
          <li>Green Technology</li>
          <li>New and Renewable Energy</li>
          <li>Hydrocarbon and other fossil fuels</li>
          <li>Modelling, Simulation and Scale-up</li>
          <li>Process Development</li>
          <li>Nuclear and Thermal Power</li>
          <li>Agrochemical Technology</li>
          <li>Mining and Mineral</li>
          <li>Industrial Biotechnology</li>
          <li>Process Systems Engineering</li>
          <li>Solid Waste Management</li>
        </ul>
      </div>
      <h1>Sri Dhirubhai Ambani Commemoration Day</h1>
      <p>
        Shri Dhirubhai Ambani Commemoration day will be celebrated on December
        28, 2024 as a tribute to the great visionary.
      </p>
      <h1>International Symposium</h1>
      <p>
        International Joint Symposiums related to the theme will be held as part
        of CHEMCON 2024.
      </p>
      <h1>Exhibition</h1>
      <p>
        An exhibition of Chemical Engineering and allied businesses including
        safety, technology providers, consultants, institution, tour packages
        and communication, Equipment, Instruments, Books and Journals, etc. is
        proposed during CHEMCON 2024. Interested organizations will be allotted
        space of the following dimensions in the form of exhibition stalls with
        all facilities like furniture, power, etc., at a cost given below:
      </p>
      <table>
        <thead>
          <div className={EventsStyle.tableHead}></div>
          <tr>
            <th>Dimension</th>
            <th className={EventsStyle.rightColumn}>Price in INR</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>6m x 6m (Central Hall)</th>
            <th className={EventsStyle.rightColumn}>100000</th>
          </tr>
          <tr>
            <th>3m x 3m</th>
            <th className={EventsStyle.rightColumn}>30000</th>
          </tr>
          <tr>
            <th>3m x 2m</th>
            <th className={EventsStyle.rightColumn}>25000</th>
          </tr>
        </tbody>
      </table>
      <h1>Quiz Competition</h1>
      <p>
        Quiz Competition will be conducted for the student delegates based on
        GATE 2024 syllabus. The prizes will be distributed to the winners
      </p>
    </div>
  );
}
