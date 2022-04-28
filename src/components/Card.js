import { Spinner } from "./Spinner";

export const Card = ({ dog, updateDog, loading }) => {
  if (loading) return <Spinner />;

  return (
    <>
      <div className="card bounce" onClick={() => updateDog(dog.breed.id)}>
        <img src={dog.image} alt="dog" />

        <p> {dog.breed.name}</p>
      </div>

    </>
  );
};
