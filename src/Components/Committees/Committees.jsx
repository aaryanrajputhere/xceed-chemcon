import React from "react";
import CommitteesStyle from "./Committees.module.css";
export default function Committees() {
  return (
    <div className={CommitteesStyle.container}>
      <h1>NATIONAL ORGANISING COMMITTEE</h1>
      <div className={CommitteesStyle.committeeMember}>
        <p>
          <b>Patron</b>
        </p>
        <p>Prof. Binod Kumar Kanaujia</p>
        <p>Director, National Institute of Technology Jalandhar</p>
      </div>
      <div className={CommitteesStyle.committeeMember}>
        <p>
          <b>Chairman</b>
        </p>
        <p>Mr. Biswanath Chattopadhyay</p>
        <p>CEO, IVL Dhunseri, Petrochem Industries Ltd, Kolkata</p>
      </div>
      <h1>LOCAL ORGANISING COMMITTEE</h1>
      <div className={CommitteesStyle.committeeMember}>
        <p>
          <b>Prof. M. K. Jha</b>
        </p>
        <p>Chairman Chemcon 2024 and Ex. President IICHE</p>
        <p>National Institute of Technology Jalandhar</p>
      </div>
      <div className={CommitteesStyle.committeeMember}>
        <p>
          <b>Prof. Ajay Bansal</b>
        </p>
        <p>Vice Chairman Chemcon 2024 & National Council member</p>
        <p>National Institute of Technology Jalandhar</p>
      </div>
      <div className={CommitteesStyle.committeeMember}>
        <p>
          <b>Prof. S. Bajpai</b>
        </p>
        <p>Organizing Secretary Chemcon 2024 & Secretary DRC, IICHE</p>
        <p>National Institute of Technology Jalandhar</p>
      </div>
    </div>
  );
}
