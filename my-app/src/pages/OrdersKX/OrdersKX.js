import React from 'react'


const OrdersKX = () => {
  return (
    <div>
        <div class="box-shadow">
  
  <h1><strong><b><u>Knowledge Explorers Orders</u></b></strong></h1>
  <p>Sorry!, but you do not have any registered orders right now please "create" a item to update,edit, and delete</p>

  <table id="customers">
  <tr>
    <th>KX Order Number</th>
    <th>Order Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>KX0001</td>
    <td>Magicbit </td>
    <td>Quantity 1 & Price Rs.8000/-</td>
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

export default OrdersKX