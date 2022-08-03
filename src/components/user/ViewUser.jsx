import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, useParams} from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup';


const ViewUser = () => {
const MY_API = "https://fake-crud-server.herokuapp.com/users"
    const {userId} = useParams();// Will take the userID value from the url an return it

    const [address, setAddress] = useState({})
    const [company, setCompany] = useState({})

const initialstate = {
        name: "", 
        username: "", 
        email: "", 
        phone: "", 
        website: "",
    };
    
    const [user, setUser] = useState(initialstate)


     useEffect(()=>{
        fetchUser()
    },[])

    const fetchUser = async ()=>{
        const response = await axios.get(`${MY_API}/${userId}`);
        setUser(response.data)    
        setAddress(response.data.address)    
        setCompany(response.data.company)    
        console.log(response.data.address)
    }


  return (
    <div className='container'>
        <Link to="/" className='btn btn-outline-info mt-2'>Back</Link>
        <p className='display-2'>User ID: {user.id}</p>
      <ListGroup variant="flush" className='p-2 w-75'>
      <ListGroup.Item>{user.name}</ListGroup.Item>
      <ListGroup.Item>Full name{user.username}</ListGroup.Item>
      <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
      <ListGroup.Item>Email: {user.email}</ListGroup.Item>
      <ListGroup.Item>Website: {user.website}</ListGroup.Item>
      <ListGroup.Item>Address: {address ? address.street : "Miss address"}</ListGroup.Item>
      <ListGroup.Item>Company name: {company ? company.name : "Miss company"}</ListGroup.Item>
      
    </ListGroup>
    </div>
  )
}

export default ViewUser
