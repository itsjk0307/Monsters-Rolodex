import React, { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardLists extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}
export default CardLists;
