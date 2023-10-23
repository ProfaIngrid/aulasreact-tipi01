import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api(){
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products?limit=10`)
    .then(response => {
      setUserData(response.data);
    })
    .catch(error => {
      console.error('Erro ao buscar os dados:', error);
    });
  });

    const sPrinc = {
      display: "flex",
      flexFlow: "row wrap"
    }

    const sImg = {
      paddingTop: "1%",
      width: "40%",
      height: "40%",
    }

    const sChild = {
      width: "25%"
    }

  
    return (
      <div style={sPrinc}>
        {
          userData.map(obj => (
            <div style={sChild}>
              <img src={obj.image} style={sImg}/>
              <p>{obj.title}</p>
              <p>R$ {obj.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</p>
            </div>
          ))
          // <img src={userData?.image}/>
          // <h3>{userData?.title}</h3>
          // <p>{userData.price}</p>
        }
      </div>
    )
}

export default Api;