import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
//import { LocationCard } from "./location/LocationCard";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
//import { AnimalCard } from "./animal/AnimalCard";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
//import { CustomerCard } from "./customer/CustomerCard";
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
//import { EmployeeCard } from "./employee/EmployeeCard";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";


export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/locations */}
      <LocationProvider>
      <Route exact path="/locations">
        <LocationList />
      </Route>
    </LocationProvider>

      {/* Render the animal list when http://localhost:3000/animals */}
      {/* <AnimalProvider>
        <Route exact path="/animals">
          <AnimalList />
        </Route>
      </AnimalProvider> */}
      
      {/* Render the animal form when http://localhost:3000/animals/create */}
      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route exact path="/animals">
              <AnimalList />
            </Route>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      {/* Render the animal list when http://localhost:3000/customers */}
      <CustomerProvider>
        <Route exact path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      {/* Render the animal list when http://localhost:3000/employees */}
      <EmployeeProvider>
      <Route exact path="/employees">
        <EmployeeList />
      </Route>
    </EmployeeProvider>
    </>
  );
};
