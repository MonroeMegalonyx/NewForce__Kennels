/* import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AnimalContext } from "./AnimalProvider";
import { LocationContext } from "../location/LocationProvider";
import { CustomerContext } from "../customer/CustomerProvider";
import { Animal } from "./Animal";
import "./Animal.css";

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext);
  const { locations, getLocations } = useContext(LocationContext);
  const { customers, getCustomers } = useContext(CustomerContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals");
    getLocations().then(getCustomers).then(getAnimals);
  }, []);

  const history = useHistory();

  return (
    <>
      <h2>Animals</h2>
      <button
        onClick={() => {
          history.push("/animals/create");
        }}
      >
        Add Animal
      </button>
      <div className="animals">
        {animals.map((animal) => {
          const owner = customers.find((c) => c.id === animal.customerId);
          const clinic = locations.find((l) => l.id === animal.locationId);

          return (
            <Animal
              key={animal.id}
              location={clinic}
              customer={owner}
              animal={animal}
            />
          );
        })}
      </div>
    </>
  );
}; */

//Change the AnimalCard to display animal names, as hyperlinks. When you click on one animal name, an animal detail component will render.

import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = ({ history }) => {
    const { getAnimals, animals } = useContext(AnimalContext)

    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])
    
    history = useHistory();

    return (
        <>
            <h2>Animals</h2>

            <button onClick={() => history.push("/animals/create")}>
                Add Animals
            </button>
            <div className="animals">
                {
                    animals.map(animal => {
                        return <Animal key={animal.id} animal={animal} />
                    })
                }
            </div>
        </>
    )
}
