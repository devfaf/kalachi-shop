"use client";

import { useState } from "react";

type AppInputProps = {
  placeholder?: string;
  buttonText?: string;
  className?: string;
  onSubmit?: (value: string) => void;
};

const AppInput = ({
  placeholder,
  buttonText = "ثبت",
  className = "",
  onSubmit,
}: AppInputProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full max-w-[420px] items-center gap-2 ${className}`}
    >
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        placeholder={placeholder}
        className="h-10 flex-1 rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50"
      />

      <button
        type="submit"
        className="h-10 min-w-[100px] shrink-0 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default AppInput;