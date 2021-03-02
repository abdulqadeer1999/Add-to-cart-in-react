
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

function App() {

  const [cart, setCart] = useState([])
  const [product, setproduct] = useState([
    {
      title: "sweet",
      price: "200",
      imgaeUrl: "https://u5j4h3u7.stackpathcdn.com/pub/media/catalog/product/cache/172d96e30d7cd3d4380b53391edef300/3/0/303395.jpg"
    },
    {
      title: 'sweet2',
      price: "100",
      imgaeUrl: "https://u5j4h3u7.stackpathcdn.com/pub/media/catalog/product/cache/172d96e30d7cd3d4380b53391edef300/3/0/303395.jpg"
    },
    {
      title: "sweet3",
      price: "50",
      imgaeUrl: "https://u5j4h3u7.stackpathcdn.com/pub/media/catalog/product/cache/172d96e30d7cd3d4380b53391edef300/3/0/303395.jpg "
    }
  ])



  // function add() {
  //   setValue(value + 1)
  // }
  // function sub() {
  //   setValue(value - 1)

  // }

  function addcart(index) {
var i = {
  price : product[index].price,
  tittle : product[index].title,
  imgaeUrl : product[index].imgaeUrl
  
}
  setCart([...cart,i])
  console.log(cart)

  }



  return (
    <>

      { product.map((value, index) => (
        <div key={index}>
          <h5>{value.title}</h5>
          <h5>{value.price} </h5>
          <img src={value.imgaeUrl} className="cart2" alt="sweet" />

          <br />
          <br />



          <button type="button" class="btn btn-outline-success" onClick={ () => addcart(index)}>Add To Cart</button>

        </div>
      ))}
       <div>
      { cart.map((value, index) => (
        <div key={index}>
          <h5>{value.title}</h5>
          <h5>{value.price} </h5>
         

       </div>
 ))}
          </div>
         



    </>
  )
}


export default App;
