const SearchInput = ({ handleSetSearchValue, searchValue }) => {
  return (
    <div>
      <input
        value={searchValue}
        onChange={(e) => handleSetSearchValue(e.target.value)}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
