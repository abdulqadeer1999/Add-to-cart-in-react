
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

function App() {

  const [value, setValue] = useState(0)

  function add() {
    setValue(value + 1)
  }
  function sub() {
    setValue(value - 1)

  }
  return (
    <div>

      <div className="cart1">
        

        <br />
        <br />
        
        <button  style = {{marginRight : "40px"}}  onClick={sub}  > - </button>
        {value}
        <button style = {{marginRight : "40px" }} onClick={add} > + </button>
        <br />
        <br />
        <div className="cart2">
          <img width="250px" src="https://u5j4h3u7.stackpathcdn.com/pub/media/catalog/product/cache/172d96e30d7cd3d4380b53391edef300/3/0/303395.jpg" alt="sweets" /> <br />
          {/* <button style={{ marginRight: "20px" }} onClick={add}>Add to cart</button> */}
   
          <button type="button" class="btn btn-outline-success" onClick = {add}>Add To Cart</button>

        </div>
      </div>
    </div>


  );
}

export default App;
