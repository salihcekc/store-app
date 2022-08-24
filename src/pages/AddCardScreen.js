import { useDispatch, useSelector } from "react-redux";
import { resetItem, deleteItem } from "../store/action/ItemActions";
// import LoadImage from "../components/LoadImage";

export default function AddCartScreen() {
  const addedItems = useSelector((state) => state.AddItemReducer.data);

  console.log(
    useSelector((state) => state.AddItemReducer),
    "data"
  );

  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteItem(id));
  };
  const resetHandler = () => {
    dispatch(resetItem());
  };

  return (
    <div style={styles.container}>
      <div style={{ width:"100%", display:"flex", justifyContent:"center", alignItems:"center" }} >
        <h1> {addedItems && addedItems.length} </h1>
        <button style={styles.button} onClick={() => resetHandler()}>Reset Items</button>
      </div>
      {addedItems &&
        addedItems.map((item, index) => {
          return (
            // <LoadImage product={item} addHandler={deleteHandler} name={"Delete"} />
            <div key={index} style={styles.card}>
              <img style={styles.image} src={item.image} alt="" />
              {item.title}
              <button style={styles.button} onClick={() => deleteHandler(item.id)}>
                Delete Item
              </button>
            </div>
          );
        })}
    </div>
  );
}

const styles = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    padding:"15px",
  },
  card: {
    display: "flex",
    flexDirection: "row-reverse",
    // backgroundColor: "red",
    width: "30vw",
    height: "10vh",
    justifyContent: "space-between",
    alignItems:"center",
  },
  image: {
    height: "90px",
    width: "90px",
  },
  button: {
    height: "30px",
  },
};
