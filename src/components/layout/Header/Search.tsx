"use client";

import { useState } from "react";
import { HiOutlineCamera } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const [value, setValue] = useState("");

  return (
    <div className="min-w-0 flex-1">
      <div className="flex h-12 items-center overflow-hidden rounded-md border border-border transition-colors focus-within:border-primary/60">
        <button
          type="button"
          aria-label="جستجو"
          className="flex h-full w-11 shrink-0 items-center justify-center bg-primary text-primary-foreground transition-colors hover:bg-primary/90 active:scale-95"
        >
          <CiSearch size={26} />
        </button>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="جستجو در بین محصولات..."
          className="h-full min-w-0 flex-1 border-0 bg-transparent px-2 text-xs outline-none placeholder:text-muted-foreground sm:text-sm"
        />

        <button
          type="button"
          aria-label="جستجوی تصویری"
          className="flex h-full w-10 shrink-0 items-center justify-center text-primary transition-transform duration-150 active:scale-[0.85]"
        >
          <HiOutlineCamera size={25} />
        </button>
      </div>
    </div>
  );
};

export default Search;