import {useDispatch, useSelector} from 'react-redux';
import {resetItem, deleteItem} from '../store/action/ItemActions';
import LoadImage from '../components/LoadImage';
import GetDynamicDimensions from '../hooks/GetDynamicDimensions';

export default function AddCartScreen() {
  const addedItems = useSelector(state => state.AddItemReducer.data);
  const [screenSize, getDimension] = GetDynamicDimensions();
  const {dynamicWidth, dynamicHeight} = screenSize;

  console.log(
    useSelector(state => state.AddItemReducer),
    'data',
  );

  const dispatch = useDispatch();
  const deleteHandler = id => {
    dispatch(deleteItem(id));
  };
  const resetHandler = () => {
    dispatch(resetItem());
  };
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
      <div style={{width: '100%', overflowX: 'scroll', display: 'flex', justifyContent: 'space-between', flex:1, backgroundColor:"yellow"}}>
        {addedItems &&
          addedItems.map((item, index) => {
            console.log(index);
            return (
              // <LoadImage product={item} addHandler={deleteHandler} name={"Delete"} />
              <div key={index} style={styles.card}>
                <LoadImage
                  product={item}
                  name={'Delete'}
                  addHandler={deleteHandler}
                  parameter={index}
                  modalMessage={'Deleted'}
                  modalTitle={'Delete'}
                /> 
                {/* <img style={styles.image} src={item.image} alt="" />
              {item.title}
              <button style={styles.button} onClick={() => deleteHandler(item.id)}>
                Delete Item
              </button> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}
