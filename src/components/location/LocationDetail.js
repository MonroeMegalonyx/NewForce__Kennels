import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import "./Location.css";
import { useParams, useHistory } from "react-router-dom";

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext);

  const [location, setLocation] = useState({});

  const { locationId } = useParams();
  const history = useHistory();

  useEffect(() => {
    console.log("useEffect", locationId);
    getLocationById(locationId).then((response) => {
      setLocation(response);
    });
  }, []);
  
  // Added these lines from the list function to test if map function would work on locations object when I cant get it working in location from GetbyID function
  const { getLocations, locations } = useContext(LocationContext)
  useEffect(()=>{
      getLocations()
  }, [])

  console.log("location", location);

  return (
    <>
      <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">{location.address}</div>
        <div className="location__employees">
          {
            locations.map(location => {
                return <>Hello</>
            })
        }
        </div>
      </section>
    </>
  );
};
