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
  if (movieDatabase.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No movies in the database.";
    li.style.fontStyle = "italic";
    list.appendChild(li);
  } else {
    movieDatabase.forEach((movie) => {
      const li = document.createElement("li");
      li.textContent = `${movie.id} - ${movie.title} (${movie.year}) - Rating: ${movie.rating}`;
      list.appendChild(li);
    });
  }
}

// function to render search results
function renderSearchResults(filteredResults) {
  const resultsList = document.getElementById("resultsList");
  resultsList.innerHTML = "";
  if (filteredResults.length === 0) {
    const li = document.createElement("li");
    li.textContent = "result: 0";
    li.style.fontStyle = "italic";
    resultsList.appendChild(li);
  } else {
    filteredResults.forEach((movie) => {
      const li = document.createElement("li");
      li.textContent = `${movie.id} - ${movie.title} (${movie.year}) - Rating: ${movie.rating}`;
      resultsList.appendChild(li);
    });
  }
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

// Sort A-Z by Title
function sortAZ() {
  movieDatabase.sort((a, b) => a.title.localeCompare(b.title));
  renderMovieList();
}

// Sort Z-A by Title
function sortZA() {
  movieDatabase.sort((a, b) => b.title.localeCompare(a.title));
  renderMovieList();
}

// Best Movies: Sort by Rating Z-A (highest to lowest)
function sortBestMovies() {
  movieDatabase.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  renderMovieList();
}8

// add event listeners to the buttons
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit").addEventListener("click", addMovie);
  document.getElementById("searchBtn").addEventListener("click", searchDatabase);
  document.getElementById("sortAZ").addEventListener("click", sortAZ);
  document.getElementById("sortZA").addEventListener("click", sortZA);
  document.getElementById("bestMovies").addEventListener("click", sortBestMovies);
  renderMovieList(); // Always show the movie list, even if empty
});
