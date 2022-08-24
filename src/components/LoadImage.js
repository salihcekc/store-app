import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import GetDynamicDimensions from "../hooks/GetDynamicDimensions";

function LoadImage({ product, addHandler, name }) {
  const [screenSize, getDimension] = GetDynamicDimensions();
  const { dynamicWidth, dynamicHeight } = screenSize;

  const styles = {
    card: {
      display: "flex",
      alignItems: "center",
      margin: "10px",
      // height: "50vh",
      minWidth: "200px",
      maxWidth: "300px",
      minHeight: "250px",
      maxHeight: "400px",
      width: dynamicWidth / 5,
      height: dynamicHeight / 1.5,
      padding: 5,
    },
    image: {
      minWidth: "30px",
      minHeight: "30px",
      maxWidth: "100px",
      maxHeight: "100px",
      width: dynamicWidth / 2,
      height: dynamicHeight / 2,
    },
    info: {
      display: "flex",
      backgroundColor: "#FAF0D7",
      flexDirection: "column",
    },
    cardTitleContainer: {
      flex: 1,
      backgroundColor: "#F4BFBF",
    },
    cardTitle: {
      width: dynamicWidth / 6,
      textAlign: "center",
      display: "-webkit-box !important",
      webkitLineClamp: 2,
      webkitboxOrient: "vertical",
      whiteSpace: "normal",      // whiteSpace: "wrap",
      // textOverflow: "ellipsis",
    },
    cardTextContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    cardText: {
      fontSize: 22,
      textAlign: "center",
    },
    button: {
      width: "100px",
      backgroundColor: "#8CC0DE",
    },
  };

  return (
    <Card style={styles.card}>
      <Card.Img style={styles.image} variant="top" src={product.image} />
      <Card.Body style={styles.info}>
        <div style={styles.cardTitleContainer}>
          <Card.Title style={styles.cardTitle}>{product.title}</Card.Title>
        </div>
        <div style={styles.cardTextContainer}>
          <Card.Text style={styles.cardText}>$ {product.price}</Card.Text>
          <Button
            style={styles.button}
            variant="primary"
            onClick={() => addHandler(product)}
          >
            {name}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default LoadImage;
