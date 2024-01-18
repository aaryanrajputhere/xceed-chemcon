import React from "react";
import FooterStyle from "./Footer.module.css";
export default function Footer() {
  return (
    <div>
      <footer className={FooterStyle.footerContainer}>
        <div className={FooterStyle.imgContainer}>
          <div className={FooterStyle.gradient}></div>
          <img src="./img/side-1.webp" alt="chemcon img 1" />
        </div>
        <div className={FooterStyle.contactUs}>
          <h1>Contact Us</h1>
          <p>Prof. S. Bajpai</p>
          <p>Organizing Secretary, CHEMCON-2024</p>
          <p>NIT Jalandhar</p>
          <p>Phone:9888895253</p>
          <p>Email: chemcon2024@gmail.com</p>
          <p>Website: www.chemcon2024.com</p>
        </div>
      </footer>
    </div>
  );
}
