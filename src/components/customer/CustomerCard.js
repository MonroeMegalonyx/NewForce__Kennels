/* import React from "react"
import "./Customer.css"

export const CustomerCard = () => (
    <section className="customer">
        <h3 className="customer__name">Hannah Hall</h3>
        <div className="customer__address">Address: 100 Infinity Way</div>
    </section>
) */

import React from "react"
import "./Customer.css"

export const CustomerCard = ({ customer }) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <address className="customer__address">{customer.address}</address>
    </section>
)