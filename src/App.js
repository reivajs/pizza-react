import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navegation";
import {AppContext} from './Context'
import Home from './Views/Home';
import Pizza from './Views/Pizza';
import Carrito from './Views/Carrito'



function App() {

let carroDeCompra   = []



  const [pizzas, setPizzas] = useState([]);
  const [carro, setCarro] = useState(carroDeCompra);
 var totalCarro = 0
 

  useEffect(()=>{
    fetch('/React-Mamma-Mia/pizzas.json')
    .then(res => res.json())
    .then(data => setPizzas(data))
    .catch(e =>  console.error(e.message))
  })

  const getPizza = (id) => pizzas.find(pizza => pizza.id === id)

  const agregarCarro =(pizzaP)=>{
    setCarro((currItems) => {

      if (currItems.find((item) => item.pizzaP.id === pizzaP.id) == null) {
          
        return [...currItems, { pizzaP, quantity: 1, total: pizzaP.price }];

      } else {
        return currItems.map((item) => {
     
          if (item.pizzaP.id === pizzaP.id) {
            return { ...item, quantity: item.quantity + 1, total: item.pizzaP.price* (item.quantity +1) };
          } else{
            return item;
          }

        });
      }
    });
 
  }


  const eliminarCarro =(pizzaP)=>{
    setCarro((currItems) => {

      if (currItems.find((item) => item.pizzaP.id === pizzaP.id)?.quantity === 1) {


        return currItems.filter((item) => item.pizzaP.id !== pizzaP.id)
      } else {
        return currItems.map((item) => {
          if (item.pizzaP.id === pizzaP.id) {

            return { ...item, quantity: item.quantity - 1, total: (item.pizzaP.price* (item.quantity)) - item.pizzaP.price  };
          } else{
            return item;
          }

        });
      }
    });
  }

 function getcatidadCarro(carro) {
    const cantidad = carro.reduce((acc,el) => acc+el.total,0)
return cantidad
 }



  return (
    <div className="App">
      <AppContext.Provider  value={{pizzas, getPizza, agregarCarro, carro,eliminarCarro,getcatidadCarro}}>
              <BrowserRouter basename='React-Mamma-Mia'>
                <Navbar></Navbar>
                        <Routes>
                            <Route path="/" element={<Home />} index/>
                            <Route path="/Carrito" element={<Carrito />} />
                            <Route path="/Pizza/:name" element={<Pizza />} />
                        </Routes>
              </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
