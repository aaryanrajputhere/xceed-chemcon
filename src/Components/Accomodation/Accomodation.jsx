import React from "react";
import AccomodationStyle from "./Accomodation.module.css";
export default function Accomodation() {
  return (
    <div className={AccomodationStyle.container}>
      <h1>Accomodation</h1>
      <p>
        The accommodation for the delegates can be arranged in hotels (List will
        be available on website), guest houses and institute hostels subject to
        the availability of the same on request and on payment basis. The
        requirement for the preferred accommodation along with the tariff range
        and single/ double occupancy should be sent to the Organizing Secretary
        well in advance.
      </p>
    </div>
  );
}
