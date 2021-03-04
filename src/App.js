
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

function App() {
  const [value , setValue] = useState(1)
  const [cart, setCart] = useState([])
  const [product] = useState([
    {
      title: "sweet1",
      price: "200",
      id : "123",
      imgaeUrl: "https://u5j4h3u7.stackpathcdn.com/pub/media/catalog/product/cache/172d96e30d7cd3d4380b53391edef300/3/0/303395.jpg"
    },
    {
      title: 'sweet2',
      price: "100",
      id : "234",
      imgaeUrl: "https://u5j4h3u7.stackpathcdn.com/pub/media/catalog/product/cache/172d96e30d7cd3d4380b53391edef300/3/0/303395.jpg"
    },
    {
      title: "sweet3",
      price: "50",
      id : "789",
      imgaeUrl: "https://u5j4h3u7.stackpathcdn.com/pub/media/catalog/product/cache/172d96e30d7cd3d4380b53391edef300/3/0/303395.jpg "
    }
  ])



  const  add = () => {
    setValue(value + 1)
  }
  const sub = () => {

  if(value === 1) return;
  const newValue = value-1
  setValue (newValue)
  }

  function addcart(value) {

var add = cart.find((cart) => cart.id === value.id)
if(add === undefined) {
setCart([...cart,value])
  
} 


  else  {
  alert ('cart already exist')   
}
  // setCart([...cart,add])
  // console.log(cart)

}



  return (
    <>

      { product.map((value, index) => (
        <div key={index}>
          <div className = "cart3">
          <h5>{value.title}</h5>
          <h5>{value.price} </h5>
          <h5>{value.id}</h5>
          <img src={value.imgaeUrl} className="cart2" alt="sweet" />
         
          </div>

          <br />
          <br />



          <button style = {{marginRight:"200px"}} type="button" className="btn btn-outline-success" onClick={ () => addcart(value)}>Add To Cart</button>

        </div>
      ))}
       <div>
      { cart.map((event, index) => (
        <div key={index}>
          <h5>{event.title}</h5>
          <img src = {event.imgaeUrl} style = {{width : "200px"}} alt ="sweet" className = "cart2" />
          <h3> price = {event.price} </h3>
          <h5> id = {event.id}</h5>

          <button type="button" className="btn btn-success"onClick = {add} >+</button> Qunatity = {value}
          <button type="button" className="btn btn-danger"onClick = {sub} >-</button>
                                               
         
         

       </div>
 ))}
          </div>
         



    </>
  )
}


export default App;
