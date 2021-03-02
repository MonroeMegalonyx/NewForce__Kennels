import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider";
import { Employee } from "./Employee";
import "./Employee.css";

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees");
    getLocations().then(getEmployees());
  }, []);

  const history = useHistory();

  return (
    <>
      <h2>Employees</h2>
      <button
        onClick={() => {
          history.push("/employees/create");
        }}
      >
        Add Employee
      </button>
      <div className="employees">
        {employees.map((employee) => {
          const clinic = locations.find((l) => l.id === employee.locationId);
          
          return (
            <Employee 
              key={employee.id}
              employee={employee}
              location={clinic}
              />
            );
        })}
      </div>
    </>
  );
};
