const getDog = async (breedID) => {
  
  const url = breedID === 0 || !breedID 
  ? "https://api.thedogapi.com/v1/images/search" 
  : `https://api.thedogapi.com/v1/images/search?breed_ids=${breedID}`
  

  const response = await fetch(url);
  if (!response.ok) {
    const { url, status, statusText } = response;
    throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
  }

  const [data] = await response.json();

  let { url: image, breeds: [breed] } = data;

  if(!breed) {
    breed = { 
      id : 0,
      name : "random"
    }
  }
  const dog = {
    image,
    breed
  }
  
  return dog
};

export default getDog;
