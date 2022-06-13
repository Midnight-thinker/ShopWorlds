import React from 'react'

export default function Cards(props) {
  return (
    
    
      <div class="card" style={{width: "15rem", margin: "52px"}}>
        <img src={props.picture} style={{height: "13rem"}} class="card-img-top" alt="Grocery" />
        <div class="card-body">
          <h5 class="card-title">{props.heading}</h5>
          <p class="card-text">Category: {props.category}</p>
          <p class="card-text">Location: {props.location}</p>
          <p class="card-text">Status: {props.status}</p>
          <a href="#" class="btn btn-primary">Check</a>
        </div>
      </div>
    
  )
}