import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const EmployeeContext = createContext();

// This component establishes what data can be used.
export const EmployeeProvider = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return fetch("http://localhost:8088/employees")
      .then((res) => res.json())
      .then(setEmployees);
  };

  const addEmployee = (employee) => {
    return fetch("http://localhost:8088/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    }).then((response) => response.json());
  };

  /*
        You return a context provider which has the
        `employees` state, `getEmployees` function,
        and the `addEmployee` function as keys. This
        allows any child elements to access them.
    */
  return (
    <EmployeeContext.Provider
      value={{
        employees,
        getEmployees,
        addEmployee,
        getEmployeeById,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
/* 
Add the following method to the animal provider. It allows any component to get a single animal, but with the location and customer objects embedded inside the response.
*/ 
const getEmployeeById = (id) => { 
  return fetch(`http://localhost:8088/employees/${id}?_expand=location`)
      .then(res => res.json())
}
