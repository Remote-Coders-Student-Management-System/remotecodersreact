import React from 'react'
import './CreateSupplier.css'

const CreateSupplier = () => {
  return (
    <div id='createform'>
         <h4 class='create'>Create Supplier</h4>
    <form >
      <label for="fname">Supplier Name  </label>
      <input type="text" id="fname" name="firstname" placeholder="Supplier name.."/>
      <br/>
  
      <label for="email">Supplier Email  </label>
      <input type="text" id="email" name="email" placeholder="Supplier email.."/>
     <br/>
      <label for="phone">Supplier Phone No </label>
      <input type="text" id="phone" name="phone" placeholder="Supplier phone no.."/>
    <br/>
      <label for="order">Order By Supplier</label>
      <input type="text" id="order" name="order" placeholder="Order by supplier.."/>

      <br/>
      <input type="submit" value="Create"/>
    </form>

  </div>
  
  )
}

export default CreateSupplier