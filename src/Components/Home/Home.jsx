import React from "react";
import HomeStyle from "./Home.module.css";
export default function Home() {
  return (
    <div className={HomeStyle.container}>
      <div className={HomeStyle.hero}>
        <div className={HomeStyle.heroTextContainer}>
          <h1>
            <b>Indian Chemical Engineering Congress</b>
          </h1>

          <h2>CHEMCON 2024</h2>
          <p>
            Role of Chemical Engineering towards Sustainable Development and
            Atmanirbhar bharat
          </p>
          <p className={HomeStyle.dateOfEvent}>December 27-30, 2024</p>
          <p>Organized by</p>
          <b>
            <p>Indian Institute of Chemical Engineers</p>
            <p>Doaba Regional Centre</p>
            <p>NIT Jalandhar</p>
          </b>

          <div className={HomeStyle.logoContainer}>
            <div className={HomeStyle.IIChE}>
              <p>77th Annual Session</p>
              <img
                src="./img/IIChE.webp"
                alt="IIChE Logo"
                className={HomeStyle.logo}
              />
              <b>
                <p className={HomeStyle.institutionName}>
                  Indian Institute Of Chemical Engineers
                </p>
              </b>
            </div>
            <div className={HomeStyle.Nitj}>
              <p>Organized At</p>
              <img
                src="./img/Nitj.webp"
                alt="Nitj Logo"
                className={HomeStyle.logo}
              />
              <b>
                <p className={HomeStyle.institutionName}>
                  Dr. B R Ambedkar National Institute of Technology, Jalandhar
                </p>
              </b>
            </div>
          </div>
          <a className={HomeStyle.registerButton}>Register</a>
        </div>

        <div className={HomeStyle.heroImgsContainer}>
          <div className={HomeStyle.heroCoverContainer}>
            <div className={HomeStyle.heroCover1}></div>
            <div className={HomeStyle.heroCover2}></div>
            <div className={HomeStyle.heroCover3}></div>
            <div className={HomeStyle.heroCover4}></div>
          </div>
          <img
            className={HomeStyle.heroImg1}
            src="./img/side-1.webp"
            alt="chemcon img 1"
          />
          <img
            className={HomeStyle.heroImg2}
            src="./img/side-2.webp"
            alt="chemcon img 2"
          />
          <img
            className={HomeStyle.heroImg3}
            src="./img/side-3.webp"
            alt="chemcon img 3"
          />
          <img
            className={HomeStyle.heroImg4}
            src="./img/main.webp"
            alt="chemcon img main"
          />
        </div>
      </div>
      <div className={HomeStyle.infoContainer}>
        <div className={HomeStyle.info}>
          <div className={HomeStyle.chemcon}>
            <h1>CHEMCON 2024</h1>
            <p>
              CHEMCON 2024, the 77th Annual Session of the Indian Institute of
              Chemical Engineers will be held during December 27-30, 2024 at NIT
              Jalandhar. The annual technical jamboree of IIChE, CHEMCON,
              continues to encourage academic activities to help students as
              well as teachers to continuously develop their skills to meet the
              demands of the present society. CHEMCON 2024 also brings together
              stakeholders of Chemical Engineering profession, researchers and
              industrialists to discuss current trends and future developments
              in the field of Chemical Engineering. The theme of CHEMCON 2024 is
              “Role of Chemical Engineering towards sustainable development and
              Atmanirbhar bharat”
            </p>
          </div>
          <div className={HomeStyle.aboutIIChE}>
            <h1>About IICHE</h1>
            <p>
              The Indian Institute of Chemical Engineers (IIChE) is the apex
              professional body of Chemical Engineers in the country instituted
              in the year 1947 and presently has more than 25,000 corporate
              members on its roll. The activities of the Institute are spread
              across the country through its 47 Regional Centres and 186 Student
              Chapters, apart from the HQ located at the Jadavpur University
              Campus, Kolkata The IIChE has been conducting the Associate
              Membership Examination since 1960 and publishes an esteemed
              quarterly Journal “The Indian Chemical Engineer” since 1959..
            </p>
          </div>
        </div>
        <div className={HomeStyle.newsContainer}>
          <h1>News</h1>
          <div className={HomeStyle.news}>
            <div className={HomeStyle.news1Container}>
              <div className={HomeStyle.news1}>
                <h3>Call for Papers</h3>
                <p>
                  The authors are requested to submit abstract not exceeding 300
                  words of the original research work or the critical reviews
                  for presentation and publication typed in “Times New Roman”
                  with “1.5” line spacing and 10 font size to the Organizing
                  Secretary, CHEMCON 2024. Camera-ready full paper as soft copy
                  through email/Google form will be required to be submitted
                  after acceptance of the abstract of the paper. IIChE reserves
                  the right to publish abstracts and full papers submitted for
                  CHEMCON 2024
                </p>
              </div>
            </div>
            <div className={HomeStyle.news1Container}>
              <div className={HomeStyle.news1}>
                <h3>Call for Sponsors</h3>
                <p>
                  The sponsors are entitled to nominate two complimentary
                  delegates along with availing of local hospitality during the
                  congress. They are also entitled to put hoardings/ Banners at
                  the suitable locations provided by the organizers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
