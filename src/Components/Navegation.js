import React, { useContext } from 'react'
import carrito from '../assets/img/cart.png';
import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { AppContext } from '../Context'

function Navegation() {

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");
  const  { carro, getcatidadCarro }  = useContext(AppContext);
  const total = getcatidadCarro(carro);
  
  return (

    <>
    <Navbar bg="info" variant="danger">
        <Container>
            <Navbar.Toggle />

            <NavLink  to="/">🍕 Pizzería Mamma Mia!</NavLink>
           
            <Navbar.Collapse className="justify-content-end">

       
                <NavLink className={setActiveClass} to="/carrito" >
                    <img src={carrito} alt="cart" width={40}/>
                </NavLink>
                <span> $ {total}</span>
            </Navbar.Collapse>
           
        </Container>
    </Navbar>
    </>

  )
}

export default Navegation