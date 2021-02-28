/* import React from "react"
import "./Location.css"

export const LocationCard = () => (
    <section className="location">
        <h3 className="location__name">Nashville Kennels North</h3>
        <div className="location__address">200 Main Street</div>
    </section>
) */
import React from "react"
import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location__address">{location.address}</address>
    </section>
)