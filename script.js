// fetch actors
const dataBase = "actors.json";

fetch(dataBase)
  .then((res) => res.json())
  .then((data) => handleActors(data));

function handleActors(actors) {
  console.log(actors);
}
