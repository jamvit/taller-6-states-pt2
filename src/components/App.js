import React from "react";
import Table from "./Table";
import Form from "./Form";

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

  addCharacter = (character) => {
    this.setState({
      characters: [...this.state.characters, character],
    });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="cointainer">
        <Table characters={characters} removeCharacter={this.removeCharacter} />
        <Form addCharacter={this.addCharacter} />
      </div>
    );
  }
}

export default App;
