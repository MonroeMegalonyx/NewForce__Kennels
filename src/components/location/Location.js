/* export const Location = ({ location }) => (
  <section className="location">
    <h3 className="location__name">{location.name}</h3>
    <address className="location__address">{location.address}</address>
  </section>
); */

//Change the AnimalCard to display animal names, as hyperlinks. When you click on one animal name, an animal detail component will render.

import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const Location = ({ location }) => (
    <section className="location">
        <h3 className="location__name">
          <Link to={`/locations/detail/${location.id}`}>
            { location.name }
          </Link>
        </h3>
        <div className="location__countemployees">{location.employees.length} employees</div>
        <div className="location__countanimals">{location.animals.length} animals</div>
    </section>
)