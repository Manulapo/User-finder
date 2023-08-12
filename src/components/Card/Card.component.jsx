import { Component } from "react";
import "./Card.style.css";

class Card extends Component {
  render() {
    const { name, id, email } = this.props;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set5&size=180x180`}
          alt={name}
          srcset=""
        />
        <h2 key={id}>{name}</h2>
        <p className="email">{email}</p>
      </div>
    );
  }
}

export default Card;
