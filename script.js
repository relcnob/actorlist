// fetch actors
const dataBase = "actors.json";

fetch(dataBase)
  .then((res) => res.json())
  .then((data) => handleActors(data));

function handleActors(data) {
  data.forEach(displayActors);
}

function displayActors(actors) {
  const parent = document.querySelector(".actors");
  const template = document.querySelector("#actorCard").content;
  const clone = template.cloneNode(true);
  clone.querySelector("h2").textContent = actors.fullname;
  clone.querySelector("p").textContent = actors.movie;
  clone.querySelector(".actor-card").addEventListener("click", () => {
    console.log("clicked a card");
    document.querySelector(".modal h2").textContent = actors.fullname;
    document.querySelector(".modal p:last-of-type").textContent = actors.movie;
    document.querySelector(".modal").classList.add("modal-visible");
  });
  parent.appendChild(clone);
}

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("modal-visible");
});
