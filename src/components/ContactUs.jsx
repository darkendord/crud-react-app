import React from "react";

export default function ContactUs(){
    return(
        <div className="container">
        <h2 className="py-3">Contact me:</h2>
        <form className="mx-3">
         
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
    onSubmit="submit"
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name:</label>
    <input type="text" className="form-control" id="name" required/>
  </div>
  <div className="mb-3">
    <label htmlFor="query" className="form-label">Your message:</label>
    <textarea className="form-control" id="query"></textarea>
    <div id="query" className="form-text">Leave a message (optional).</div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}