"use client";

import { useState } from "react";
import { HiOutlineCamera, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-full max-w-[500px]">
      <div className="flex h-16 items-center overflow-hidden rounded-md border border-border transition-colors focus-within:border-primary/60">
        {/* Search button (start in RTL = right side) */}
        <button
          type="button"
          aria-label="جستجو"
          className="flex h-full w-[50px] shrink-0 items-center justify-center bg-primary text-primary-foreground transition-colors hover:bg-primary/90 active:scale-95"
        >
          <CiSearch size={30} />
        </button>

        {/* Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="جستجو در بین ۱۵۰۰ محصول تخفیف‌دار"
          className="h-full flex-1 border-0 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
        />

        {/* Camera button (end in RTL = left side) */}
        <button
          type="button"
          aria-label="جستجوی تصویری"
          className="flex h-full w-12 shrink-0 items-center justify-center pl-2 text-primary transition-transform duration-150 active:scale-[0.85]"
        >
          <HiOutlineCamera size={30} />
        </button>
      </div>
    </div>
  );
};

export default Search;