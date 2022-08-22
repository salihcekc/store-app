import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { addItem } from "../store/action/ItemActions";
import LoadImage from "../components/LoadImage";
import SpinnerComponent from "../components/SpinnerComponent";
import { useNavigate } from "react-router-dom";

function MainScreen() {
  const navigate = useNavigate();
  const favourite = useSelector((state) => state.AddItemReducer.data);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    download();
  }, []);

  React.useEffect(() => {
    console.log(data, "data");
  }, [data]);

  React.useEffect(() => {
    console.log(favourite, "favourite");
  }, [favourite]);

  const download = async () => {
    setLoading(true);
    await fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
    setLoading(false);
  };

  const addHandler = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div style={styles.container}>
      <div style={styles.spinner}>{loading === true ? <SpinnerComponent /> : null}</div>
      <button onClick={() => navigate("/add-cart")}> Click </button>
      <div style={styles.products}>
        {data && data.length > 0 ? (
          data.map((product, index) => {
            return (
              <div key={index} style={{ marginBottom: "15px" }}>
                <LoadImage
                  product={product}
                  index={index}
                  Handler={addHandler}
                />
              </div>
            );
          })
        ) : (
          <div>{null}</div>
        )}
      </div>
    </div>
  );
}

export default MainScreen;

const styles = {
  container: {
    height: "100%",
    width: "100%",
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
  },
  products: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-between",
    width: "100%",
  },
};
