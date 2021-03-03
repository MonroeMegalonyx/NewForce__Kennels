/* export const Employee = ({ employee, location }) => (
  <section className="employee">
    <h3 className="employee__name">{employee.name}</h3>
    <address className="location__name">Location: {location.name}</address>
  </section>
); */

import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"

export const Employee = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">
          <Link to={`/employees/detail/${employee.id}`}>
            { employee.name }
          </Link>
        </h3>
    </section>
)