import { memo, useState } from "react";
import { Button } from "./Button";

interface SideBarProps {
  genres: Array<GenreResponseProps>;
  selectedGenreId: number;
  handleGenderId: (id: number) => void;
}

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

function SideBarComponent({
  genres,
  selectedGenreId,
  handleGenderId,
}: SideBarProps) {
  console.log("selectedGenreId:", selectedGenreId);

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

export const SideBar = memo(SideBarComponent);
