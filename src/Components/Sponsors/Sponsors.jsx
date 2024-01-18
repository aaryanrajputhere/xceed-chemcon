import React from "react";
import SponsorsStyle from "./Sponsors.module.css";
export default function Sponsors() {
  return (
    <div className={SponsorsStyle.container}>
      <h1>Sponsorship Rates</h1>
      <p>
        The sponsors are entitled to nominate two complimentary delegates along
        with availing of local hospitality during the congress. They are also
        entitled to put hoardings/ Banners at the suitable locations provided by
        the organizers.
      </p>
      <table>
        <thead>
          <div className={SponsorsStyle.tableHead}></div>
          <tr>
            <th>Category</th>
            <th className={SponsorsStyle.rightColumn}>Price in INR</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Platinum Sponsorship</th>
            <th className={SponsorsStyle.rightColumn}>3000000</th>
          </tr>
          <tr>
            <th>Gold Sponsorship </th>
            <th className={SponsorsStyle.rightColumn}>2000000</th>
          </tr>
          <tr>
            <th>Silver Sponsorship</th>
            <th className={SponsorsStyle.rightColumn}>1500000</th>
          </tr>
          <tr>
            <th>Delegate Kit </th>
            <th className={SponsorsStyle.rightColumn}>1000000</th>
          </tr>
          <tr>
            <th>Lunch (each day) </th>
            <th className={SponsorsStyle.rightColumn}>500000</th>
          </tr>
          <tr>
            <th>Dinner (each day) </th>
            <th className={SponsorsStyle.rightColumn}>500000</th>
          </tr>
          <tr>
            <th>High Tea (First day or last day) </th>
            <th className={SponsorsStyle.rightColumn}>200000</th>
          </tr>
          <tr>
            <th>Breakfast (each day) </th>
            <th className={SponsorsStyle.rightColumn}>200000</th>
          </tr>
          <tr>
            <th>Tea during break </th>
            <th className={SponsorsStyle.rightColumn}>50000</th>
          </tr>
          <tr>
            <th>Plenary Lectures (each) </th>
            <th className={SponsorsStyle.rightColumn}>100000</th>
          </tr>
          <tr>
            <th>Parallel Sessions (each) </th>
            <th className={SponsorsStyle.rightColumn}>50000</th>
          </tr>
          <tr>
            <th>Poster Sessions (each)</th>
            <th className={SponsorsStyle.rightColumn}>150000</th>
          </tr>
          <tr>
            <th>Cultural Programs (each) </th>
            <th className={SponsorsStyle.rightColumn}>200000</th>
          </tr>
          <tr>
            <th>Conference Proceeding </th>
            <th className={SponsorsStyle.rightColumn}>200000</th>
          </tr>
          <tr>
            <th>Delegate Kit CD/Pen Drive </th>
            <th className={SponsorsStyle.rightColumn}>100000</th>
          </tr>
          <tr>
            <th>Banner of each event </th>
            <th className={SponsorsStyle.rightColumn}>25000</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
