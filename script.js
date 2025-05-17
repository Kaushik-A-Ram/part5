// creating the empty array to store the objects from form
const movieDatabase = [];

// movie class
class Movie {
  constructor(id, title, year, rating) {
    // assining the values to the class
    (this.id = id),
      (this.title = title),
      (this.year = year),
      (this.rating = rating);
  }
}

// function to display the movie list
function renderMovieList() {
  const list = document.getElementById("movieList");
  list.innerHTML = "";
  movieDatabase.forEach((movie) => {
    const li = document.createElement("li");
    li.textContent = `${movie.id} - ${movie.title} (${movie.year}) - Rating: ${movie.rating}`;
    list.appendChild(li);
  });
}

// function to render search results
function renderSearchResults(filteredResults) {
  const resultsList = document.getElementById("resultsList");
  resultsList.innerHTML = "";
  filteredResults.forEach((movie) => {
    const li = document.createElement("li");
    li.textContent = `${movie.id} - ${movie.title} (${movie.year}) - Rating: ${movie.rating}`;
    resultsList.appendChild(li);
  });
}

// function to search the database
function searchDatabase() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const filteredResults = movieDatabase.filter((movie) =>
    movie.id.toLowerCase().includes(searchTerm) ||
    movie.title.toLowerCase().includes(searchTerm) ||
    movie.year.toLowerCase().includes(searchTerm) ||
    movie.rating.toLowerCase().includes(searchTerm)
  );
  renderSearchResults(filteredResults);
}

// get the movie details and put into class
const addMovie = (ev) => {
  ev.preventDefault();

  // create new movie instance
  const movie = new Movie(
    document.getElementById("id").value,
    document.getElementById("title").value,
    document.getElementById("year").value,
    document.getElementById("rating").value
  );

  // show added object in console
  console.log("added", movie);

  // push to array called movieDatabase
  movieDatabase.push(movie);

  // render the movie list
  renderMovieList();

  // reset form
  document.querySelector("form").reset();
};

// add event listeners to the buttons
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit").addEventListener("click", addMovie);
  document.getElementById("searchBtn").addEventListener("click", searchDatabase);
});
