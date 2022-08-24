import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GetDynamicDimensions from '../hooks/GetDynamicDimensions';
import LinesEllipsis from 'react-lines-ellipsis';

function LoadImage({product, addHandler, name}) {
  const [screenSize, getDimension] = GetDynamicDimensions();
  const {dynamicWidth, dynamicHeight} = screenSize;

  const styles = {
    card: {
      display: 'flex',
      alignItems: 'center',
      margin: '10px',
      width: dynamicWidth / 7,
      height: dynamicHeight / 2.5,
      paddingTop: 10,
      padding: 10,
    },
    image: {
      width: dynamicWidth / 9,
      height: dynamicHeight / 6,
    },
  };

  return (
    <Card style={styles.card}>
      <Card.Img style={styles.image} variant="top" src={product.image} />
      <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
        <div style={{flex: 2, textAlign: 'center', paddingTop: 10}}>
          <LinesEllipsis style={{fontSize: 20}} text={product.title} maxLine={3} ellipsis="..." />
        </div>
        <div style={{flex: 1, textAlign: 'center'}}>
          <p style={{fontSize: 20}}>$ {product.price}</p>
          <Button style={{width: 150}} variant="primary" onClick={() => addHandler(product)}>
            {name}
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default LoadImage;
