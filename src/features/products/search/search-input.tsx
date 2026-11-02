
import { useId } from "react";
import { Search, X } from "lucide-react";

interface SearchInputProps {
  value: string;
  placeholder: string;
  label: string;
  searchLabel: string;
  clearLabel: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export function SearchInput({
  value,
  placeholder,
  label,
  searchLabel,
  clearLabel,
  onChange,
  onClear,
}: SearchInputProps) {
  const inputId = useId();
// useEffect(() => {
//   setQuery(initialQuery);
// }, [initialQuery]);
  return (
    <div className="relative w-full">
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>

      <input
        id={inputId}
        type="search"
        role="searchbox"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck={false}
        dir="auto"
        className="
          h-11 w-full rounded-md
          border border-input
          bg-card
          ps-11 pe-24
          text-sm text-foreground
          placeholder:text-muted-foreground
          transition-colors
          focus-visible:border-primary
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-ring/30
        "
      />

      <Search
        aria-hidden="true"
        className="
          pointer-events-none
          absolute start-4 top-1/2
          size-4 -translate-y-1/2
          text-muted-foreground
        "
      />

      <div className="
        absolute end-2 top-1/2
        flex -translate-y-1/2 items-center gap-1
      ">
        {value.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            aria-label={clearLabel}
            className="
              rounded-sm p-2
              text-muted-foreground
              hover:text-foreground
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-ring
            "
          >
            <X aria-hidden="true" className="size-4" />
          </button>
        )}

        <button
          type="submit"
          aria-label={searchLabel}
          className="
            rounded-sm bg-primary p-2
            text-primary-foreground
            transition-opacity hover:opacity-90
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-ring
          "
        >
          <Search aria-hidden="true" className="size-4" />
        </button>
      </div>
    </div>
  );
}
