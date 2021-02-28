/* import React from "react"
import "./Employee.css"

export const EmployeeCard = () => (
    <section className="employee">
        <h3 className="employee__name">Emma Beaton</h3>
        <div className="employee__location">Nashville Kennels North</div>
    </section>
) */

import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <address className="location__address">{employee.location.name}</address>
    </section>
)