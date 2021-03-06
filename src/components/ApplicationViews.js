import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
//import { LocationCard } from "./location/LocationCard";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { LocationForm } from "./location/LocationForm";
import { LocationDetail } from "./location/LocationDetail";
//import { AnimalCard } from "./animal/AnimalCard";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { AnimalForm } from "./animal/AnimalForm";
import { AnimalDetail } from "./animal/AnimalDetail";
//import { CustomerCard } from "./customer/CustomerCard";
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
//import { EmployeeCard } from "./employee/EmployeeCard";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm";
import { EmployeeDetail } from "./employee/EmployeeDetail";


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
        <Route exact path="/locations/create">
          <LocationForm />
        </Route>
        <Route exact path="/locations/detail/:locationId(\d+)">
          <LocationDetail />
        </Route>
      </LocationProvider>

      {/* Render the animal list when http://localhost:3000/animals */}
      {/* <AnimalProvider>
        <Route exact path="/animals">
          <AnimalList />
        </Route>
      </AnimalProvider> */}
      
      {/* Render the animal form when http://localhost:3000/animals/animals */}
      <AnimalProvider>
        <CustomerProvider>
          <LocationProvider>
            <Route exact path="/animals">
               <AnimalList />
            </Route>
            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>
            <Route exact path="/animals/detail/:animalId(\d+)">
              <AnimalDetail />
            </Route>
          </LocationProvider>
        </CustomerProvider>
      </AnimalProvider>

      {/* Render the animal list when http://localhost:3000/customers */}
      <CustomerProvider>
        <Route exact path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      {/* Render the animal list when http://localhost:3000/employees */}
      <EmployeeProvider>
        <LocationProvider>
          <Route exact path="/employees">
            <EmployeeList />
          </Route>
          <Route exact path="/employees/create">
            <EmployeeForm />
          </Route>
          <Route exact path="/employees/detail/:employeeId(\d+)">
            <EmployeeDetail />
          </Route>
        </LocationProvider>
      </EmployeeProvider>
    </>
  );
};
