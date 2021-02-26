// This code imports the main React library, and two functions that it exports.
import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
// Nothing is stored in the context when it's defined. At this point, it's just an empty warehouse waiting to be filled.
export const AnimalContext = createContext();

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return fetch("http://localhost:8088/animals?_expand=location")
      .then((res) => res.json())
      .then(setAnimals);
  };

  const addAnimal = (animalObj) => {
    return fetch("http://localhost:8088/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animalObj),
    }).then(getAnimals);
  };

  /*
				You return a context provider which has the
				`animals` state, `getAnimals` function,
				and the `addAnimal` function as keys. This
				allows any child elements to access them.
		*/
  return (
    <AnimalContext.Provider
      value={{
        animals,
        getAnimals,
        addAnimal,
      }}
    >
      {props.children}
    </AnimalContext.Provider>
  );
};
