import React, { useEffect, useState } from "react";
import { Error } from "./Error";

const initialBreeds = [
  {
    id: 1,
    name: "Boxer",
  },
  {
    id: 2,
    name: "Husky",
  },
];

export const Select = ({ updateDog }) => {
  const [breeds, setBreeds] = useState(initialBreeds);
  const [error, setError] = useState(null);

  useEffect(() => {
    api().catch((error) => {
      console.log(error);
      setError("Error al cargar las razas");
    });
  }, []);

  const api = async () => {
    const response = await fetch("https://api.thedogapi.com/v1/breeds");
    if (!response.ok) {
      const { url, status, statusText } = response;
      throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
    }
    const jsonData = await response.json();
    // console.log(jsonData);
    setBreeds(jsonData);
  };

  return (
    <>
      <select onChange={(e) => updateDog(e.target.value)}>
        {breeds.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>

      { error && <Error error={error} /> }
      
    </>
  );
};
