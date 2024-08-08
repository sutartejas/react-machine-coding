import React, { useState, useCallback, useEffect } from "react";
import "./index.css";
import SearchInput from "./SearchInput";
import ListItems from "./ListItems";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);

  const handleSetSearchValue = (value) => {
    setSearchValue(value);
  };

  const debounce = (fn, delay) => {
    let timer = null;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };

  const fetchData = useCallback((value) => {
    fetch(`https://dummyjson.com/users/search?q=${value}`)
      .then((res) => res.json())
      .then((res) => setUsers(res.users))
      .catch((error) => {
        console.error("Error fetching users:", error);
        setUsers([]);
      });
  }, []);

  const debouncedFetchData = useCallback(debounce(fetchData, 1000), [
    fetchData,
  ]);

  useEffect(() => {
    debouncedFetchData(searchValue.trim());
  }, [searchValue, debouncedFetchData]);

  return (
    <div className="App">
      <SearchInput
        handleSetSearchValue={handleSetSearchValue}
        searchValue={searchValue}
      />
      <ListItems users={users} />
    </div>
  );
};

export default App;
