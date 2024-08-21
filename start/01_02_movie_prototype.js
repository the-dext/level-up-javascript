// Write your code here
class Movie {
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    getOverview = () => `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
}

let movie = new Movie("wealthify sucks", "chris", "true crime", "2024", "0");
let movie2 = new Movie("Sopra is cancelled", "chris", "thriller", "2024", "3");

console.log(movie.getOverview());
console.log(movie2.getOverview());