import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function LoadImage({ product, Handler, name }) {
  return (
    <Card style={styles.card}>
      <Card.Img style={styles.image} variant="top" src={product.image} />
      <Card.Body style={styles.info}>
        <div style={{ flex: 1, backgroundColor: "green" }}>
          <Card.Title style={{ fontSize: 22, textAlign: "center" }}>
            {product.title}
          </Card.Title>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Card.Text
            style={{
              fontSize: 20,
              textAlign: "center",
            }}
          >
            $ {product.price}
          </Card.Text>
          <Button
            style={styles.button}
            variant="primary"
            onClick={() => Handler(product)}
          >
            {name}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default LoadImage;

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    margin: "10px",
    height: "50vh",
    minWidth: "200px",
    maxWidth: "300px",
    width: "22vw",
    padding: 5,
  },
  image: {
    width: "150px",
    height: "150px",
  },
  info: {
    display: "flex",
    backgroundColor: "red",
    flexDirection: "column",
  },
  button: {
    width: "100px",
    backgroundColor: "pink",
  },
};
