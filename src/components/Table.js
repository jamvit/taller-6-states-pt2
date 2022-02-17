import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class Table extends React.Component {
  render() {
    const { characters } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody characters={characters} />
      </table>
    );
  }
}

export default Table;
