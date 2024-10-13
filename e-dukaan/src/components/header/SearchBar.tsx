import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [, setSearchParams] = useSearchParams();

  const [value, setValue] = useState<string | null>(null);

  function handleOnChange(e: { target: { value: string } }) {
    setValue(() => e.target.value);
  }

  function handleOnBlur() {
    setSearchParams((prev) => {
      prev.set("search_text", value || "");
      return prev;
    });
  }

  function handleOnKeyDown(e: { key: string }) {
    if (e.key === "Enter") {
      setSearchParams((prev) => {
        prev.set("search_text", value || "");
        return prev;
      });
    }
  }

  return (
    <span className="search-input">
      <input
        type="text"
        placeholder="Try Saree, Kurti or Search by Product Code"
        value={value || ""}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onKeyDown={handleOnKeyDown}
      />
    </span>
  );
};

export default SearchBar;
