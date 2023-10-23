import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Api(){
    const [data, setData] = useState()

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
          (response) => setData(response.data)
        )
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    });
  
    return (
      <div>
        {data.map(item => (
          <p>{item}</p>
        ))}
      </div>
    );
}

export default Api;