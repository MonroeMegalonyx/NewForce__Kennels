import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { LocationContext } from "./LocationProvider"
import { Location } from "./Location"
import "./Location.css"

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()

  }, [])

  const history = useHistory();


  return (
    <>
      <h2>Locations</h2>
      <button
        onClick={() => {
          history.push("/locations/create");
        }}
      >
        Add Location
      </button>
      <div className="location">
        {locations.map((location) => {

          return (
            <Location 
              key={location.id}
              location={location}
              />
              )
        })}      
      </div>
    </>
  )  
}