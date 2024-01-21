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
      <div>
        <div className={HomeStyle.imgGallery}>
          <h1>Image Gallery</h1>
          <div className={HomeStyle.sliderWrapper}>
            <div className={HomeStyle.slider}>
              <img
                id="slide-1"
                src="./img/side-1.webp"
                alt="slide 1"
                className={HomeStyle.img}
              />

              <img
                id="slide-2"
                src="./img/side-2.webp"
                alt="slide 2"
                className={HomeStyle.img}
              />

              <img
                id="slide-3"
                src="./img/side-3.webp"
                alt="slide 3"
                className={HomeStyle.img}
              />

              <img
                id="slide-4"
                src="./img/main.webp"
                alt="slide 4"
                className={HomeStyle.img}
              />
            </div>
            <div className={HomeStyle.sliderNav}>
              <a href="#slide-1"></a>
              <a href="#slide-2"></a>
              <a href="#slide-3"></a>
              <a href="#slide-4"></a>
            </div>
          </div>
        </div>
      </div>
      <div className={HomeStyle.timelineContainer}>
        <div className={HomeStyle.timeline}>
          <h1>Timeline</h1>
          <div className={HomeStyle.vertLine}></div>
          <div className={HomeStyle.dot1}></div>
          <div className={HomeStyle.dot2}></div>
          <div className={HomeStyle.dot3}></div>
          <div className={HomeStyle.dot4}></div>
          <div className={HomeStyle.eventContainerLeft}>
            <p>May 18, 2024</p>
            <b>
              <p>Last date for receipt of abstract</p>
            </b>
          </div>
          <div className={HomeStyle.eventContainerRight}>
            <p>June 22, 2024</p>
            <b>
              {" "}
              <p>Intimation of acceptance</p>
            </b>
          </div>
          <div className={HomeStyle.eventContainerLeft}>
            <p>July 20, 2024</p>
            <b>
              <p>Last date for submission of full paper</p>
            </b>
          </div>
          <div className={HomeStyle.eventContainerRight}>
            <p>August 31, 2024</p>
            <b>
              {" "}
              <p>Intimation of final acceptance of paper</p>
            </b>
          </div>
        </div>
        <div className={HomeStyle.aboutDoaba}>
          <h1>About Doaba Regional Centre (DRC)</h1>
          <p>
            The Indian Institute of Chemical Engineers (IIChE) is the apex
            professional body of Chemical Engineers in the country instituted in
            the year 1947 and presently has more than 25,000 corporate members
            on its roll. The activities of the Institute are spread across the
            country through its 47 Regional Centres and 186 Student Chapters,
            apart from the HQ located at the Jadavpur University Campus, Kolkata
            The IIChE has been conducting the Associate Membership Examination
            since 1960 and publishes an esteemed quarterly Journal “The Indian
            Chemical Engineer” since 1959..
          </p>
        </div>
      </div>
      <center>
        <h1>Our Events</h1>
      </center>
      <div className={HomeStyle.ourEvents}>
        <div className={HomeStyle.event1}>
          <h3>Technical Sessions</h3>
          <p>
            Technical Sessions will focus on the theme of the Congress and the
            following broad themes will be covered with interaction through
            Plenary Sessions, Invited Lectures, Paper Presentations and Poster
            Sessions. There will be three best paper awards each in Oral and
            Poster presentations in each session. Award will be given to the top
            two papers presented in each session in both Oral and Poster
            presentations. The following topics but not limited to are to be
            covered:
          </p>
          <p>Chemical Process Safety Management</p>
          <p>Novel Separation Techniques</p>
          <p>Sustainable Development</p>
          <p>Energy and Environmental Policy Issues</p>
          <p>Nanotechnology</p>
          <p>Chemical and Fertilizer Technology</p>
          <p>Chemical Engineering in the New Century</p>
          <p>Membrane Separation Processes</p>
          <p>Biochemical and Bioprocessing</p>
          <p>Process Intensification</p>
          <p>Waste Water Treatment</p>
          <p>Green Technology</p>
          <p>New and Renewable Energy</p>
          <p>Hydrocarbon and other fossil fuels</p>
          <p>Modelling, Simulation and Scale-up</p>
          <p>Process Development</p>
          <p>Nuclear and Thermal Power</p>
          <p>Agrochemical Technology</p>
          <p>Mining and Mineral</p>
          <p>Industrial Biotechnology</p>
          <p>Process Systems Engineering</p>
          <p>Solid Waste Management</p>
        </div>
        <div className={HomeStyle.eventSquare}>
          <div className={HomeStyle.event2}>
            <h3>Sri Dhirubhai Ambani Commemoration Day</h3>
            <p>
              Shri Dhirubhai Ambani Commemoration day will be celebrated on
              December 28, 2024 as a tribute to the great visionary.
            </p>
          </div>
          <div className={HomeStyle.event3}>
            <h3>International Symposium</h3>
            <p>
              International Joint Symposiums related to the theme will be held
              as part of CHEMCON 2024.
            </p>
          </div>
          <div className={HomeStyle.event4}>
            <h3>Exhibition</h3>
            <p>
              An exhibition of Chemical Engineering and allied businesses
              including safety, technology providers, consultants, institution,
              tour packages and communication, Equipment, Instruments, Books and
              Journals, etc. is proposed during CHEMCON 2024. Interested
              organizations will be allotted space of the following dimensions
              in the form of exhibition stalls with all facilities like
              furniture, power, etc.
            </p>
          </div>
          <div className={HomeStyle.event5}>
            <h3>Quiz Competition</h3>
            <p>
              Quiz Competition will be conducted for the student delegates based
              on GATE 2024 syllabus. The prizes will be distributed to the
              winners
            </p>
          </div>
        </div>
      </div>
      <div className={HomeStyle.about1}>
        <div className={HomeStyle.aboutNitj}>
          <h1>About NITJ</h1>
          <p>
            Dr. B. R. Ambedkar NIT Jalandhar was established in the year 1987 as
            erstwhile Regional Engineering College and was given the status of
            NIT Jalandhar by the Ministry of Human Resource Development,
            Government of India, New Delhi on October 17, 2002 under the Act of
            Parliament-2007.As an Institute of National importance, NIT
            Jalandhar comprehends its responsibility of providing high quality
            education in Engineering and Technology to produce competent
            technical manpower for the country. The Institute offers UG, PG and
            research programmes with latest research infrastructure in all
            disciplines. Institute holds 46th NIRF ranking and within a ranking
            band of 651-700 amongst Asian Universities.
          </p>
        </div>
        <div className={HomeStyle.aboutDepartment}>
          <h1>About the Department</h1>
          <p>
            The Department (FIST Sponsored) was established in 1990 and has been
            playing a vital role in the development of Chemical Engineering
            education and research by offering B. Tech, M. Tech and PhD
            programmes. Its Alumni are occupying eminent positions in chemical
            industries, research and academic institutions in India and abroad.
            The Department has established state of the art laboratories with
            sophisticated equipment for undergraduate courses and research work.
          </p>
        </div>
      </div>
      <div className={HomeStyle.about2}>
        <div className={HomeStyle.sponsorship}>
          <h1>Sponsorship Rates</h1>
          <p>
            The sponsors are entitled to nominate two complimentary delegates
            along with availing of local hospitality during the congress. They
            are also entitled to put hoardings/ Banners at the suitable
            locations provided by the organizers.
          </p>
          <table>
            <thead>
              <div className={HomeStyle.tableHead1}></div>
              <tr>
                <th>Category</th>
                <th className={HomeStyle.rightColumn}>Price in INR</th>
                <th className={HomeStyle.rightColumn}>Category</th>
                <th className={HomeStyle.rightColumn}>Price in INR</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>Platinum Sponsorship </th>
                <th className={HomeStyle.rightColumn}>3000000 </th>
                <th className={HomeStyle.rightColumn}>Tea during break </th>
                <th className={HomeStyle.rightColumn}>50000</th>
              </tr>
              <tr>
                <th>Gold Sponsorship </th>
                <th className={HomeStyle.rightColumn}>2000000 </th>
                <th className={HomeStyle.rightColumn}>
                  Plenary Lectures (each){" "}
                </th>
                <th className={HomeStyle.rightColumn}>100000</th>
              </tr>
              <tr>
                <th>Silver Sponsorship </th>
                <th className={HomeStyle.rightColumn}>1500000 </th>
                <th className={HomeStyle.rightColumn}>
                  Parallel Sessions (each){" "}
                </th>
                <th className={HomeStyle.rightColumn}>100000</th>
              </tr>

              <tr>
                <th>Delegate Kit </th>
                <th className={HomeStyle.rightColumn}>1000000 </th>
                <th className={HomeStyle.rightColumn}>
                  Poster Sessions (each){" "}
                </th>
                <th className={HomeStyle.rightColumn}>150000</th>
              </tr>
              <tr>
                <th>Lunch (each day) </th>
                <th className={HomeStyle.rightColumn}>500000 </th>
                <th className={HomeStyle.rightColumn}>
                  Cultural Programs (each){" "}
                </th>
                <th className={HomeStyle.rightColumn}>200000</th>
              </tr>
              <tr>
                <th>Dinner (each day) </th>
                <th className={HomeStyle.rightColumn}>500000</th>
                <th className={HomeStyle.rightColumn}>
                  Conference Proceeding{" "}
                </th>
                <th className={HomeStyle.rightColumn}>200000</th>
              </tr>
              <tr>
                <th>High Tea (First day or last day) </th>
                <th className={HomeStyle.rightColumn}>200000 </th>
                <th className={HomeStyle.rightColumn}>
                  Delegate Kit CD/Pen Drive{" "}
                </th>
                <th className={HomeStyle.rightColumn}>100000</th>
              </tr>
              <tr>
                <th>Breakfast (each day) </th>
                <th className={HomeStyle.rightColumn}>200000 </th>
                <th className={HomeStyle.rightColumn}>Banner of each event </th>
                <th className={HomeStyle.rightColumn}>25000</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={HomeStyle.souvenir}>
          <h1>Souvenir</h1>
          <p>
            An informative souvenir will be made available to all the delegates.
            Contributions are solicited to support this mega event,
            CHEMCON-2024, through advertisements. The rates are as follows:
          </p>
          <table>
            <thead>
              <div className={HomeStyle.tableHead2}></div>
              <tr>
                <th>Location </th>
                <th className={HomeStyle.rightColumn}>Price in INR</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>Multicolor Back page </th>
                <th className={HomeStyle.rightColumn}>150000</th>
              </tr>
              <tr>
                <th>Multicolor Back inside gatefold </th>
                <th className={HomeStyle.rightColumn}>100000</th>
              </tr>
              <tr>
                <th>Multicolor Front inside gatefold </th>
                <th className={HomeStyle.rightColumn}>60000 </th>
              </tr>
              <tr>
                <th>Multicolor Full page </th>
                <th className={HomeStyle.rightColumn}>25000 </th>
              </tr>
              <tr>
                <th>Multicolor Half page </th>
                <th className={HomeStyle.rightColumn}>15000</th>
              </tr>
              <tr>
                <th>Black & White Full Page </th>
                <th className={HomeStyle.rightColumn}>15000 </th>
              </tr>
              <tr>
                <th>Black & White half Page </th>
                <th className={HomeStyle.rightColumn}>7500 </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
