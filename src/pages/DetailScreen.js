import React from 'react';
import {useSelector} from 'react-redux';

function DetailScreen() {
  const item = useSelector(state => state.DetailItemReducer.data);
  // console.log(item, "item");
  // console.log(item[0].title);

  return (
    <div style={{ display:"flex", flexDirection:"row", }} >
      <div>
        <img src={item[0].image} alt="" style={{height: '400px', width: '400px', margin:5}} />
      </div>
      <div>
        <ul>
          <h1> {item[0].title} </h1>
          <li><h4> {item[0].category} </h4></li>
          <li> price: $ {item[0].price} </li>
          <li> rating: {item[0].rating.rate} </li>
          <li>
            <p> {item[0].description} </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DetailScreen;
