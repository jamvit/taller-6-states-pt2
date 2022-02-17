import React from "react";
import Table from "./Table";

class App extends React.Component {
  state = {
    characters: [
      {
        name: "John",
        job: "Smither",
      },
      {
        name: "Clyde",
        job: "Carpenter",
      },
      {
        name: "Wanda",
        job: "Engineer",
      },
      {
        name: "Claudia",
        job: "Manager",
      },
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((char, i) => {
        return i !== index;
      }),
    });
  };
}

export default App;
