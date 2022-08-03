import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"

function AddUser() {
const MY_API = "https://fake-crud-server.herokuapp.com/users"
    const initialstate = {
        name: "", 
        username: "", 
        email: "", 
        phone: "", 
        website: "",
    };
    
    const navigate = useNavigate();
    const [user, setUser] = useState(initialstate)

    const {name, username, email, phone, website} = user;


    const onChangeInput = (event)=>{
        // console.log(event);
        // console.log(event.target.name);
        // console.log(event.target.value);
        // Spread operator appends to existing data
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const onFormSubmit = async (event)=>{
        event.preventDefault();
        if(!user.name){
            alert("Name can not be empty.")
        }
        if(!user.username){
            alert("username can not be empty.")
        }
        if(!user.email){
            alert("email can not be empty.")
        }
        if(!user.phone){
            alert("phone can not be empty.")
        }
        if(!user.website){
            alert("website can not be empty.")
        }

        if(user.name && user.username && user.email && user.phone && user.website){
        await axios.post(MY_API, user);
        navigate({pathname: "/"})}
    }

  return (
    <div className='container'>
    <div className='w-75 mx-auto p-5 shadow'>
        <h2 className='text-center mb-4'>Add User</h2>
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
        <button type='submit' className='btn btn-info text-white mt-2 col-12'>Submit info</button>
        </form>
    </div>
    </div>
  )
}

export default AddUser
