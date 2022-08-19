import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function LoadImage({ product, addHandler }) {
  return (
    <div style={{ height: "100%" }}>
      <Card style={styles.card}>
        <Card.Img style={styles.image} variant="top" src={product.image} />
        <Card.Body style={styles.info}>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>$ {product.price}</Card.Text>
          <Button
            style={styles.button}
            variant="primary"
            onClick={() => addHandler(product)}
          >
            Add
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoadImage;

const styles = {
  container: {},
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "red",
    margin: "10px",
    height: "100%",
    width: "200px",
  },
  image: {
    width: "150px",
    height: "150px",
    marginTop: "10px",
    marginLeft: "10px",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  button: {
    width: "100px",
    marginBottom: "15px",
  },
};
