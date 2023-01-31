import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import { AppContext } from '../Context'
import Card from 'react-bootstrap/Card';

function Pizza() {

  const id = useParams();
  const  { pizzas }  = useContext(AppContext);
  const pizza = pizzas.find(pizza => pizza.id === id.name )
  const { agregarCarro } = useContext(AppContext);
  return (
  <>
   <div className="contpizza">
   
      <div className="card mb-3 "  style={{ width: '80%' }}>
          <div className="row g-0">
            <div className="col-md-4">
                <img src={pizza.img} className="img-fluid rounded-start"></img>
            </div>
            <div className="col-md-8 text-left">
              <div className="card-body text-left">
                <h5 className="card-title text-left">{pizza.name}</h5>
                <p className="card-text text-left">{pizza.desc}</p>
                <h5> Ingredientes</h5>
                <ul>
                {pizza.ingredients.map((ingredients, index) =>{
         return  <li key={index.toString()}>🍕 {ingredients}</li>
        })} 
                </ul>
                <p className="card-text">${pizza.price}</p>
                <button className='btn btn-danger' onClick={() => agregarCarro(pizza)}>Añadir 🛒</button>
         
              </div>
            </div>
          </div>
      </div>
  </div>
      
    
  </>
   

  )
}

export default Pizza