import {useDispatch, useSelector} from 'react-redux';
import {resetItem, deleteItem} from '../store/action/ItemActions';
import LoadImage from '../components/LoadImage';
import GetDynamicDimensions from '../hooks/GetDynamicDimensions';
import {useState} from 'react';

export default function AddCartScreen() {
  const addedItems = useSelector(state => state.AddItemReducer.data);
  const [screenSize, getDimension] = GetDynamicDimensions();
  const {dynamicWidth, dynamicHeight} = screenSize;

  const dispatch = useDispatch();
  const deleteHandler = id => {
    dispatch(deleteItem(id));
  };
  const resetHandler = () => {
    dispatch(resetItem());
  };

  console.log(addedItems, 'added items');

  // // multiple item

  // const [cardItem, setCardItem] = useState([]);
  // const count = {};

  // for (let i = 0; i < addedItems.length; i++) {
  //   if (cardItem.includes(addedItems[i]) === true ) {
  //     return;
  //   } else {
  //     setCardItem([...cardItem, addedItems[i]]);
  //   }
  // }

  // for (const item of addedItems) {
  //   if (count[item]) {
  //     count[item] += 1;
  //   } else {
  //     count[item] = 1;
  //   }
  // }

  // console.log(cardItem, "card item");

  // // multiple item

  // console.log(
  //   useSelector(state => state.AddItemReducer),
  //   'data',
  // );

  const styles = {
    container: {
      height: '100%',
      width: dynamicWidth,
      display: 'flex',
      alignItems: 'flex-end',
      flexDirection: 'column',
      padding: '15px',
    },
    card: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'red',
      width: dynamicWidth,
      height: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    button: {
      height: '30px',
      borderRadius: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1
          style={{
            width: '50px',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '30px',
            borderStyle: 'double ',
            backgroundColor: 'greenyellow',
          }}>
          {' '}
          {addedItems && addedItems.length}{' '}
        </h1>
        <button style={styles.button} onClick={() => resetHandler()}>
          Reset Items
        </button>
      </div>
      <div
        style={{
          width: '100%',
          overflowX: 'scroll',
          display: 'flex',
          justifyContent: 'space-between',
          flex: 1,
          backgroundColor: 'yellow',
        }}>
        {/* {cardItem &&
          cardItem.map((item, index) => {
            return (
              <div key={index} style={styles.card}>
                <LoadImage
                  product={item}
                  name={'Delete'}
                  addHandler={deleteHandler}
                  parameter={index}
                  modalMessage={'Deleted'}
                  modalTitle={'Delete'}
                />
              </div>
            );
          })} */}

        {addedItems &&
          addedItems.map((item, index) => {
            return (
              <div key={index} style={styles.card}>
                <LoadImage
                  product={item}
                  name={'Delete'}
                  addHandler={deleteHandler}
                  parameter={index}
                  modalMessage={'Deleted'}
                  modalTitle={'Delete'}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
