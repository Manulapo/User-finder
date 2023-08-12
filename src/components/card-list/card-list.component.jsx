import { Component } from "react";

import "./card-list.styles.css";
import Card from "../Card/Card.component";

class CardList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="card-list">
        {users.map((user) => {
          const { email, id, name } = user;
          return <Card email={email} id={id} name={name} />;
        })}
      </div>
    );
  }
}

export default CardList;
