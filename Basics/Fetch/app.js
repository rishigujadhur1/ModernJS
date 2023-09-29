async function logMovies() {
    const response = await fetch('/posts.json');
    const movies = await response.json();
    console.log(movies);
  }

logMovies();