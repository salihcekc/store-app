import { useDispatch, useSelector } from "react-redux";
import { resetItem, deleteItem } from "../store/action/ItemActions";

export default function AddCartScreen() {
  const addedItems = useSelector((state) => state.AddItemReducer.data);

  console.log(useSelector((state) => state.AddItemReducer));
  
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteItem(id));
  };
  const resetHandler = () => {
    dispatch(resetItem());
  };

  return (
    <div style={{ height:"88vh", width:"100vw" }}>
      <h1> {addedItems && addedItems.length} </h1>
      {addedItems &&
        addedItems.map((item) => {
          console.log(item.id);
          return (
            <div>
              <img
                style={{ height: "90px", width: "90px" }}
                src={item.image}
                alt=""
              />
              <button onClick={deleteHandler}>Delete Item</button>
            </div>
          );
        })}
      <div>
        <button onClick={resetHandler}>Reset Items</button>
      </div>
    </div>
  );
}
