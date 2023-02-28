import React from 'react'
import './Suppliers.css'

const Suppliers = () => {
  return (
    <div id='suppliers' >
      <h2>Supplier Details</h2>
<table>
  <tr>
    <th>Supplier Name</th>
    <th>Supplier Email</th>
    <th>Supplier Phone Number</th>
    <th>Order By Supplier</th>
    
  </tr>

  
  <tr>
    <td> Magic Bit</td>
    <td>magicbit@gmail.com</td>
    <td>07734834232</td>
    <td>test</td>
  </tr>
  <tr>
    <td> Tronics LK</td>
    <td>tronicslk@gmail.com</td>
    <td>011245845</td>
    <td>test</td>
  </tr>
  <tr>
    <td>Components</td>
    <td>components123@gmail.com</td>
    <td>077235231</td>
    <td>test</td>
  </tr>
  <tr>
    <td>Material</td>
    <td>material45@gmail.com</td>
    <td>011232434</td>
    <td>test</td>
  </tr>
  </table>

  <div>
    <a href='/CreateSupplier' >
  <button class="button button2">Create Supplier</button>
  </a>
  </div>

  
</div>
  )
}

export default Suppliers