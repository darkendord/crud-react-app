import React, { useState, useEffect } from "react";
import axios from "axios";
import {Table, Button, Spinner} from 'react-bootstrap';
import { Link } from "react-router-dom";




export default function Home(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(()=>{
      getAllUsersAwait();
    },[])
    

    const getAllUsersAwait = async()=>{
      const result = await axios.get("http://localhost:5000/users");
      setUsers(result.data.reverse())
       setLoading(false)
    }  
    

    const deleteUser = async (userId)=>{
      await axios.delete(`http://localhost:5000/users/${userId}`);
      getAllUsersAwait();
    }
    


    // const getAllUsers = ()=>{
    //     axios.get("http://localhost:5000/users")
    //     .then((res)=>{
    //         console.log(res.data)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     });
    //     console.log("waiting for data")
    // }


    return(
        <div className="container">
          {loading ? <Spinner animation="border" /> 
          :

          <div>
        <h2>User management System</h2>
         <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, index)=>{
            return <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>
            <Link to={`/users/view/${user.id}`}  className="btn btn-info mx-2">View</Link>
            <Link to={`/users/edit/${user.id}`} className="btn btn-outline-info mx-2">Edit</Link>
            <Button onClick={()=>deleteUser(user.id)} variant="danger">Delete</Button>
          </td>
        </tr>
          })
        }
        
      </tbody>
    </Table>
    </div>}
        </div>
    )
}