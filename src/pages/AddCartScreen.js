import { useDispatch, useSelector } from "react-redux";
import { resetItem, deleteItem } from "../store/action/ItemActions";

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
    <div style={{ height: "100%", width: "100%" }}>
      <div>
        <h1> {addedItems && addedItems.length} </h1>
        <button onClick={() => resetHandler()}>Reset Items</button>
      </div>
      {addedItems &&
        addedItems.map((item, index) => {
          console.log(item.id);
          return (
            <div key={index}>
                <img
                  style={{ height: "90px", width: "90px" }}
                  src={item.image}
                  alt=""
                />
                {item.title}
              <button onClick={() => deleteHandler(item.id)}>
                Delete Item
              </button>
            </div>
          );
        })}
    </div>
  );
}