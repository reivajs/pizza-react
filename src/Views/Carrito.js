import React, { useContext } from 'react'
import { AppContext } from '../Context'
import Table from 'react-bootstrap/Table';

function Carrito() {
  const  { carro , agregarCarro, eliminarCarro,getcatidadCarro }  = useContext(AppContext);
  const total = getcatidadCarro(carro);
  return (
    <>
     <div className='containerCarro'>
    <p>Detalles del pedido:</p>
     
            { 
              carro.map((data) => {
                return(
               
                  <div className='contTabla' key={data.pizzaP.id}>
                      <table>
                          <tbody>
                            <tr>
                              <td className='tdImg'>  <img src={data.pizzaP.img} width={200}></img></td>
                              <td className='tdName'> {data.pizzaP.name} </td>
                        
                              <td> $ {data.pizzaP.price * data.quantity }</td>
                              
                              <td>   <button className='btn btn-info' onClick={()=>agregarCarro(data.pizzaP)} >+</button> </td>
                              <td>  {data.quantity}</td>
                              <td>    <button className='btn btn-danger' onClick={()=>eliminarCarro(data.pizzaP)}>-</button> </td>
                            </tr>
                          </tbody>
                  
                    </table>
                  
                  </div>
                  
                  )
            })
          }
          <h4>Total:{total} </h4>
    </div>      
    </>
  )
}

export default Carrito