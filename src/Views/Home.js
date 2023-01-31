import React from 'react'
import PizzaCard from '../Components/PizzaCard'


function Home() {
  
  return (
    <>
     <section className='banner' style={{ 
      backgroundImage: `url(/React-Mamma-Mia/Header.jpg)`   }}>
        <div >
          <h2 >¡Pizzería Mamma Mia!</h2>
          <h4 >
            ¡Tenemos las mejores pizzas que podrás encontrar!
          </h4>
          <hr />
        </div>
      </section>
        <PizzaCard></PizzaCard>
    </>
  )
}

export default Home