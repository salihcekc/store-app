import { useDispatch, useSelector } from "react-redux";

import React, { useState } from "react";

import { addItem } from "../store/action/ItemActions";

import LoadImage from "../components/LoadImage";
import SpinnerComponent from "../components/SpinnerComponent";

function MainScreen() {
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
      <div>{loading === true ? <SpinnerComponent /> : null}</div>
      <div style={styles.products}>
        {data && data.length > 0 ? (
          data.map((product, index) => {
            return (
              <div key={index}>
                <LoadImage
                  product={product}
                  index={index}
                  addHandler={addHandler}
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
  products: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
};
