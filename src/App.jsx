import React from 'react'
import './App.css'
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Navbar from "./components/Navbar"
import PageNoFound from "./components/PageNoFound"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import AddUser from './components/user/AddUser'
import EditUser from './components/user/EditUser'
import ViewUser from './components/user/ViewUser'



function App() {
	return (
		<div className="App">
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/contact" element={<ContactUs />}/>
        <Route path="/users/add" element={<AddUser />}/>
        <Route path="/users/edit/:userId" element={<EditUser />}/> {/*dymamic routing// route for particular user*/}
        <Route path="/users/view/:userId" element={<ViewUser />}/>
        <Route path="*" element={<PageNoFound />}/>
            </Routes>
            </BrowserRouter>
		</div>
	)
}

export default App
