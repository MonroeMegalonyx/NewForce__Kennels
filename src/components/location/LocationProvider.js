import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const LocationContext = createContext();

// This component establishes what data can be used.
export const LocationProvider = (props) => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return fetch(
      `http://localhost:8088/locations/?_embed=animals&_embed=employees`
    )
      .then((res) => res.json())
      .then(setLocations);
  };

  const addLocation = (location) => {
    return fetch("http://localhost:8088/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(location),
    })
      .then((response) => response.json())
      .then(setLocations);
  };

  /*
        You return a context provider which has the
        `locations` state, `getLocations` function,
        and the `addLocation` function as keys. This
        allows any child elements to access them.
    */
  return (
    <LocationContext.Provider
      value={{
        locations,
        getLocations,
        addLocation,
        getLocationById,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );

};

/* 
Add the following method to the location provider. When you click the name of a location, you should be taken to a detail view that lists the names of all animals currently being treated, and the names of all employees working there. You can use the json-server feature: _embed.
*/
const getLocationById = (id) => {
  return fetch(
    `http://localhost:8088/locations/${id}?_embed=animals&_embed=employees`
  )
    .then((res) => res.json())
};
