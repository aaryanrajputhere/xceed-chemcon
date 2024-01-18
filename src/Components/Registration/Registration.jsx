import React from "react";
import RegistrationStyle from "./Registration.module.css";
export default function Registration() {
  return (
    <div className={RegistrationStyle.container}>
      <h1>Registration Fee</h1>
      <table>
        <thead>
          <div className={RegistrationStyle.tableHead}></div>
          <tr>
            <th>Categories of Membership</th>
            <th className={RegistrationStyle.rightColumn}>
              Amount in INR (Excluding Taxes)
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>IICHE Member </th>
            <th className={RegistrationStyle.rightColumn}>5000</th>
          </tr>
          <tr>
            <th>Non Member / Industrial Personnel </th>
            <th className={RegistrationStyle.rightColumn}>6200</th>
          </tr>
          <tr>
            <th>Research Scholar / PG Student (IICHE Member) </th>
            <th className={RegistrationStyle.rightColumn}>4500</th>
          </tr>
          <tr>
            <th>UG Student (Student Member / Non Member) </th>
            <th className={RegistrationStyle.rightColumn}>2500</th>
          </tr>
          <tr>
            <th>Research Scholar / PG Student (Non IICHE Member) </th>
            <th className={RegistrationStyle.rightColumn}>5000</th>
          </tr>
          <tr>
            <th>Foreign Delegates (IICHE Member) </th>
            <th className={RegistrationStyle.rightColumn}>USD 250</th>
          </tr>
          <tr>
            <th>Accompanying Spouse (Foreign) (IICHE Member) </th>
            <th className={RegistrationStyle.rightColumn}>USD 250</th>
          </tr>
          <tr>
            <th>Industrial Personnel’s (IICHE Member/ Non IICHE Member) </th>
            <th className={RegistrationStyle.rightColumn}>6500</th>
          </tr>
          <tr>
            <th>Others (IICHE Member/ Non IICHE Member) </th>
            <th className={RegistrationStyle.rightColumn}>3200</th>
          </tr>
          <tr>
            <th>
              Senior Member (Over 65 Years) (IICHE Member/ Non IICHE Member){" "}
            </th>
            <th className={RegistrationStyle.rightColumn}>3200</th>
          </tr>
          <tr>
            <th>
              Accompanying Spouse (India, All Categories) (IICHE Member/ Non
              IICHE Member){" "}
            </th>
            <th className={RegistrationStyle.rightColumn}>2000</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
