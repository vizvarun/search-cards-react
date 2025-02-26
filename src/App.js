import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <>
        <div className="App">
          <h1 className="heroText">Monsters Rolodex</h1>
          <SearchBox
            placeholder="search monsters"
            handleChange={this.handleChange}
          />
          <div style={{ marginBottom: "20px" }} />
          <CardList monsters={filteredMonsters} />
          <div style={{ marginBottom: "20px" }} />
        </div>
      </>
    );
  }
}

export default App;
