// creating movie class
class Movie {
  constructor(movieId, title, year, rating) {
    this.movieId = movieId;
    this.title = title;
    this.year = year;
    this.rating = rating;
  }
}


const id = document.getElementById("#id");
const title = document.getElementById("#title");
const year = document.getElementById("#year");
const rating = document.getElementById("#rating");
const form = document.querySelector("#movieForm");

form.addEventListener("submit", e=> {
  e.preventDefault();
  const formData = new FormData(e.target)
  const id = new FormData();
  const title = new FormData();
  const year = new FormData();
  const rating = new FormData();
})