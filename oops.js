class Movie {
    constructor(title = "", studio = "", rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    getPG(movies = [Movie]) {
      var filteredArray = [];
      movies.forEach((movie) => {
        if (movie.rating === "PG") {
          filteredArray.push(movie);
        }
      });
      return filteredArray;
    }
  }
  
  const singam1 = new Movie("SPD1", "EROS");
  const singam2 = new Movie("SPD2", "EROS");
  const singam3 = new Movie("SPD3", "EROS", "PG13");
  const vikram = new Movie("IR1", "EROS", "R");
  
  console.log(singam1.getPG([singam1, singam2, singam3, vikram]));