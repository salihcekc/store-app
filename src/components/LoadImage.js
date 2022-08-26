import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GetDynamicDimensions from '../hooks/GetDynamicDimensions';
import LinesEllipsis from 'react-lines-ellipsis';
import ModalComponent from './ModalComponent';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux"
import { Details } from "../store/action/DetailItemAction"

function LoadImage({product, addHandler, name, parameter, modalMessage, modalTitle}) {
  const [screenSize, getDimension] = GetDynamicDimensions();
  const {dynamicWidth, dynamicHeight} = screenSize;
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ItemOfDetails = (product) => {
    dispatch(Details(product));
  }

  const styles = {
    card: {
      display: 'flex',
      alignItems: 'center',
      margin: '10px',
      width: dynamicWidth / 7,
      height: dynamicHeight / 2,
      paddingTop: 10,
      padding: 10,
    },
    image: {
      width: dynamicWidth / 9,
      height: dynamicHeight / 6,
    },
  };

  return (
    <div>
      <div>
        <ModalComponent title={modalTitle} show={show} setShow={setShow} message={message} />
      </div>
      <Card style={styles.card}>
        <Card.Img
          onClick={() => {
            ItemOfDetails(product);
            navigate('/details');
          }}
          style={styles.image}
          variant="top"
          src={product.image}
        />
        <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
          <div style={{flex: 2, textAlign: 'center', paddingTop: 10}}>
            <LinesEllipsis style={{fontSize: 20}} text={product.title} maxLine={3} ellipsis="..." />
          </div>
          <div style={{flex: 1, textAlign: 'center'}}>
            <p style={{fontSize: 20}}>$ {product.price}</p>
            <Button
              style={{width: 150}}
              variant="primary"
              onClick={() => {
                addHandler(parameter);
                setMessage(modalMessage);
                setShow(true);
              }}>
              {name}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default LoadImage;
