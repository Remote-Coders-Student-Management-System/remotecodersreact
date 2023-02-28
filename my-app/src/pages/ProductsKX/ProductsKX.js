import React from 'react'

const ProductsKX = () => {
  return (
    <div>
           <div class="box-shadow">
  
  <h1><strong><b><u>Knowledge Explorers Products</u></b></strong></h1>
  <p>Sorry!, but you do not have any registered orders right now please "create" a item to update,edit, and delete</p>

  <table id="customers">
  <tr>
    <th>ID</th>
    <th>KX Product Number</th>
    <th>Product Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>KXP001 </td>
    <td> Chasis </td>
    <td> 20 in stock</td>
  </tr>
  </table>


<div id="mybutton4">
<a href="orders-create-KE.html"><button class="button button1">Create</button></a> 
</div>


<div id="mybutton3">
<button class="button button1">Delete</button>
</div>

<div id="mybutton2">
<a href="orders-edit-KE.html"><button class="button button1">Edit</button></a>
</div>

<div id="mybutton1">
<a href="orders-update-KE.html">   <button class="button button1">Update</button></a> 
</div>
</div>
    </div>
  )
}

export default ProductsKX