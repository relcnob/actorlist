// fetch actors
const database = "actors.json";

fetch(database)
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
  clone
    .querySelector("article")
    .classList.add(actors.movie.replace(/\s+/g, ""));
  clone.querySelector(".actor-card").addEventListener("click", () => {
    document.querySelector(".modal h2").textContent = actors.fullname;
    document.querySelector(".modal p:last-of-type").textContent = actors.movie;
    document.querySelector(".modal").classList.add("modal-visible");
  });

  parent.appendChild(clone);
}

document.querySelector(".modal").addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("modal-visible");
});

document
  .querySelector("nav ul li:nth-of-type(1)")
  .addEventListener("click", sortByMovie);

document
  .querySelector("nav ul li:nth-of-type(2)")
  .addEventListener("click", sortByFirstName);

document
  .querySelector("nav ul li:nth-of-type(3)")
  .addEventListener("click", sortByLastName);

//   MOVIE
function sortByMovie() {
  let actorArray = Array.from(document.querySelector(".actors").children);
  let sortedbyMovie = actorArray.sort((a, b) => {
    if (a.querySelector("p").textContent < b.querySelector("p").textContent)
      return -1;
    else if (
      a.querySelector("p").textContent > b.querySelector("p").textContent
    )
      return 1;
    else return 0;
  });

  document.querySelector(".actors").innerHTML = "";
  sortedbyMovie.forEach(appendElement);
  function appendElement(e) {
    document.querySelector(".actors").appendChild(e);
  }
}

// FIST NAME
function sortByFirstName() {
  let actorArray = Array.from(document.querySelector(".actors").children);
  let sortedbyfirst = actorArray.sort((a, b) => {
    if (a.querySelector("h2").textContent < b.querySelector("h2").textContent)
      return -1;
    else if (
      a.querySelector("h2").textContent > b.querySelector("h2").textContent
    )
      return 1;
    else return 0;
  });

  document.querySelector(".actors").innerHTML = "";
  sortedbyfirst.forEach(appendElement);
  function appendElement(e) {
    document.querySelector(".actors").appendChild(e);
  }
}
// LAST NAME
function sortByLastName() {
  let actorArray = Array.from(document.querySelector(".actors").children);
  let sortedbylast = actorArray.sort((a, b) => {
    if (
      a.querySelector("h2").textContent.split(" ")[
        a.querySelector("h2").textContent.split(" ").length - 1
      ] <
      b.querySelector("h2").textContent.split(" ")[
        b.querySelector("h2").textContent.split(" ").length - 1
      ]
    )
      return -1;
    else if (
      a.querySelector("h2").textContent.split(" ")[
        a.querySelector("h2").textContent.split(" ").length - 1
      ] >
      b.querySelector("h2").textContent.split(" ")[
        b.querySelector("h2").textContent.split(" ").length - 1
      ]
    )
      return 1;
    else return 0;
  });

  document.querySelector(".actors").innerHTML = "";
  sortedbylast.forEach(appendElement);
  function appendElement(e) {
    document.querySelector(".actors").appendChild(e);
  }
}
