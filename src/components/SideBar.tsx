import { memo, useState } from "react";
import { Button } from "./Button";

interface SideBarProps {
  genres: Array<GenreResponseProps>;
  handleGenderId: (id: number) => void;
}

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

function SideBarComponent({ genres, handleGenderId }: SideBarProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre: GenreResponseProps) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleGenderId(genre.id)}
            selected={selectedGenreId === genre.id}
            key={genre.id}
          />
        ))}
      </div>
    </nav>
  );
}

export const SideBar = memo(SideBarComponent, (prevProps, NextProps) => {
  return Object.is(prevProps.genres, NextProps.genres);
});
