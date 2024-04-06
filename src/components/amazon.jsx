import React from 'react'
import list from "../data";
import Cards from "./card";


const amazon = () => {
  return (
    <section>
      {list.map((item) => {
        <Cards/>
      })}
      
    </section>
  )
}

export default amazon
