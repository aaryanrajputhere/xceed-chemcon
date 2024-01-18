import React from "react";
import { Link } from "react-router-dom";

import HeaderStyle from "./Header.module.css";
export default function Header() {
  return (
    <div>
      <header className={HeaderStyle.headerContainer}>
        <nav>
          <ul className={HeaderStyle.contact}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className={HeaderStyle.icon}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              ></path>
            </svg>
            <a href="mailto:+91-9888895253">+91-9888895253</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className={HeaderStyle.icon}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              ></path>
            </svg>
            <a href="mailto:chemcon2024@gmail.com">chemcon2024@gmail.com</a>
          </ul>
        </nav>
        <nav>
          <ul className={HeaderStyle.pages}>
            <Link className={HeaderStyle.apages} to="/">
              Home
            </Link>
            <Link className={HeaderStyle.apages} to="/events">
              Events
            </Link>
            <Link className={HeaderStyle.apages} to="sponsors">
              Sponsors
            </Link>
            <Link className={HeaderStyle.apages} to="committees">
              Committees
            </Link>
            <Link className={HeaderStyle.apages} to="location">
              Location
            </Link>
            <Link className={HeaderStyle.apages} to="accomodation">
              Accommodation
            </Link>
            <Link className={HeaderStyle.apages} to="souvenir">
              Souvenir
            </Link>
            <Link className={HeaderStyle.apages} to="registration">
              Registration Fees
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}
