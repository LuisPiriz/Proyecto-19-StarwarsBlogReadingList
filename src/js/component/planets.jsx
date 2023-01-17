import React from 'react'
import { Link } from "react-router-dom";

export const Planets = (props) => {
  return (
<div className="col">
<div className="card mx-3" style={{height: 440, width: 350}}>
        {/* <img src={props.imageUrl} className="card-img-top" alt="..." /> */}
        <img src="https://lumiere-a.akamaihd.net/v1/images/header-starwars-mobile-01_2b709a38.jpeg?region=0,0,640,400" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Gender: {props.gender}</li>
            <li className="list-group-item">Hair color: {props.hair}</li>
            <li className="list-group-item">Eye-color: {props.eye}</li>
          </ul>
          <Link to={"/single2/"+props.id} type="button" className="btn btn-outline-primary">Learn more</Link>
          <button type="button" className="btn btn-outline-warning float-end"><i className="fa fa-heart"></i></button>
        </div>
      </div>
    </div>
  )
}
