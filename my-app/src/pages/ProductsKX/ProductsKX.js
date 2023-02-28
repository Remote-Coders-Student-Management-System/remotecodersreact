import React ,{useState, useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const ProductsKX = () => {
  const[data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5003/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
           <div class="box-shadow">
  
  <h1><strong><b><u>Knowledge Explorers Products</u></b></strong></h1>
  

  <table id="customers">
  <tr>
    <th>ID</th>
    <th>KX Product Number</th>
    <th>Product Name</th>
    <th>Description</th>
    <th></th>
  </tr>
  {data.map((item, index)=> {
    return(
  <tr>
    <td>{item.id}</td>
    <td>{item.kx_product_id}</td>
    <td>{item.product_name}</td>
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

export default ProductsKX