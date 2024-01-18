import React from "react";
import SouvenirStyle from "./Souvenir.module.css";
export default function Souvenir() {
  return (
    <div className={SouvenirStyle.container}>
      <h1>Souvenir</h1>
      <p>
        An informative souvenir will be made available to all the delegates.
        Contributions are solicited to support this mega event, CHEMCON-2024,
        through advertisements. The rates are as follows:
      </p>
      <table>
        <thead>
          <div className={SouvenirStyle.tableHead}></div>
          <tr>
            <th>Location</th>
            <th className={SouvenirStyle.rightColumn}>Price in INR</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Multicolor Back page </th>
            <th className={SouvenirStyle.rightColumn}>150000</th>
          </tr>
          <tr>
            <th>Multicolor Back inside gatefold </th>
            <th className={SouvenirStyle.rightColumn}>100000</th>
          </tr>
          <tr>
            <th>Multicolor Front inside gatefold </th>
            <th className={SouvenirStyle.rightColumn}>60000</th>
          </tr>
          <tr>
            <th>Multicolor Full page </th>
            <th className={SouvenirStyle.rightColumn}>25000</th>
          </tr>
          <tr>
            <th>Multicolor Half page </th>
            <th className={SouvenirStyle.rightColumn}>15000</th>
          </tr>
          <tr>
            <th>Black & White Full Page </th>
            <th className={SouvenirStyle.rightColumn}>15000</th>
          </tr>
          <tr>
            <th>Black & White half Page </th>
            <th className={SouvenirStyle.rightColumn}>7500</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
