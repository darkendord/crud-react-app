import React from "react"
import { Button } from 'react-bootstrap';
import "./css-components/PageNoFound.css";
import {useNavigate} from "react-router-dom";

export default function PageNoFound(){
    const navigate = useNavigate();
    const redirectHome = ()=>{
        navigate("/")
    }
    return(
        <div className="hide-navbar">
        <h1 className="p-4">The page you are looking for was not found</h1>
      
        <Button variant="primary" onClick={redirectHome}>Return to home page</Button>

        </div>
    )
}