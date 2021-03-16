import { MovieCard } from "../components/MovieCard";

interface ContentProps {
  movies: Array<MovieProps>;
  selectedGenre: GenreProps;
}

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreProps {
  title: string;
}

export function Content({ movies, selectedGenre }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie: MovieProps) => (
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
              key={movie.Title}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
