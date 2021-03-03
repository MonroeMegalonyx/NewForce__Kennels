/* export const Animal = ({ animal, customer, location }) => (
  <section className="animal">
    <h3 className="animal__name">{animal.name}</h3>
    <p className="animal__breed">{animal.breed}</p>
    <address className="location__name">Location: {location.name}</address>
    <p className="customer__name">Customer: {customer.name}</p>
  </section>
); */

//Change the AnimalCard to display animal names, as hyperlinks. When you click on one animal name, an animal detail component will render.

import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const Animal = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">
          <Link to={`/animals/detail/${animal.id}`}>
            { animal.name }
          </Link>
        </h3>
        <div className="animal__breed">{ animal.breed }</div>
    </section>
)