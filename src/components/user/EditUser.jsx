import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom"

function EditUser() {

    const {userId} = useParams();// Will take the userID value from the url an return it
    const navigate = useNavigate();

    const initialstate = {
        name: "", 
        username: "", 
        email: "", 
        phone: "", 
        website: "",
    };
    
    const [user, setUser] = useState(initialstate)

    const {name, username, email, phone, website} = user;


    const onChangeInput = (event)=>{
        // console.log(event);
        // console.log(event.target.name);
        // console.log(event.target.value);
        // Spread operator appends to existing data
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    useEffect(()=>{
        fetchUser()
    },[])

    const fetchUser = async ()=>{
        const response = await axios.get(`http://localhost:5000/users/${userId}`);
        // console.log(response)
        setUser(response.data)
    }
 

    const onFormSubmit = async (event)=>{
        event.preventDefault();
        if(!user.name){
            alert("Name can not be ")
        }
        if(!user.username){
            alert("username can not be ")
        }
        if(!user.email){
            alert("email can not be ")
        }
        if(!user.phone){
            alert("phone can not be ")
        }
        if(!user.website){
            alert("website can not be ")
        }

        await axios.put(`http://localhost:5000/users/${userId}`, user);
        navigate({pathname: "/"})
    }

  return (
    <div className='container'>
    <div className='w-75 mx-auto p-5 shadow'>
        <h2 className='text-center mb-4'>Edit User</h2>
        <form onSubmit={(event)=>{onFormSubmit(event)}}>
        <div className='form-group mb-2'>
            <input type="text"
            className='form-control form-control-lg'
            placeholder="Enter full name"
            name='name'
            value={name}
            onChange={(event)=>onChangeInput(event)}
            />
        </div>
        <div className='form-group mb-2'>
            <input type="text"
            className='form-control form-control-lg'
            placeholder="Enter username"
            name='username'
            value={username}
            onChange={(event)=>onChangeInput(event)}
            />
        </div>
        <div className='form-group mb-2'>
            <input type="email"
            className='form-control form-control-lg'
            placeholder="Enter email"
            name='email'
            value={email}
            onChange={(event)=>onChangeInput(event)}
            />
        </div>
        <div className='form-group mb-2'>
            <input type="text"
            className='form-control form-control-lg'
            placeholder="Enter phone number"
            name='phone'
            value={phone}
            onChange={(event)=>onChangeInput(event)}
            />
        </div>
        <div className='form-group mb-2'>
            <input type="text"
            className='form-control form-control-lg'
            placeholder="Enter website"
            name='website'
            value={website}
            onChange={(event)=>onChangeInput(event)}
            />
        </div>
        <button type='submit' className='btn btn-info text-white mt-2 col-12'>Update info</button>
        </form>
    </div>
    </div>
  )
}

export default EditUser
