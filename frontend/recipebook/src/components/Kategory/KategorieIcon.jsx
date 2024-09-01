import React from 'react';
import { Link } from "react-router-dom";

const KategorieIcon = ({ kategory, API_URL }) => {
  return (
    <div className="d-flex flex-column align-items-center gap-1">
        <Link to={`/rezepte?q=${kategory.name}`} className="btn btn-primary d-flex align-items-center justify-content-center shadow" style={{height: "45px", width: "45px", borderRadius: "50%"}}>
          <img src={`${API_URL}${ kategory.icon }`} width="25px" height="25px" alt="Icon" />
        </Link>
        <span>{ kategory.name }</span>
    </div>
  )
}

export default KategorieIcon