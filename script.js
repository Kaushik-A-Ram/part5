// creating the empty array to store the objects from form
const movieDatabase = [];

const addMovie = (ev) => {
    ev.preventDefault();
    let movie = {
        id: document.getElementById('id').value,
        title: document.getElementById('title').value,
        year: document.getElementById('year').value,
        rating: document.getElementById('rating').value
    }

    // show added object in console
    console.log('added', movie);

    // push to array called movieDatabase
    movieDatabase.push(movie);

    // reset form
    document.querySelector('form').reset();
    
}
// saving to localStorage
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', addMovie);
});

