import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GetDynamicDimensions from '../hooks/GetDynamicDimensions';
import LinesEllipsis from 'react-lines-ellipsis';
import ModalComponent from './ModalComponent';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Details} from '../store/action/DetailItemAction';
import {useMediaQuery} from 'react-responsive';

function LoadImage({product, addHandler, name, parameter, modalMessage, modalTitle}) {
  const [screenSize, getDimension] = GetDynamicDimensions();
  const {dynamicWidth, dynamicHeight} = screenSize;
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isTablet = useMediaQuery({query: '(min-width: 750px)'});
  const isMobile = useMediaQuery({query: '(max-width: 500px)'});

  const ItemOfDetails = product => {
    dispatch(Details(product));
  };

  const styles = {
    cardDesktopOrLaptop: {
      display: 'flex',
      alignItems: 'center',
      margin: '10px',
      width: dynamicWidth / 7,
      height: dynamicHeight / 2,
      paddingTop: 10,
      padding: 10,
    },
    cardTablet: {
      display: 'flex',
      alignItems: 'center',
      margin: '5px',
      width: dynamicWidth / 4,
      height: dynamicHeight / 2,
      paddingTop: 10,
      padding: 7,
    },
    cardMobile: {
      display: 'flex',
      alignItems: 'center',
      margin: '10px',
      width: dynamicWidth / 2,
      height: dynamicHeight / 2,
      paddingTop: 10,
      padding: 10,
    },
    imageDesktopOrLaptop: {
      width: dynamicWidth / 9,
      height: dynamicHeight / 6,
    },
    imageTablet: {
      width: dynamicWidth / 9,
      height: dynamicHeight / 6,
    },
    imageMobile: {
      width: dynamicWidth / 4,
      height: dynamicHeight / 7,
    },
  };

  return (
    <div>
      <div>
        <ModalComponent title={modalTitle} show={show} setShow={setShow} message={message} />
      </div>
      <Card style={isDesktopOrLaptop ? styles.cardDesktopOrLaptop : (isTablet ? styles.cardTablet : (isMobile ? styles.cardMobile : null))}>
        <Card.Img
          onClick={() => {
            navigate(`/detail/${product.id}`);
          }}
          style={isDesktopOrLaptop ? styles.imageDesktopOrLaptop : (isTablet ? styles.imageTablet : (isMobile ? styles.imageMobile : null))}
          // style={styles.image}
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
