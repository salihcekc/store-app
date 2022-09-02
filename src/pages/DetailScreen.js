import React from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

function DetailScreen() {
  const [item, setItem] = useState([]);

  const {id} = useParams();
  console.log(id, 'id');

  React.useEffect(() => {
    download();
  }, []);

  const download = async () => {
    await fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
      });
  };

  console.log(item, 'item');

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div>
        <img src={item.image} alt="" style={{height: '400px', width: '400px', margin: 5}} />
      </div>
      <div style={{border: 'solid'}}>
        <ul>
          <h1> {item.title} </h1>
          <li>
            <h4> {item.category} </h4>
          </li>
          <li> price: $ {item.price} </li>
          {/* <li> rating: {item.rating.rate} </li> */}
          <li>
            <p> {item.description} </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DetailScreen;
