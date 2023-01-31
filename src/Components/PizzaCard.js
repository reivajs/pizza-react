import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { AppContext } from "../Context";
import { useNavigate } from "react-router-dom";

function PizzaCard() {
  const { pizzas } = useContext(AppContext);
  const { agregarCarro } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="pizzas grid-columns-4 p-3">
        {pizzas.map((data) => {
          return (
            <Card  className="cardPizza" key={data.id} style={{ width: "90%" }}>
              <Card.Img className="imgPizza" variant="top" src={data.img} />
              <Card.Body>
                <Card.Title className="text-left text-uppercase fs-4">{data.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <Card.Text className="text-left fs-5 p-2">Ingredientes:</Card.Text>
                <Card.Text></Card.Text>
                <ul className="">
                  {data.ingredients.map((ingredients, index) => {
                    return <li key={index.toString()}>🍕 {ingredients}</li>;
                  })}
                </ul>
              </ListGroup>
              <Card.Text className="cardPrice fw-bold fs-4">${data.price}</Card.Text>
              <Card.Body className="cardBtn">
                <button
                  className="btn btn-info"
                  onClick={() => navigate("/Pizza/" + data.id.toString())}
                >
                  Ver mas 👀
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => agregarCarro(data)}
                >
                  Añadir 🛒
                </button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default PizzaCard;
