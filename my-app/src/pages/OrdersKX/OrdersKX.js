import React ,{useState, useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const OrdersKX = () => {
  const[data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5001/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
        <div class="box-shadow">
  
  <h1><strong><b><u>Knowledge Explorers Orders</u></b></strong></h1>
  

  <table id="customers">
  <tr>
    <th>KX Order Number</th>
    <th>Order Name</th>
    <th>Description</th>
    <th></th>
  </tr>
  
  {data.map((item, index)=> {
    return(
  <tr>
    <td>{item.kx_order_number}</td>
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
    </div>
  )
}

export default OrdersKX