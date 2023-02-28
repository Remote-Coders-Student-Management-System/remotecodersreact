import React ,{useState, useEffect} from 'react'
import axios from "axios"
import './style.css'
import { Link } from 'react-router-dom'

const OrdersPD = () => {
  const[data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return ( 
    <div class="box-shadow">
  
  <h1><strong><b><u>Product Design Orders</u></b></strong></h1>
  
  <table id="customers">
  <tr>
    <th>PD Order Number</th>
    <th>Order Name</th>
    <th>Description</th>
    <th></th>
  </tr>
  
  {data.map((item, index)=> {
    return(
  <tr>
    <td>{item.pd_order_number}</td>
    <td>{item.order_name}</td>
    <td>{item.description}</td>

    <td>
      
      
       <Link to={`/view/${item.username}`}>
         <button className='btn btn-view'>View</button>
         </Link>             
         <button className='btn btn-delete' >Delete</button>       
      </td>
  </tr>
  )
    
})}


  </table>

<div id="mybutton4">
<a href="orders-create-KE.html"><button class="button button1">Create</button></a> 
</div>



</div>

  ) }

  export default OrdersPD