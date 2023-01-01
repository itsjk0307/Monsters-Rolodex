import { useEffect, useState } from "react";
import CardLists from "./Components/card-lists/card-list-component";
import SearchBox from "./Components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [monster, setMonster] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monster);
  console.log(searchField);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonster(users));
  }, []);
  useEffect(() => {
    const newFiltredMonsters = monster.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFiltredMonsters);
  }, [searchField]);

  const onSearchChange = (event) => {
    console.log(event);
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  const filterMonsters = monster.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>{" "}
      <SearchBox
        className="monster-search-box"
        onChangeHandeler={onSearchChange}
        placeholder={"Search Monsters"}
      />
      <CardLists monsters={filteredMonsters} />
    </div>
  );
};

export default App;
