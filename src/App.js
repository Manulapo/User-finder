import { Component } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const App = () =>{

//   return (

//   )
// }

class App extends Component {
  constructor() {
    super();
    // STATE
    this.state = {
      users: [],
      searchField: "",
    };
  }

  // COMPONENT DI DMOUNT - runs after the component is mounted (ONLY once in a component life)
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(() => {
          return { users };
        })
      );
    console.log("recieved data");
  }

  // PlayGround -----------------

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { users, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredUser = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <div className="appTitle">User Finder</div>
        <SearchBox value={searchField} onChangeHandler={onSearchChange} className={"search-box"}/>
        <CardList users={filteredUser} />
      </div>
    );
  }
}

export default App;
