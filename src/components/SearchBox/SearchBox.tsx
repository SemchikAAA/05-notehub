import css from "./SearchBox.module.css";
// import { fetchNotes } from "../../services/noteService";
// import { useQuery } from "@tanstack/react-query";
// import type { Notes } from "../../types/note";
// import { useState } from "react";

interface SearchBoxProps {
  value: string;
  onSearch: (value: string) => void;
}

export default function SearchBox({ value, onSearch }: SearchBoxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
    console.log(event.target.value);
  };

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      value={value}
      onChange={handleChange}
    />
  );
}
